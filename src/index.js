// Refresher

//
// Arrow Functions

const square = function(number) {
    return number * number;
}

const square1 = number =>  number * number;
console.log(square(5));

const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false }
];

// function to get only the active jobs (returns t/f)
jobs.filter(function(job) { return job.isActive; });
// equivalent line below as an arrow function
jobs.filter( job => job.isActive );

//
// Arrow Functions and 'this'

const person = {
    talk() {
        console.log("this1", this)

        setTimeout(function() {
            console.log("this2", this)
        }, 1000);

        setTimeout( () => {
            console.log("this3", this)
            // arrow function inherit the person object
            // arrow functions don't rebind the 'this' keyword
        }, 2000);
    }
};

person.talk();