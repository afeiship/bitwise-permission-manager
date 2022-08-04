import React from 'react';
import { useIntl } from '../../src/main';
import styled from 'styled-components';
import { Select, Space, Table, DatePicker, TimePicker } from 'antd';

const Container = styled.div``;

const items = [
  { value: 'en-US', label: 'English' },
  { value: 'zh-CN', label: '中文' }
];

export default () => {
  const { t, i18n } = useIntl();
  return (
    <Container>
      <div className="App">
        <header className="App-header">
          <Select
            defaultValue={i18n.language}
            style={{ width: 120 }}
            onChange={(value) => i18n.changeLanguage(value)}
            options={items}
          />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <h1 style={{ color: '#fff' }}>{t('key')}</h1>
          <br />
          <Space>
            <Table style={{ width: 400 }} dataSource={[]} />
            {/* @ts-ignore */}
            <DatePicker />
            <TimePicker />
          </Space>
        </header>
      </div>
    </Container>
  );
};
