const { total, createPages } = require('./helper');

let contents = `
import React from 'react';
`;

// Direct imports
new Array(total / 2).fill(0).forEach((_, i) => {
  contents += `import C${i} from '../../components/C${i}';\n`;
});

// Barrel imports
const imports = new Array(total / 2).fill(0).map((_, i) => `C${i+(total / 2)}`);
contents += `import { ${imports.join(',')} } from '../../components/index';`;

// Usage
contents += `
const PageWithMixedImports = () => (
  <div>\n`;

new Array(total).fill(0).forEach((_, i) => {
  contents += `    <C${i} />\n`;
});

contents += `  </div>
);

export default PageWithMixedImports;`

createPages('mixed-imports', contents);

