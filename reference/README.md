### A note about importing packages

Maybe node has been updated since the tutorial, but node can't import modules like this (which is apparently how other common modules would, or what ES6 requires)
```js
import Person from './person.js';
```

Instead, node imports packages with:
```js
const Person = require('./person.js');
```
