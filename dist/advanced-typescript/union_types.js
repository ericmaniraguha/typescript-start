"use strict";
function kgToLabs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 10;
}
kgToLabs(10);
kgToLabs('10kg');
//# sourceMappingURL=union_types.js.map