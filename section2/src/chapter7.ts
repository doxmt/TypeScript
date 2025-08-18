// Void와 Never

//void - 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

// 반환 값이 없을 때
// undefined이나 null을 사용하면 return문을 써줘야함
function func2(): void {
  console.log("hello");
}

let a: void;

// never - 불가능한 타입

function fun3(): never {
  while (true) {}
}

function fun4(): never {
  throw new Error();
}

let b: never;
