//제네릭 인터페이스 & 제네릭 타입 별칭

// 1. 제네릭 인터페이스

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 5,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

// 인덱스 시그니처

interface NumberMap {
  [key: string]: number;
}

let numberMap1 = {
  key: 123,
  key2: 325,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "fdsdsf",
};

let booleanMap: Map<boolean> = {
  key: true,
};

// 2. 제네릭 타입 별칭

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "erwerjwer",
};

// 제네릭 인터페이스 활용 예시
// 유저 관리 프로그램 : 학생/개발자

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "송태하",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "순천향대학교",
  },
};
