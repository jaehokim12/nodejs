// Source Code: lib/buffer.js

// Buffer objects are used to represent a fixed-length sequence of bytes. Many Node.js APIs support Buffers.
// 버퍼 객체는 일련의 고정길이 바이트를 표현(나타내기)위해 사용된다
// The Buffer class is a subclass of JavaScript's Uint8Array class and extends it with methods that cover additional use cases. Node.js APIs accept plain Uint8Arrays wherever Buffers are supported as well.
// 버퍼 클래스는 자바스크립트  Uint8Array class 의 서브클래스 이며 메소드로 확장함으로써 추가적인 use cases를 지원한다  node js api unit8arrays 는 버퍼가 지원되는 환경이면 지원된다
// While the Buffer class is available within the global scope, it is still recommended to explicitly reference it via an import or require statement.
// 버퍼클래스는 글로벌 스코프 안에서 가능하며 ,  import 나 requre 를 통해 명시적으로 참조 하기를 바란다

// import { Buffer } from "node:buffer";
const { Buffer } = require("buffer");
// Creates a zero-filled Buffer of length 10.
// 0으로 채워진 10바이트 버퍼

const buf1 = Buffer.alloc(10);
console.log("buf1", buf1);
// buf1 <Buffer 00 00 00 00 00 00 00 00 00 00>

// filled with bytes which all have the value `1`.
const buf2 = Buffer.alloc(10, 1);
console.log("buf2", buf2);
// buf2 <Buffer 01 01 01 01 01 01 01 01 01 01>
// buffer.alloc (바이트할당갯수, 바이트값)
const buf22 = Buffer.alloc(10, 16);
console.log("buff22", buf22);
const buf3 = Buffer.allocUnsafe(10);
console.log("buf3", buf3);
// Creates a Buffer containing the bytes [1, 2, 3].
// const buf4 = Buffer.from([1, 2, 3]);
// console.log("buf4", buf4);

// buffer.from : encode // 숫자를 넣는방법과 문자를 넣는 방법 있음
const buf5 = Buffer.from([9, 10, 11, 12]);
console.log("buf5", buf5);
// <Buffer 09 0a 0b 0c>
const buf6 = Buffer.from("tést");
console.log("buf6", buf6);
// buf6 <Buffer 74 c3 a9 73 74>
const buf7 = Buffer.from("a");
console.log("buf7", buf7);
console.log(Buffer.from("a", "utf8"));
console.log(buf7.toString("base64"));
// When converting between Buffers and strings, a character encoding may be specified.
// If no character encoding is specified, UTF-8 will be used as the default.
