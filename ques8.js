const name = { firstName: 'Philip',
lastName: 'Fry' };

console.log(name)

const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
};

console.log(details)

let merged = {...name, ...details}
console.log(merged)
