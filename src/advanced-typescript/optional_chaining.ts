type Customer = {
  birthdate: Date;
};
function getCustomers(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthdate: new Date() };
}

let customer = getCustomers(2);
let customerUn = getCustomers(0);
// if (customer !== null && customer !== undefined)
//remove if statememt and use "Optional property access operaytor"
console.log(customer?.birthdate);
console.log(customerUn?.birthdate);
