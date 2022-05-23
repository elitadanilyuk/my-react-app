## Basic JavaScript Refresher

scopes of JS variables:

- `var` -> function
- `let` -> block
- `const` -> block

use `const` unless a variable needs to be changed, then use `let`

Functions can be declared in two ways within an object (`walk: function () {...}` or `talk() {}`). All functions in JS are objects.

Use dot notation when you know the property or method to use (`person.talk()`). If you don't know or are unsure of which to access the do notation such as `person['name'] = 'Dan'`.

### This & Bind

- inside a function within the object, it will reference the current object
- if a function is used outside the object with 'this'
  - strict mode enabled: it will return undefined
    - to fix this: use the bind method (`person.walk.bind(person)`)
  - strict mode NOT enabled: it will return the global/window object

### Arrow Functions

- if function has no params, need empty parentheses `()`
- if function has one param, does not need parentheses
- if function has one return line, don't need return keyword and you can put the entire function on one line (`const square = number => number * number;`)

Arrow functions don't rebind the 'this' keyword.
