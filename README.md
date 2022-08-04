# react-ant-i18n
> I18n for antd.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-i18n
```

## usage
1. import css
  ```scss
  @import "~@jswork/react-ant-i18n/dist/style.css";

  // or use sass
  @import "~@jswork/react-ant-i18n/dist/style.scss";

  // customize your styles:
  $react-ant-i18n-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactAntI18n from '@jswork/react-ant-i18n';
  import styled from 'styled-components';

  const Container = styled.div`
    width: 80%;
    margin: 30px auto 0;
  `;

  export default (props: any) => {
    return (
      <Container>
        <ReactAntI18n />
      </Container>
    );
  };

  ```

## preview
- https://afeiship.github.io/react-ant-i18n/

## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-i18n/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-i18n
[version-url]: https://npmjs.org/package/@jswork/react-ant-i18n

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-i18n
[license-url]: https://github.com/afeiship/react-ant-i18n/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-i18n
[size-url]: https://github.com/afeiship/react-ant-i18n/blob/master/dist/react-ant-i18n.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-i18n
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-i18n
