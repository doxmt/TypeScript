// 타입 별칭과 인덱스 시그니처

// 타입 별칭 -> 컴파일 될 때 사라짐
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "송태하",
  nickname: "doxmt",
  birth: "20010602",
  bio: "안녕하세요",
  location: "지구",
};
let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "hong",
  birth: "20010602",
  bio: "안녕하세요",
  location: "지구",
};

// 인덱스 시그니처 key-value
type CountryCodes = {
  [key: string]: string;
};
let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 23,
};
