import React from 'react';
import { render } from 'react-dom';
import { renderEmail } from 'react-html-email';

import Final, { Test } from './components/Newsletter';

/*eslint-disable-next-line*/
console.log(renderEmail(<Final />));

render(<Test />, document.getElementById('root'));
