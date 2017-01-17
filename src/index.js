const colors = require('colors');
const log = console.log;

export default function logDecorator(target, key, descriptor) {
  if (!descriptor) return descriptor;

  const func = descriptor.value;
  descriptor.value = function wrapper(...args) {
    log(`${colors.cyan(key)} method ${colors.gray('called with')}`, args);
    const result = func.call(this, ...args);
    log(`${colors.cyan(key)} method ${colors.gray('returns')}`, result);
    return result;
  };
  return descriptor;
}
