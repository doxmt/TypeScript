// 인터페이스와 클래스

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

//인터페이스를 구현한다
class Character implements CharacterInterface {
  //인터페이스는 퍼블릭만 정의 가능
  constructor(public name: string, public moveSpeed: number) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }

  move(): void {
    console.log(`${this.moveSpeed}로 이동`);
  }
}
