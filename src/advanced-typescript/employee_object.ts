type Employees = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employees: Employees = {
  id: 1,
  name: 'Maniraguha',
  retire: (date: Date) => {
    console.log(date);
  },
};
