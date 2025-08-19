// 타입 추론

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "송태하",
  profile: {
    nickname: "doxmt",
  },
  url: ["https:www.naver.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

//any 타입의 진화

let d; // any
d = 10; // number
d.toFixed();

d = "hello"; // string
d.toUpperCase;

const num = 10; // number리터럴
const str = "hello"; // string 리터럴

let arr = [1, "string"]; // union타입
