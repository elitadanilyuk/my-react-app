// Refresher

//
// Spread Operator

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);

// new way of writing the following, which easily lets you add to it
const combinedModern = [...first, 'a', ...second, 'b'];

const clone = [...first];
console.log(first);
console.log(clone);

const first1 = { name: 'Mosh' };
const second2 = { job: 'Instructor' };
const combinedObj = {...first1, ...second2, location: 'Australia'};
console.log(combinedObj);