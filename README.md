# Setup Node.js & TypeScript Initial Project

## How did I setup the initial project?

### Installations

Create a new project running these follow commands into VS Code Terminal to prepare the back-end environment:

```bash
# init a new project (create package.json)
$ yarn init -y

# install express and types/express
$ yarn add express
$ yarn add @types/express -D

# install typescript
$ yarn add typescript -D

# create tsconfig.json
$ yarn tsc --init

# install ts-node-dev
$ yarn add ts-node-dev -D

# install eslint
$ yarn add --dev eslint@6.8.0

# install eslint-import-resolver-typescript
$ yarn add eslint-import-resolver-typescript -D

# install prettier (remove before Prettier - Code formatter from VS code)
$ yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

### Create files

Create 'src / server.ts' file:

```tsx
import express from 'express';
import routes from './routes';

const app = express();

app.get('/', (request, response) => {
 return response.json({ message: 'Hello GoStack' });
});

app.listen(3333, () => {
 console.log('Server started on port 3333');
});
```

Create 'src / routes / index.ts' file:

```tsx
import { Router } from 'express';
const routes = Router();
export default routes;
```

Create '.editorconfig' file:

```json
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf
```

Create '.eslintignore' file:

```plan_text
/*.js
node_modules
dist
```

Create 'prettier.config.js' file:

```jsx
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
 arrowParens: 'avoid',
}
```

### Init ESlint setup

```bash
# run
$ yarn eslint --init

# Awnser these questions and install the dependencies using Yarn
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? None of these
? Does your project use TypeScript? Yes
? Where does your code run? Node
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
? What format do you want your config file to be in? JSON
Checking peerDependencies of eslint-config-airbnb-base@latest
The config that you've selected requires the following dependencies:

@typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.22.1 @typescript-eslint/parser@latest
? Would you like to install them now with npm? No

# install dependencies using yarn as dev mode, without eslint installation
$ yarn add @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.22.1 @typescript-eslint/parser@latest -D
```

### Update files

Update 'tsconfig.json' file:

```json
"outDir": "./disc", // js files - production mode
"rootDir": "./src"  // ts files - develop mode
```

Update 'package.json' file:

```json
"scripts": {
 "build": "tsc",
 "dev:server": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"
}
```

- --transpileOnly → não vai verificar se o código está certo ou errado
- --ignore-watch node_modules → não é responsabilidade nossa e nunca vamos alterar um código dentro dessa pasta

Update '.eslintrc.json' file:

```json
{
  "env": {
    "es6": true,
    "node": true
  },
  "extends": [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "prettier"
  ],
  "rules": {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never"
      }
    ],
    "prettier/prettier": "error"
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}
```

## How to test the project?

You may have installed Git, Node and Yarn on your operational system. I'm using Ubuntu 20.04.1 LTS. Open the terminal, access the directory where you want host your project and follow this commands:

```bash
# clone the repository
$ git clone https://github.com/rquintam/setup-nodejs-typescript-initial-project

# access the cloned repository
$ cd setup-nodejs-typescript-initial-project

# install project dependencies
$ yarn

# run back-end server
$ yarn dev:server
```

## License

This project is under license from MIT. See the archive [LICENSE](https://github.com/rquintam/setup-nodejs-typescript-initial-project/blob/master/LICENSE) to more details.

---

Made with 💙️ inspired by Rocketseat 🚀️
