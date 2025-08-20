// 인터페이스

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "송태하",
  sayHi: function () {
    console.log("Hi");
  },
};

person.sayHi();
person.sayHi(5, 5);
