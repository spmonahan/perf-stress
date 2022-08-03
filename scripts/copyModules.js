const fs = require('fs-extra');
const path = require('path');

const root = path.join(__dirname, '..');

const wcPath = path.join(root, 'public', 'wc');
const nodeModules = path.join(root, 'node_modules');

const wcDest = path.join(wcPath, 'modules', '@fluentui', 'web-components', 'dist');
const fastElementDest = path.join(wcPath, 'modules', '@microsoft', 'fast-element', 'dist');
const sharedDest = path.join(wcPath, '..', 'shared');

console.log('Removing @fluentui/web-components...');
fs.removeSync(wcDest);
console.log('Done!');

console.log('Removing @microsoft/fast-element...');
fs.removeSync(fastElementDest);
console.log('Done!');

console.log('Removing shared...');
fs.removeSync(sharedDest);
console.log('Done!');

console.log('Copying @fluentui/web-components...');
fs.copySync(
    path.join(nodeModules, '@fluentui', 'web-components', 'dist'),
    wcDest
);
console.log('Done!');

console.log('Copying @microsoft/fast-element...');
fs.copySync(
    path.join(nodeModules, '@microsoft', 'fast-element', 'dist'),
    fastElementDest
);
console.log('Done!');

console.log('Copying shared...');
fs.copySync(
    path.join(root, 'shared'), 
    sharedDest
);
console.log('Done!');