import React, { useRef } from 'react';
import { ConfigProvider } from 'antd';
import { useTranslation } from 'react-i18next';
import { InitOptions } from 'i18next';
import { Locale } from 'antd/es/locale-provider';
import { ConfigProviderProps } from 'antd/es/config-provider';
import { ReactNode } from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { ThirdPartyModule } from './shared';

// modes
import init4backend from './init4backend';
import init4memory from './init4memory';

import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';

const locales = { 'en-US': enUS, 'zh-CN': zhCN };

type INIT_MODE = 'backend' | 'memory' | null;
type LocaleProviderProps = {
  children: ReactNode;
  mode?: INIT_MODE;
  options?: InitOptions;
  plugins?: ThirdPartyModule[];
  locales?: {
    [key in string]: Locale;
  };
} & ConfigProviderProps;

const LocaleProvider = ({
  children,
  locales,
  mode,
  options,
  plugins,
  ...props
}: LocaleProviderProps) => {
  const initedRef = useRef(false);
  if (!initedRef.current) {
    switch (mode) {
      case 'backend':
        init4backend(options, plugins);
        break;
      case 'memory':
        init4memory(options, plugins);
        break;
      default:
        console.warn('[LocaleProvider] You need init i18next first!');
    }
    initedRef.current = true;
  }

  const { i18n } = useTranslation();
  const lang: string = i18n.language as keyof typeof locales;
  const lowerLocale = lang.toLowerCase();

  moment.updateLocale(lowerLocale, null);

  return (
    <ConfigProvider locale={locales![lang]} {...props}>
      {children}
    </ConfigProvider>
  );
};

LocaleProvider.defaultProps = {
  locales,
  mode: 'backend'
};

export default LocaleProvider;
