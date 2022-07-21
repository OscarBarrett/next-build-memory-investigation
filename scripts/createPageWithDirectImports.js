const { total, createPages } = require('./helper');

let contents = `
import React from 'react';
`;

// Imports
new Array(total).fill(0).forEach((_, i) => {
  contents += `import C${i} from '../../components/C${i}';\n`;
});

// Usage
contents += `
const PageWithDirectImports = () => (
  <div>\n`;

new Array(total).fill(0).forEach((_, i) => {
  contents += `    <C${i} />\n`;
});

contents += `  </div>
);

export default PageWithDirectImports;`

createPages('direct-imports', contents);
