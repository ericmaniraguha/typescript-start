// const small =1;
// const medium =2;
// const large =3;

//PascalCase - using enums rather than listing all as variables.
//step 1.
// enum Size {Small=0, Medium =1, Large=2};
//step 2.
// enum Size {Small='s', Medium ='m', Large='l'};
//  enum Size { Small = 0, Medium,Large} here if we use enum without const, the compiler will generate more code, with const it will generate more optimise code.
const enum Size {
  Small = 0,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);
