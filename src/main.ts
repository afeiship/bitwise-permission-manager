import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import LocaleProvider from './components/locale-provider';

export const useIntl = useTranslation;
export { LocaleProvider, i18next };
