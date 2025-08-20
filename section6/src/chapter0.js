// 자바 스크립트의 클래스

let studentA = {
  name: "송태하",
  grade: "A",
  age: 27,
  study() {
    console.log("열심히함");
  },
  tinroduce() {
    console.log("안녕하세요");
  },
};

class Student {
  //필드
  name;
  grade;
  age;

  //생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  //메서드
  study() {
    console.log("열심히함");
  }
  introduce() {
    console.log(`안녕하세요 ${this.name}입니다.`);
  }
}

class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name, grade, age, favoriteSkill) {
    super(name, age, grade);
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍함`);
  }
}

//클래스를 이용해서 만든 객체 -> 인스턴스
let studentB = new Student("송태하", "A+", 25);

console.log(studentB);
studentB.study();
studentB.introduce();

const studentDeveloper = new StudentDeveloper("송태하", "A", 25, "JavaScript");
console.log(studentDeveloper);
studentDeveloper.programming();
