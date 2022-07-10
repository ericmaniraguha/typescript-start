let arrString: string[] = ['a', 'b', 'c'];
let arrNumber: number[] = [1, 3, 5, 6, 7, 8, 9, 10, 11, 12];
let arrBool: boolean[] = [true, false, false];
let arrMix: (string | number | boolean)[] = [1, 'a', true];
let arrTup: [string, number] = ['a string', 5];
arrTup = ['S', 4];

arrString[0] = '5';
arrString.push('text');

arrNumber[4] = 14;
arrNumber.push(5);

arrBool[2] = true;
arrBool.push(false);

arrMix[0] = 'text';
arrMix[1] = 45;
arrMix.push(true);
