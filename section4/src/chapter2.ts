// 함수 타입 호환성
// 1. 반환 값의 타입이 호환되는가
// 2. 매개변수의 타입이 호환되는가

// 1. 반환 값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // 업 캐스팅
// b = a; 다운 캐스팅

// 2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; 업 캐스팅
d = c; //다운 캐스팅

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc;
let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color);
};

dogFunc = animalFunc;
let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때

type Fun1 = (a: number, b: number) => void;
type Fun2 = (a: number) => void;

let func1: Fun1 = (a, b) => {};
let func2: Fun2 = (a) => {};

func1 = func2;
// func2 = func1;
