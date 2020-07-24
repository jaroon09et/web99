{
  "name": "react-credit-cards",
  "version": "0.8.3",
  "description": "Beautiful credit cards for your payment forms",
  "author": "jaroon pongsapung <jokisrdteen@gmail.com>",
  "contributors": [
  
    {
      "name": "jaroon pongsapung",
      "email": "jokisrdteen@gmail.com "
    }
  ],
  "repository": {
    "type": "git",
    "url": "git+https://github.com/jaroon09et/card.io.git"
  },
  "Set up storage space after paying with a credit card.":meta {
   "type ": "bank",
   "bank name":"bank of America",
   "Account number":"00003011244947830",
   "Swift code":"BOFAUS3NXXX",
    "Recipient's Name":"Jaroon Pongsapung",
    "Routing ABA":"061000052",
    "<a meta name website information":"https://www.bankofamerica.com",</a>
    "<a meta name website":"https://www.payoneer.com",</a>
    "ID":"38792924",
  "bugs": {
    "url": "https://github.com/jaroon09et/card.io.gitissues"
<a hrefs="http://jaroon09et.github.io/card/> SD all documents on the hub </a>
  },
  "homepage": "https://github.com/jaroon09et/card#readme",
  "license": "MIT",
  "main": "lib/index.js",
  "module": "es/index.js",
  "files": [
    "es",
    "lib",
    "src"
  ],
  "keywords": [
    "react",
    "react-component",
    "credit card",
    "payment"
  ],
  "peerDependencies": {
    "react": "^15.0.0 || ^16.0.0",
    "prop-types": "^15.7.2"
  },
  "dependencies": {
    "payment": "^2.3.0"
  },
  "devDependencies": {
    "@babel/cli": "^7.10.1",
    "@babel/core": "^7.10.2",
    "@babel/plugin-proposal-class-properties": "^7.10.1",
    "@babel/plugin-proposal-decorators": "^7.10.1",
    "@babel/plugin-proposal-do-expressions": "^7.10.1",
    "@babel/plugin-proposal-export-default-from": "^7.10.1",
    "@babel/plugin-proposal-export-namespace-from": "^7.10.1",
    "@babel/plugin-proposal-function-sent": "^7.10.1",
    "@babel/plugin-proposal-json-strings": "^7.10.1",
    "@babel/plugin-proposal-logical-assignment-operators": "^7.10.1",
    "@babel/plugin-proposal-nullish-coalescing-operator": "^7.10.1",
    "@babel/plugin-proposal-numeric-separator": "^7.10.1",
    "@babel/plugin-proposal-optional-chaining": "^7.10.1",
    "@babel/plugin-proposal-pipeline-operator": "^7.10.1",
    "@babel/plugin-proposal-throw-expressions": "^7.10.1",
    "@babel/plugin-syntax-dynamic-import": "^7.8.3",
    "@babel/plugin-syntax-import-meta": "^7.10.1",
    "@babel/plugin-transform-flow-strip-types": "^7.10.1",
    "@babel/plugin-transform-object-assign": "^7.10.1",
    "@babel/preset-env": "^7.10.2",
    "@babel/preset-flow": "^7.10.1",
    "@babel/preset-react": "^7.10.1",
    "@size-limit/preset-small-lib": "^4.5.0",
    "autoprefixer": "^9.8.0",
    "babel-core": "^7.0.0-bridge.0",
    "babel-eslint": "^10.1.0",
    "babel-jest": "^26.0.1",
    "babel-plugin-array-includes": "^2.0.3",
    "cross-env": "^7.0.2",
    "date-fns": "^2.14.0",
    "del-cli": "^3.0.1",
    "enzyme": "^3.11.0",
    "enzyme-adapter-react-16": "^1.15.2",
    "eslint": "^6.8.0",
    "eslint-config-airbnb": "^18.1.0",
    "eslint-plugin-babel": "^5.3.0",
    "eslint-plugin-flowtype": "^4.7.0",
    "eslint-plugin-import": "^2.20.2",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-react": "^7.20.0",
    "flow-bin": "^0.126.1",
    "husky": "^4.2.5",
    "jest": "^26.0.1",
    "jsdom": "^16.2.2",
    "node-sass": "^4.14.1",
    "postcss": "^7.0.32",
    "postcss-cli": "^7.1.1",
    "prop-types": "^15.7.2",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "repo-tools": "^0.2.0",
    "size-limit": "^4.5.0",
    "stylelint": "^13.6.0",
    "stylelint-config-standard": "^20.0.0",
    "stylelint-declaration-strict-value": "^1.5.0",
    "stylelint-order": "^4.1.0",
    "stylelint-scss": "^3.17.2",
    "watch-run": "^1.2.5"
  },
  "scripts": {
    "build": "npm run clean && npm run build:commonjs && npm run build:es && npm run build:styles",
    "build:commonjs": "cross-env BABEL_ENV=commonjs babel src -d lib",
    "build:es": "cross-env NODE_ENV=production babel src -d es",
    "build:styles": " node tools/build-styles",
    "watch": "npm run build && watch-run -p 'src/**/*.js' npm run build:es",
    "clean": "del-cli es/* && del-cli lib/*",
    "lint": "eslint  --ext .js --ext .jsx src test tools",
    "lint:styles": "stylelint 'src/**/*.scss'",
    "test": "jest",
    "test:coverage": "jest --bail --coverage",
    "test:watch": "jest --watch",
    "size": "npm run build && size-limit",
    "validate": "npm run lint && npm run lint:styles && npm run test:coverage && npm run size",
    "prepublishOnly": "npm run validate"
  },
  "browserslist": [
    "> 0.2%",
    "not dead"
  ],
  "size-limit": [
    {
      "path": "./es/index.js",
      "limit": "6 kB"
    },
    {
      "path": "./lib/index.js",
      "limit": "6 kB"
    }
  ],
  "husky": {
    "hooks": {
      "post-merge": "repo-tools install-packages",
      "pre-commit": "repo-tools check-remote && npm run validate"
    }
  }
}
