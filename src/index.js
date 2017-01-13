const chalk = require('chalk');
const log = console.log;

export default function logDecorator(target, key, descriptor) {
  if (!descriptor) return descriptor;

  const func = descriptor.value;
  descriptor.value = function wrapper(...args) {
    log(`${chalk.blue(key)} method ${chalk.gray('called with')}`, args);
    const result = func.call(this, ...args);
    log(`${chalk.blue(key)} method ${chalk.gray('returns')}`, result);
    return result;
  };
  return descriptor;
}
