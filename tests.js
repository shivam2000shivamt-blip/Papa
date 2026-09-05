const assert=require('assert');const fs=require('fs');const cp=require('child_process');
assert(fs.existsSync('server.js'));assert(fs.existsSync('bot_template.py'));assert(fs.existsSync('public/index.html'));assert(fs.existsSync('requirements.txt'));
cp.execFileSync(process.execPath,['--check','server.js']);
cp.execFileSync('python3',['-m','py_compile','bot_template.py']);
const html=fs.readFileSync('public/index.html','utf8');assert(html.includes('Create & Deploy Bot'));assert(html.includes('+ Add More Plan'));assert(html.includes('Top-ups'));assert(html.includes('Bot Cast'));assert(html.includes('UPI Payment'));assert(html.includes('Members & Wallets'));
const server=fs.readFileSync('server.js','utf8');for(const x of ['/api/bots/deploy','/api/products/','/api/keys/','/api/orders/','/api/users/','/api/wallet/','/api/broadcast/','/api/config/'])assert(server.includes(x));
console.log('PASS: builder source, server syntax, bot engine syntax and required wired endpoints');
