<div align="center">
  <h1>v2db</h1>
  <img src="https://img.shields.io/github/stars/v30xy/v2db?style=flat-square" />
  <img src="https://img.shields.io/github/commit-activity/m/v30xy/v2db?style=flat-square" />
  <img src="https://img.shields.io/npm/v/v2db?style=flat-square" />
  <img src="https://img.shields.io/npm/dt/v2db?style=flat-square" />
  <img src="https://img.shields.io/github/license/v30xy/v2db?style=flat-square" />
  <h3>Content Language (İçerik dili)</h3>
  <p><a href="#english">English</a> - <a href="#turkish">Türkçe</a></p>
</div>

<div id="english">
  <h1>English</h1>
  <h2>Installation</h2>

```bash
# NPM
npm install v2db --save
# YARN
yarn add v2db
```

  <h2>Usage</h2>

```js
const v2db = require('v2db')({
  name: 'coolDatabase', // default: db
  seperator: '.', // default: .
  language: 'en', // default: en
  yaml: false, // default: false
});

/*
OR JUST DO THIS
const v2db = require('v2db')();
*/

v2db.set('hello.world', 'HELLO!'); // {"hello": {"world": "HELLO!"}}
v2db.get('hello'); // {"world": "HELLO!"}
v2db.get('hello.world'); // HELLO!
```

</div>

<div id="turkish">
  <h1>Türkçe</h1>

  <h2>Kurulum</h2>

```bash
# NPM
npm install v2db --save
# YARN
yarn add v2db
```

  <h2>Kullanım</h2>

```js
const v2db = require('v2db')({
  name: 'havalıVeritabanı', // varsayılan: db
  seperator: '.', // varsayılan: .
  language: 'tr', // varsayılan: en
  yaml: false, // varsayılan: false
});

/*
YA DA SADECE ŞUNU YAP
const v2db = require('v2db')();
*/

v2db.set('merhaba.dunya', 'MERHABA!'); // {"merhaba": {"dunya": "MERHABA!"}}
v2db.get('merhaba'); // {"dunya": "MERHABA!"}
v2db.get('merhaba.dunya'); // MERHABA!
```

</div>
