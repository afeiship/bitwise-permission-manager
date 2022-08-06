import { InitOptions, TFunction } from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { ThirdPartyModule, SHARED_INIT_OPTIONS, getInstance4Modules } from '../shared';

type BackendInitOptions = Omit<InitOptions, 'resources'>;

export default (
  inInitOptions?: BackendInitOptions,
  inModules?: ThirdPartyModule[]
): Promise<TFunction> => {
  const modules = [Backend, initReactI18next, ...(inModules || [])];
  const instance = getInstance4Modules(modules);
  const options = {
    ...SHARED_INIT_OPTIONS,
    backend: { loadPath: 'locales/{{lng}}.json' },
    ...inInitOptions
  };

  return instance.init(options);
};
