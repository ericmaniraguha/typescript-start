"use strict";
function getCustomers(id) {
    return id === 0 ? null : { birthdate: new Date() };
}
let customer = getCustomers(2);
let customerUn = getCustomers(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthdate);
console.log(customerUn === null || customerUn === void 0 ? void 0 : customerUn.birthdate);
//# sourceMappingURL=optional_chaining.js.map