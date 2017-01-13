## log-decorator

> Log decorator

## Requirements and Use

```
npm install log-decorator --save
```

### Use
```
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
```
get method called with [ { a: 2 }, 2 ]
get method returns 3
```
