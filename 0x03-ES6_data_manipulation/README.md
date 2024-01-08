# 0x00. ES6 data manipulation

ECMAScript 6 - ES6 map, filter, reduce

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

### REFERENCE
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [typed arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- [Typed arrays deep dive](https://www.codeguage.com/courses/advanced-js/buffers-typed-arrays)
- [Set Data Structure](https://www.google.com/search?q=set+in+javascript&oq=set+in+ja&gs_lcrp=EgZjaHJvbWUqDAgAEAAYQxiABBiKBTIMCAAQABhDGIAEGIoFMgYIARBFGDkyBwgCEAAYgAQyDAgDEAAYFBiHAhiABDIHCAQQABiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPKgCALACAA&sourceid=chrome&ie=UTF-8)
- [Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
- [Advanced Data Manipulation in Javascript](https://medium.com/@sub.metu/advanced-data-manipulation-javascript-b309fd008c6d)
