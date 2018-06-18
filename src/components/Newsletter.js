import React from 'react';
import { Email, Item, Span, A } from 'react-html-email';

import TestWrapper from './TestWrapper';

const Newsletter = () => (
  <Item>
    <Span>
      This is an example email made with:
      <A href="https://github.com/chromakode/react-html-email">
        react-html-email
      </A>.
    </Span>
  </Item>
);

const Final = () => (
  <Email title="Hello World!">
    <Newsletter />
  </Email>
);

export const Test = () => (
  <TestWrapper>
    <Newsletter />
  </TestWrapper>
);

export default Final;
