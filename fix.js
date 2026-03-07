const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');
c = c.split('\\n').join('\n');
fs.writeFileSync('index.html', c);
