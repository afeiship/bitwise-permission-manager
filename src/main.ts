import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import LocaleProvider from './components/locale-provider';
import init4backend from './components/init4backend';

export const useIntl = useTranslation;
export { LocaleProvider, init4backend, i18next };
