import init from './components/init';
import { useTranslation } from 'react-i18next';
import { LocaleProvider } from './components';

export const useIntl = useTranslation;
export { LocaleProvider, init };
