const fs = require('fs');
const path = require('path');
const { total } = require('./helper');

const barrelExports = [];

// Create components
new Array(total).fill(0).forEach((_, i) => {
  const componentName = `C${i}`;
  const contents = `
import React from 'react';

const ${componentName} = () => <div>${componentName}</div>;
export default ${componentName};
  `;
  fs.writeFileSync(path.resolve(__dirname, '..', 'components', `${componentName}.jsx`), contents);
  barrelExports.push(`export { default as ${componentName} } from './${componentName}';`);
});

// Create barrel file
fs.writeFileSync(path.resolve(__dirname, '..', 'components', 'index.js'), barrelExports.join('\n'));
