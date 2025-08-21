// 조건부 타입 기반의 유틸리티 타입

// 1. Exclude<T, U> : T에서 U를 제거하는 타입

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | boolean, boolean>;

// 2. Extract<T, U> : T에서 U를 추출하는 타입

type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>;

// 3. ReturnType : 함수의 반환값 타입을 추출하는 타입

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

type ReturnA = ReturnType<typeof funcA>;

type ReturnB = ReturnType<typeof funcB>;
