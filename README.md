<div align="center">
  <h1>v2db</h1>
  <a href="https://github.com/v30xy/v2db/stargazers"><img src="https://img.shields.io/github/stars/v30xy/v2db?style=flat-square" /></a>
  <a href="https://github.com/v30xy/v2db/commits/main"><img src="https://img.shields.io/github/commit-activity/m/v30xy/v2db?style=flat-square" /></a>
  <a href="https://npmjs.com/v2db"><img src="https://img.shields.io/npm/v/v2db?style=flat-square" /></a>
  <a href="https://npmjs.com/v2db"><img src="https://img.shields.io/npm/dt/v2db?style=flat-square" /></a>
  <a href="https://github.com/v30xy/v2db/blob/main/LICENSE"><img src="https://img.shields.io/github/license/v30xy/v2db?style=flat-square" /></a>
  <p><a href="https://v30xy.github.io/v2db">Documentation</a></p>
  <p><a href="CHANGELOG.md">Changelog</a></p>
</div>

## Installation
```bash
# NPM
npm install v2db --save
# YARN
yarn add v2db
```
## Usage

```js
const {v2db} = require('v2db');
const db = new v2db({
  name: 'myDatabase', // default: db
  seperator: '.', // default: .
  language: 'en' // default: en
});

db.set('hello.world', 'HELLO!'); // {"hello": {"world": "HELLO!"}}
db.get('hello'); // {"world": "HELLO!"}
db.get('hello.world'); // HELLO!
```
