//descript ways to a numeric value
enum ManufacturerMake {
  TESLA,
  AUDI,
  MERCEDES,
  VOLVO,
  BMW,
}

const myCar = {
  year: 2021,
  make: ManufacturerMake.VOLVO,
};
console.log(myCar.make);
