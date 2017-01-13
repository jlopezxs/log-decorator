import log from '../src/index';

describe('log()', () => {
  it('should it works', () => {
      class A {
        constructor() {}
        @log
        get(a,b,c) {
          return 3;
        }
      }

      const a = new A();
      expect(a.get({a: 2}, 2)).toBe(3);
  });
});
