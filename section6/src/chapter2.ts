// 접근제어자 - access modifier
// public, private, protected
// private는 파생클래스에서도 접근 불가,
// protected는 파생클래스에서 접근 가능

class Employee {
  //필드
  private name: string;
  protected age: number;
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
  work() {
    console.log(`${this.age} 살입니다`);
  }
}

const employeeA = new Employee("송태하", 25, "개발자");
// employeeA.name = "홍길동";
// employeeA.age = 30;
employeeA.position = "디자이너";
