import LngDetect from './lng-detect';
import App from './app';
import { LocaleProvider } from '../../src/main';
import React from 'react';
import styled from 'styled-components';

const ChangeContainer = styled.div`
  margin: 10px 0;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  padding: 10px;
  border-radius: 5px;
`;

const resources = {
  'en-US': { translation: require('../locales/en-US.json') },
  'zh-CN': { translation: require('../locales/zh-CN.json') }
};

export const LocaleApp = () => {
  const qs = new URL(document.URL).searchParams;
  const mode = qs.get('mode') || 'backend';
  return (
    <>
      <ChangeContainer>MODE: {mode}</ChangeContainer>
      {mode === 'backend' && (
        <LocaleProvider mode="backend" plugins={[LngDetect]}>
          <App />
        </LocaleProvider>
      )}

      {mode === 'memory' && (
        <LocaleProvider mode="memory" options={{ resources }} plugins={[LngDetect]}>
          <App />
        </LocaleProvider>
      )}
    </>
  );
};
