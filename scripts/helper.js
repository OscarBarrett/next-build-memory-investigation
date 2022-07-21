const fs = require('fs');
const path = require('path');

const total = 1000;
const numPages = 20; // Total pages will be 3x this when running `testAll`

function createPages(name, contents) {
  new Array(numPages).fill(0).forEach((_, i) => {
    fs.writeFileSync(path.resolve(__dirname, '..', 'pages', 'test', `${name}-${i}.jsx`), contents);
  });
}

module.exports = {
  total,
  createPages,
};
