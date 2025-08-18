// 2. 배열과 튜플

// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "songtaeha"];

// <> 제네릭
let boolArr: Array<boolean> = [true, false, true];

// 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 - 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "hellooo", true];

const users: [string, number][] = [
  ["송태하", 1],
  ["카리나", 2],
  ["윈터", 3],
  ["닝닝", 4],
  ["지젤", 5],
  // [5, "김김김"],
];
