// 프로미스와 제네릭

import { resolve } from "path";

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 3000);
});

promise.then((response) => {
  // console.log(response * 10); response를 unknown으로 받아옴
});

//성공
const promise1 = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 3000);
});

promise1.then((response) => {
  console.log(response * 10);
});

//실패
const promise2 = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("~~때문에 실패");
  }, 3000);
});

promise2.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

// 프로미스를 반환하는 함수의 타입을 정의
interface Post {
  id: number;
  title: string;
  content: string;
}
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    resolve({
      id: 1,
      title: "제목",
      content: "내용",
    });
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
