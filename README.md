## log-decorator

> Log decorator

## Requirements and Use

```bash
npm install log-decorator --save
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
```

### Output
```bash
$ get method called with [ { a: 2 }, 2 ]
$ get method returns 3
```
