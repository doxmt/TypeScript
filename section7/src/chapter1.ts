// 타입 변수 응용

// 1.

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

// 2.

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);

let str = returnFirstValue(["Hello", "my", "name"]);

let union = returnFirstValue([1, "name", true]);

// 3.
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); //3

let var2 = getLength("12345"); //5

let var3 = getLength({ length: 10 }); //10
