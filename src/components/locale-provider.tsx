import React from 'react';
import { ConfigProvider } from 'antd';
import { useTranslation } from 'react-i18next';
import { Locale } from 'antd/es/locale-provider';
import { ReactNode } from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';

import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProviderProps } from 'antd/es/config-provider';

const locales = { 'en-US': enUS, 'zh-CN': zhCN };

type LocaleProviderProps = {
  children: ReactNode;
  locales?: {
    [key in string]: Locale;
  };
} & ConfigProviderProps;

const LocaleProvider = ({ children, locales, ...props }: LocaleProviderProps) => {
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
  locales
};

export default LocaleProvider;
