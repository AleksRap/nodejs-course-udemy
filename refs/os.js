const os = require('os');

console.log('OS:', os.platform());
console.log('Processor architecture:', os.arch());
console.log('Processor info:', os.cpus());
console.log('Memory free:', os.freemem());
console.log('Memory total:', os.totalmem());
console.log('Home dir:', os.homedir());
console.log('On:', os.uptime());
