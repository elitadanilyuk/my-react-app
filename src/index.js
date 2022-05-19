// var -> function
// let -> block scoped
// const -> block scoped

// prefer const unless var needs to be changed, then use let

const person = {
    name: 'Elita',
    walk: function () {
        // this is ref to current object (person)
        console.log(this);
    }, //method in person object
    talk() {} // another way to use method notation
}

// use this notation if you know property or method to use
person.talk();

// use notation when unsure which property or var to access
person['name'] = 'Dan';

const targetMember = 'name';
person[targetMember.value] = 'Dan';

person.walk();

const walk = person.walk;
console.log(walk);

// the this returns the global/window object
// if strict mode is enabled it returns undefined
walk();

//every function in JS is an object
// bind method is how to fix the 'strict mode'
const walk1 = person.walk.bind(person);
walk1();