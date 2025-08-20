// 인덱스드 엑세스 타입

// 1.객체
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 내용",
  author: {
    id: 1,
    name: "송태하",
    age: 25,
  },
};

//2. 객체
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo1(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const postlist: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 내용",
  author: {
    id: 1,
    name: "송태하",
    age: 25,
  },
};

// 3. 튜플

type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

type TupNum = Tup[number]; //공통타입 추출
