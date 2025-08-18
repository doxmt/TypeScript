// Enum 타입 (열거형)
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 컴파일 해도 사라지지 않음

enum Role { //숫자형 이넘
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "송태하",
  role: Role.ADMIN, // 0 관리자
  Language: Language.english,
};
const user2 = {
  name: "홍길동",
  role: Role.USER, // 1 유저
  Language: Language.korean,
};
const user3 = {
  name: "손오공",
  role: Role.GUEST, // 2 게스트
};

console.log(user1, user2, user3);
