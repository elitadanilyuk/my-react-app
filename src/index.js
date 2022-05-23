// Refresher

//
// Array.map Method

// best method to render a list of items

const colors = ['red', 'green', 'blue'];
const items = colors.map(color => '<li>' + color + '</li>');
// template literals - line bellow is equivalent
const items2 = colors.map(color => `<li>${color}</li>`);