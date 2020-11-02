import React from 'react';

import lowerCase from '@micro-ux/micro-dash.lowercase';

export default () => {
  return <div>hello {lowerCase('Foo Bar')}</div>;
};
