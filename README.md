# Karatsuba algorithm implementation in JS

This was a simple exercise of implementation for Karatsuba n-digit integer multiplication.
It is not really intended to be used as alternative for multiplying integers, as I am
sure node.js and all browsers know how to handle that, and do it more efficiently.

However, it was a good little exercise in recursion and maths.

## How to Use

You shouldn't. But still, you can do the following:

```
// If you use old style requires:
const karatsuba = require('./path/to/karatsuba');

// Or if you use modern imports:
import karatsuba from './path/to/karatsuba';

const product = karatsuba(1234, 5678);   // 7006652 
```

Thanks to [Stanford algorithms course](https://lagunita.stanford.edu/courses/course-v1:Engineering+Algorithms1+SelfPaced/about) 
for the inspiration to sit down and do this.
