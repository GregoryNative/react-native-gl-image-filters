const { peerDependencies } = require('./package.json');

module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "import"
  ],
  "rules": {
    "quotes": [2, "single", { "allowTemplateLiterals": true }],
    "import/no-unresolved": ["error", { ignore: Object.keys(peerDependencies) }],
    "react/prop-types": [0]
  },
  "settings": {
    "react": {
      "version": "^17.0.1"
    }
  }
};
