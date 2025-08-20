// 인터페이스의 확장, 상속

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  isBark: Boolean;
  name: "Hello"; //동일한 프로퍼티를 재정의할 떄는 원본프로퍼티 타입의 서브타입으로만 정의 가능
}

const dog: Dog = {
  name: "Hello",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

//다중 확장
interface CatChicken extends Cat, Chicken {}

const catchicken: CatChicken = {
  name: "",
  color: "",
  isScratch: true,
  isFly: false,
};
