import i18next, { i18n, InitOptions, Newable, TFunction } from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import 'moment/locale/zh-cn';

export default (
  inLngDetect: Newable<any>,
  inI18nInstance?: i18n,
  inInitOptions?: InitOptions
): Promise<TFunction> => {
  const instance = inI18nInstance || i18next.use(inLngDetect).use(Backend).use(initReactI18next);
  const options = Object.assign(
    {},
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
        loadPath: '/locales/{{lng}}.json'
      },
      interpolation: {
        escapeValue: false
      }
    },
    inInitOptions
  );

  return instance.init(options);
};
