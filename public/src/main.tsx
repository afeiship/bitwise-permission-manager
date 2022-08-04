import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.scss';
import { init4backend, LocaleProvider } from '../../src/main';
import LngDetect from './lng-detect';
import App from './app';

init4backend(LngDetect);

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </Suspense>,
  document.getElementById('root')
);
