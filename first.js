const { exec } = require('child_process');
console.log('--Process Started ---- ')
opensslcommand = 'openssl pkcs12 -export -out'
pfxFileName = 'cert19.pfx'
keyFlag = '-inkey' + ' '
keyFile = 'ec.key'
certFlag = '-in' + ' '
certFile = 'ec.crt'
pwdFlag =  '-passout'
password = 'pass:test123'
const command = opensslcommand+' '+pfxFileName+' '+keyFlag+' '+keyFile+' '+certFlag+' '+certFile+' '+pwdFlag+' '+password
console.log(command)
// const command = 'openssl pkcs12 -export -out cert14.pfx -inkey ec.key -in ec.crt -passout pass:test123'
const cp = exec(command)
cp.stdout.on('data', (data) => {
    stdout += data;
  });
cp.stderr.on('data', (data) => {
stderr += data;
});

console.log(cp)
console.log('process ended')
