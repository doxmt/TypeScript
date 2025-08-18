// Any와 Unknown

// any - 특정 변수의 타입을 확실히 모를때
// 타입검사는 넘어가지만 런타임에서 오류 발생
let anyVar: any = 10;
anyVar = "Hello";
anyVar = true;
anyVar = {};
anyVar = () => {};
// anyVar.toUpperCase();

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;

unknownVar = "aa";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar;
// unknownVar.toUpperCase(); 불가능

if (typeof unknownVar === "number") {
  num = unknownVar;
}
