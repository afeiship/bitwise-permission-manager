import i18next, { InitOptions, Module, TFunction } from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export interface ThirdPartyModule extends Module {}

export default (
  inInitOptions?: InitOptions,
  inModules?: ThirdPartyModule[]
): Promise<TFunction> => {
  const modules = [Backend, initReactI18next, ...(inModules || [])];
  const instance = modules.reduce((instance, module) => instance.use(module), i18next);
  const options = Object.assign(
    {
      // lng:'zh',
      supportedLngs: ['zh-CN', 'en-US'],
      fallbackLng: 'en-US',
      load: 'currentOnly',
      ns: 'translation',
      debug: process.env.NODE_ENV === 'development',
      preload: false,
      backend: {
        // for all available options read the backend's repository readme file
        loadPath: 'locales/{{lng}}.json'
      },
      interpolation: {
        escapeValue: false
      }
    },
    inInitOptions
  );

  return instance.init(options);
};
