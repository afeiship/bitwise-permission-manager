import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import LocaleProvider from './components/locale-provider';
import init4backend from './components/init4backend';
import init4memory from './components/init4memory';

export const useIntl = useTranslation;
export { LocaleProvider, init4backend, init4memory, i18next };
