const chalk = require('chalk');
const log = console.log;

export default function logDecorator(target, key, descriptor) {
  const func = descriptor.value;
  descriptor.value = function wrapper(...args) {
    log(target, chalk.blue(key), 'called with this arguments', args);
    const result = func.call(this, ...args);
    log(target, chalk.blue(key), 'return', result);
    return result;
  };
  return descriptor;
}
