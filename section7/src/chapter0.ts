// 제네릭

//제네릭 함수 - 함수의 인수에 따라 반환값의 타입을 가변적으로 정할 수 있음
//T : 타입 변수
function func<T>(value: T): T {
  return value;
}

let num = func(10);
num.toFixed();

let bool = func(true);

let str = func("string");

let arr1 = func([1, 2, 3]);

//튜플 타입
let arr2 = func<[number, number, number]>([1, 2, 3]);
