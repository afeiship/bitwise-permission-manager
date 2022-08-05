import i18next, { InitOptions, Module } from 'i18next';
import { initReactI18next } from 'react-i18next';

export interface ThirdPartyModule extends Module {}

export default (inInitOptions?: InitOptions, inModules?: ThirdPartyModule[]) => {
  const modules = [initReactI18next, ...(inModules || [])];
  const instance = modules.reduce((instance, module) => instance.use(module), i18next);
  const options = Object.assign(
    {
      supportedLngs: ['zh-CN', 'en-US'],
      fallbackLng: 'en-US',
      load: 'currentOnly',
      ns: 'translation',
      debug: process.env.NODE_ENV === 'development',
      preload: false,
      interpolation: {
        escapeValue: false
      }
    },
    inInitOptions
  );

  return instance.init(options);
};
