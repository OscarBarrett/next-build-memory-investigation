const { total, createPages } = require('./helper');

// Imports
const imports = new Array(total).fill(0).map((_, i) => `C${i}`);

let contents = `
import React from 'react';
import { ${imports.join(',')} } from '../../components/index';
`;

// Usage
contents += `
const PageWithImportsFromBarrelFile = () => (
  <div>\n`;

new Array(total).fill(0).forEach((_, i) => {
  contents += `    <C${i} />\n`;
});

contents += `  </div>
);

export default PageWithImportsFromBarrelFile;`

createPages('barrel-imports', contents);
