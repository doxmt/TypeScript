// 타입 스크립트의 클래스

const employee = {
  nmae: "송태하",
  age: 25,
  position: "developer",
  work() {
    console.log("일함");
  },
};

class Employee {
  //필드
  name: string;
  age: number;
  position: string;

  //생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  //메서드
  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  //필드
  officeNumber: string;

  //생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: string
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeA = new Employee("송태하", 25, "개발자");
console.log(employeeA);
employeeA.work();

//클래스는 타입으로 사용 가능
const employeeB: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
