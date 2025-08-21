// 분산적인 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;
// 유니온 타입이 한번에 들어가는게아니라 하나씩 들어가게됌 그래서 c는 string | number

//ex) 특정 타입 제거

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

//ex) 특정 타입 추가

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
