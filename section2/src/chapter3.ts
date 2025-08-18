// 객체 object
// 구조적 타입 시스템
let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "송태하",
};

//  선택적 (optional) 프로퍼티 : 값이 없어도 가능
let user1: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "송태하",
};

user1 = {
  name: "홍길동",
};

// readonly 값을 바꾸는 것을 방지
let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked"
