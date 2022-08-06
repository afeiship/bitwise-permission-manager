import { InitOptions, Module } from 'i18next';

export interface ThirdPartyModule extends Module {}
export type BackendInitOptions = Omit<InitOptions, 'resources'>;
