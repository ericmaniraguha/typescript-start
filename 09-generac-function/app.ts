function doSomething<T>(arg: T): T {
  //doSomething
  return arg;
}
doSomething<string>('3');

interface book<T> {
  id: number;
  name: string;
  data: T;
}

const aBook: book<string> = {
  id: 1,
  name: 'Title 1',
  data: 'more data here',
};

const bBook: book<string[]> = {
  id: 2,
  name: 'Title 2',
  data: ['Review 1', 'Review 2'],
};
