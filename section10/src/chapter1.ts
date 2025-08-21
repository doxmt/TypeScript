// 맵드 기반 유틸리티 타입 1

import { Key } from "readline";

// 1. Partial<T> : 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입

interface Post {
  title: string;
  tags: string[];
  content: String;
  thumbnailURL?: string;
}

type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "제목",
  content: "내용...",
};

// 2. Required<T> : 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입

type Required<T> = {
  [key in keyof T]-?: T[key];
};

const withThumbnailPost: Required<Post> = {
  title: "제목",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://...",
};

// 3. Readonly<T> : 특정 객체 타입의 모든 프로퍼티를 읽기 전용으로 만들어주는 타입

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "213",
  tags: ["3"],
  content: "123",
};

// readonlyPost.title = "";
