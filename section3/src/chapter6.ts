// 1.타입 단언

type Person = {
  name: string;
  age: number;
};
let person = {} as Person;

person.name = "송태하";
person.age = 25;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

// 타입 단언의 규칙
// 값 as 단언 <- 단언식
// A as B
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입이어야 한다

let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string;

let num3 = 10 as unknown as string;
//다중 단언 - 사용권장 X

// 2. const 단언
let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "white",
} as const;
// readonly로 바뀌어 값 수정 불가

// cat.name =""

// 3. Non Null 단언
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "송태하",
};

// const len: number = post.author?.length;  <- X
// 옵셔널 체이닝을 쓰면 값이 없을 수도 있으므로 사용할 수 없음

const len: number = post.author!.length;
// Non Null단언은 컴파일러가 값이 Null이나 Undefiend 아니라고 믿게함
