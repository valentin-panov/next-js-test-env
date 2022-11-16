[![Build status](https://ci.appveyor.com/api/projects/status/ujwk7ph07m8ry523?svg=true)](https://ci.appveyor.com/project/vapanov/next-js-test-env)

WEB VERSION: https://next-js-test-env.vercel.app

worked xss on ref InnerHTML : `<img src=xxx:x onerror=javascript:alert(1)>`

install the rules
npm i --save-dev eslint-plugin-no-unsanitized git+https://github.com/snyk-labs/eslint-plugin-react-security.git
eslint-plugin-anti-trojan-source

in the .eslintrc.json should be done these improvements:
"plugins": [ "react", "react-security", "no-unsanitized", "anti-trojan-source", ... ],
"env": { "browser": true, "commonjs": true, "es6": true, "jest": true, "node": true },
"rules": {

// https://github.com/lirantal/eslint-plugin-anti-trojan-source
"anti-trojan-source/no-bidi": "warn",
// https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
"react/no-danger": "warn",
"react/jsx-no-script-url": "warn",
"react/jsx-no-target-blank": "warn",
"react/jsx-props-no-spreading": "warn",
// https://github.com/snyk-labs/eslint-plugin-react-security
"react-security/no-find-dom-node": "warn",
"react-security/no-dangerously-set-innerhtml": "warn",
"react-security/no-javascript-urls": "warn",
"react-security/no-refs": "warn",
// https://github.com/mozilla/eslint-plugin-no-unsanitized
"no-unsanitized/method": "warn",
"no-unsanitized/property": "warn",
...

