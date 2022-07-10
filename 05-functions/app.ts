function calcSum(a: number, b: number) {
  return a + b;
}
calcSum(2, 2);

//arrow functions

let calcSumArrow: (a: number, b: number, third?: number) => number; // using? as an optional

calcSumArrow = (first: number, second: number) => {
  return first + second;
};
