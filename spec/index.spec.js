import log from '../src/index';
const intercept = require('intercept-stdout');


describe('log()', () => {
  class A {
    @log
    get(a, b, c) {
      return a + b;
    }
  }

  const a = new A();
  let logged;
  intercept(stdout => {
    logged += stdout;
  });
  const returned = a.get(1, 2, { a: 2 });

  it('should log arguments to the console', () => {
    expect(logged).toContain('[ 1, 2, { a: 2 } ]');
  });

  it('should log the return value to the console', () => {
    expect(logged).toContain(returned);
  });
});
