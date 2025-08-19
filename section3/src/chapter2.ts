// 타입계층도와 기본 타입간의 호환성

// Unknown 타입

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // let num: number = unknownVar; -> 다운캐스팅 불가능
}

// Never 타입

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // let never1: never = 10;
}

// Void 타입
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }
  let voidVar: void = undefined;
}

// Any 타입

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;

  undefinedVar = anyVar;

  // neverVar = anyVar;
}
