const log = console.log;

export default function logDecorator(target, key, descriptor) {
  if (!descriptor) return descriptor;

  const func = descriptor.value;
  descriptor.value = function wrapper(...args) {
    log(`${key} method called with`, args);
    const result = func.call(this, ...args);
    log(`${key} method returns`, result);
    return result;
  };
  return descriptor;
}
