type Customers = {
  birthdate?: Date;
};
function getCustomer(id: number): Customers | null | undefined {
  return id === 0 ? null : { birthdate: new Date() };
}

let customers = getCustomer(1);
let customersUn = getCustomer(0);
// if (customer !== null && customer !== undefined)
//remove if statememt and use "Optional property access operaytor"

console.log(customers?.birthdate?.getFullYear());
console.log(customersUn?.birthdate?.getFullYear());
//Optional property access operaytor" with array
//customers?.[0]

//option call
let log: any = null;
log?.('a');
