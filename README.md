# both-require
Require to both way of relatively and absolutely.

## Intro
both-require was born for solving **require hell** as you can see below.
```
const moduleA = require('../../../../moduleA');
```
and then not only support absoulte path.
If you want require relatively, you can use relative path.

## Install
```
npm install both-require --save
```

## How to use
### require using absoulte path
```
const use = require('both-require');
const moduleA = use('moduleA');
```

### require using relative path
```
const use = require('both-require');
const moduleB = use('./moduleB'); //It's the same to pure require.
```

## Advantage
If used both-require, able to split code of require public module & private module, intuitively.
```
const use = require('both-require');

const pubModule = require('pubModule');
const priModule = use('priModule');
``` 

## Authors
tinyjin - [Github]('https://github.com/tinyjin'), [Blog]('http://jinui.kr')

## License
This project has MIT License.