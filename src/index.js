// Refresher

//
// Object Destructing

const address = {
    street: '',
    city: '',
    country: ''
};

// the following is repetative
const street1 = address.street;
const city1 = address.city;
const country1 = address.country;

// this line is equivalent to the three above
const { street: st, city, country } = address;
// street: st is defining st to the street property of the address object