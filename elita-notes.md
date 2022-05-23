## Basic JavaScript recap

scopes of JS variables:

- `var` -> function
- `let` -> block
- `const` -> block

use `const` unless a variable needs to be changed, then use `let`

Functions can be declared in two ways within an object (`walk: function () {...}` or `talk() {}`). All functions in JS are objects.

Use dot notation when you know the property or method to use (`person.talk()`). If you don't know or are unsure of which to access the do notation such as `person['name'] = 'Dan'`.

### This

- inside a function whitin the object, it will reference the current object
- if a function is used outside the object with 'this'
  - strict mode enabled: it will return undefined
    - to fix this: use the bind method (`person.walk.bind(person)`)
  - stict mode NOT enabled: it will return the global/window object
