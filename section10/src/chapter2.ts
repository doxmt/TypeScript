// 맵드 기반 유틸리티 타입 2

interface Post {
  title: string;
  tags: string[];
  content: String;
  thumbnailURL?: string;
}

// 1. Pick<T, K> : 객체 타입으로부터 특정 프로퍼티만 골라내는 타입

type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

// 2. Omit<T, K> : 객체 타입으로부터 특정 프로퍼티를 제거하는 타입

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
//Exclude<keyof T, K> -> K를 제외한 나머지 프로퍼티의 유니온

const noTitlePost: Omit<Post, "title"> = {
  content: "1",
  tags: [],
  thumbnailURL: "",
};

// 3. Record<K, V> : 객체를 만들어줌

type ThumbnailLegacy = {
  large: { url: string };
  medium: { url: string };
  small: { url: string };
  watch: { url: string };
};

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;
