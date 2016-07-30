var fs = require('fs');
var CodePush = require('code-push');

let codePushConfig;
try {
  codePushConfig = JSON.parse( fs.readFileSync(`${process.env.HOME}/.code-push.config`) );
} catch (e) {
  console.error('[JSON parse]: ', e);
  codePushConfig = {};
}

module.exports = new CodePush(codePushConfig.accessKeyName);
