import React from 'react';
import { Email, Item, Span, A } from 'react-html-email';

import { transformItems } from '../utils';
import TestWrapper from './TestWrapper';

const Newsletter = ({ data }) => {
  const modified = Object.assign({}, data, {
    items: transformItems(data.items)
  });
  return (
    <Item>
      <Span>
        This is an example email made with:
        <A href="https://github.com/chromakode/react-html-email">
          react-html-email
        </A>.
        <code>
          <pre>{JSON.stringify(modified, null, '\t')}</pre>
        </code>
      </Span>
    </Item>
  );
};

export const Final = ({ data }) => (
  <Email title="Hello World!">
    <Newsletter data={data} />
  </Email>
);

export const Test = ({ data }) => (
  <TestWrapper>
    <Newsletter data={data} />
  </TestWrapper>
);
