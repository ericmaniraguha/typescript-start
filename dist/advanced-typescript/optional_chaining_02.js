"use strict";
var _a, _b;
function getCustomer(id) {
    return id === 0 ? null : { birthdate: new Date() };
}
let customers = getCustomer(1);
let customersUn = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthdate) === null || _a === void 0 ? void 0 : _a.getFullYear());
console.log((_b = customerUn === null || customerUn === void 0 ? void 0 : customerUn.birthdate) === null || _b === void 0 ? void 0 : _b.getFullYear());
//# sourceMappingURL=optional_chaining_02.js.map