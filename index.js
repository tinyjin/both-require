const bothRequire = (modulePath) => {
  const path = require('path');
  delete require.cache[__filename];
  
  if (modulePath.startsWith('./') || modulePath.startsWith('../')) {
    const callDir = path.dirname(module.parent.filename);
    return require(path.resolve(callDir, modulePath));
  }
  else {
    return require('../../' + modulePath);
  }
}

module.exports = bothRequire;