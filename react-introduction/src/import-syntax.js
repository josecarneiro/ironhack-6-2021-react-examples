const foo = 1;

// Node.js Syntax: COMMONJS SYNTAX
// Export single value from file
module.exports = foo;
// Export multiple values
exports.foo = foo;
exports.bar = 123;
// Import single value
const xyz = require('./foo.js');
// Importing multiple values
const objectWithPropertiesFooAndBar = require('./foo.js');

// ESMODULE SYNTAX
// Export single value from file
export default foo;

// Export multiple values
export { foo };
// export const bar = 123;
const bar = 2;
export { bar };

// Import single value
import abc from './foo.js';
// Importing multiple values
import { bar, foo } from './foo.js';
