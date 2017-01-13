import log from '../src/index';

describe('log()', () => {
  it('should it works', () => {
      class A {
        constructor() {

        }

        @log
        get(a,b,c) {
          return a + b;
        }
      }

      const a = new A();
      expect(a.get(1,2)).toBe(3);
  });
});
