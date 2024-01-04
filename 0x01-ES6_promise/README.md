# 0x00. ES6 Basics

ECMAScript 6 - ES6 Promise

## Project setup

```
# Create a new Node project
# initializes a new Node.js project with a default package.json file
npm init -y

# Install Babel core and presets
npm install --save-dev @babel/core
npm install --save-dev @babel/preset-env

# Create Babel config file
touch babel.config.js

# Install Babel Node
npm install --save-dev @babel/node

# Run a JavaScript file using Babel Node
npx babel-node <js filename>

# Run a JavaScript file using npm script
npm run dev <filename>



# Install ESLint
npm install --save-dev eslint

# Setup ESLint configuration:
npx eslint --init
# or
npm init @eslint/config

# npm install --save-dev eslint-config-airbnb-base
# npm install --save-dev eslint-plugin-import
# npm install --save-dev eslint-plugin-jest


# Lint a folder or file using ESLint:
npx eslint <folder | filename>

# Fix ESLint issues in a file:
npx eslint <folder | filename> --fix


# Install Jest as development dependecy
npm install --save-dev jest
npm uninstall --save-dev jest

# Run Jest tests
npm run test

# Install Babel Jest (optional):
# npm install --save-dev babel-jest
```

### run file

```

touch filename.js
chmod a+x filename.js
npm run lint filename.js --fix # or npx eslint filename.js --fix

touch testfilename.js # (examples 0-main.js)
chmod a+x testfilename.js
npm run dev testfilename.js

```


### utilss
add this utils.js file into your projects
```
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}


export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}

```

### REFERENCE
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promises: an introduction](https://web.dev/articles/promises)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Javascript ES6 — Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4)
