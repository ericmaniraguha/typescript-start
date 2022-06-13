//you can give a parameter or function variables more than one times

function kgToLabs(weight: number | string): number {
  //Narrowing
  if (typeof weight === 'number') return weight * 2.2;
  else return parseInt(weight) * 10;
}
kgToLabs(10);
kgToLabs('10kg');
