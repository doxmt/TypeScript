// keyof 연산자

interface Person {
  name: string;
  age: number;
}

//Person의 모든 프로퍼티의 키를 유니온 타입으로 추출 , 타입에만 사용 가능
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "송태하",
  age: 27,
};

getPropertyKey(person, "name");

type Person1 = typeof person;
