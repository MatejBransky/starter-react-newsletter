import React from 'react';
import { render } from 'react-dom';
import { renderEmail } from 'react-html-email';

import { Final, Test } from './components/Newsletter';
import data from './data';

const lastData = data[data.length - 1];

/*eslint-disable-next-line*/
console.log(renderEmail(<Final data={lastData} />));

render(<Test data={lastData} />, document.getElementById('root'));
