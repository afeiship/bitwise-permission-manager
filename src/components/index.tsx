import React from 'react';
import { ConfigProvider } from 'antd';
import { useTranslation } from 'react-i18next';
import { Locale } from 'antd/es/locale-provider';
import { ReactNode } from 'react';
import moment from 'moment';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProviderProps } from 'antd/es/config-provider';

const defLocals = { 'en-US': enUS, 'zh-CN': zhCN };

type LocaleProviderProps = {
  children: ReactNode;
  locales?: {
    [key in string]: Locale;
  };
} & ConfigProviderProps;

export const LocaleProvider = ({ children, locales, ...props }: LocaleProviderProps) => {
  const { i18n } = useTranslation();
  const theLocales = locales || defLocals;
  const lang = i18n.language as keyof typeof theLocales;
  const lowerLocale = lang.toLowerCase();

  moment.locale(lowerLocale);

  return (
    <ConfigProvider locale={theLocales[lang]} {...props}>
      {children}
    </ConfigProvider>
  );
};
