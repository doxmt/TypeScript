// 조건부 타입

type A = number extends string ? string : number;

type objA = {
  a: number;
};

type objB = {
  a: number;
  b: number;
};

type B = objB extends objA ? number : string;

// 제네릭과 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
let varB: StringNumberSwitch<string>;

// function removeSpaces(text: string | undefined | null) {
//   if (typeof text === "string") {
//     return text.replaceAll(" ", "");
//   }
// }
// 함수 밖에서는 사용이 불가능

//조건부 타입 + 제네릭 + 함수 오버로딩
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("Hi im Songtaeha");
result.toUpperCase();

let result2 = removeSpaces(undefined);
