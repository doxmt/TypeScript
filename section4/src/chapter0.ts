// 함수 타입 정의

function func(a: number, b: number) {
  return a + b;
}

//화살표 함수 타입 정의
const add = (a: number, b: number) => a + b;

// 함수의 매개변수
// 선택적 매개변수는 맨 뒤에
function introduce(name = "송태하", tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") console.log(`tall : ${tall + 10}`);
}

introduce("송태하", 111);
introduce("송태하");

//rest
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}
