## log-decorator

> Logging decorator for Node and Browsers

## Requirements and Use

```bash
npm install log-decorator --save
```

### With Babel 7

***babel.config.js***
```js
const plugins = [
    ['@babel/plugin-proposal-decorators', { 'legacy': true }]
]
module.exports = { plugins }
```

### Use
```javascript
import log from 'log-decorator';

class A {
  constructor() {}
  @log
  get(a,b,c) {
    return 3;
  }
}

new A().get({ a: 2 }, 2)
```

### Output
```bash
$ get method called with [ { a: 2 }, 2 ]
$ get method returns 3
```
