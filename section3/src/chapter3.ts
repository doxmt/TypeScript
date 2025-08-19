// 객체 타입의 호환성

// 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가 ?

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "푸들",
};

animal = dog;
// dog = animal; -> X

// Animal은 슈퍼타입 Dog는 서브타입
// 프로퍼티를 기준으로 더 적은 프로퍼티를 가진 객체가 슈퍼타입이 됌

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "리액트",
  price: 300000,
  skill: "react.js",
};

book = programmingBook;
// programmingBook = book;

//  초과 프로퍼티 검사
let book2: Book = {
  name: "리액트",
  price: 300000,
  // skill: "react.js",
};

let book3: Book = programmingBook;
