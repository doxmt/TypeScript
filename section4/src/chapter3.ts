// 함수 오버로딩
// 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 것
// 같은 이름의 함수지만 매개변수에 따라 다른 연산

// 버전들 -> 오버로드 시그니쳐
function func(a: number): void;
function func(a: number, b: number, c: number): void;

//실제 구현부 -> 구현 시그니쳐
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}
