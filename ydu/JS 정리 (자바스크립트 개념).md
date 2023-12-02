### 문장

<pre><code>function a () {
  return
    1+5;
};
// undefined

function a () {
  return(
    1+5
  );
};
// 6
</code></pre>

- 자바스크립트 코드의 실행 단위
- 세미콜론(;)까지가 하나의 문장
- 입력하지 않을 경우 자동으로 삽입됨 (ECMAScript 스펙의 세미콜론 자동 삽입)
- return 문에 라인을 분리하여 코드를 작성하면 라인 끝에 세미콜론이 자동으로 삽입되어 다른 결과가 나올 수 있다

<br>

### console.log()

- 자바스크립트가 아니다
- console API

<br>

### const 변수

- const 변수에 할당한 값을 바꿀 수 없다. (리스트의 인덱스는 변경 가능)
- 변수에 값을 할당하여 전체를 바꿀 수는 없지만  
  오브젝트(Object, Array)이면, 값은 바꿀 수 있다는 시맨틱(코드 조각)
- 상수 변수가 아니라 const 변수

<br>

### Number.MAX_VALUE, Number.MIN_VALUE

- 자바스크립트의 Number 오브젝트에서 제공하는 최댓값, 최솟값
- 자바스크립트에서 상수는 전통적으로 변수 이름 전체를 대문자로 작성한다.

<br>

### 값 변경 불가 설정

<pre><code>const point = {item:100}
point.item = 200;
log("1", point);

Object.freeze(point);

point.item = 300;
log("2", point);

// {item : 200}
// {item : 200}
</code></pre>

- Object 생성하여 const 변수에 할당하더라도 프로퍼티 값을 바꿀 수 있다.
- Object.freeze(point);
  - 에러가 발생하지는 않지만 프로퍼티 값이 300으로 바뀌지 않는다.
  - **즉, freeze를 실행한 후에 point는 완전하게 상수 변수가 된다.**
- 변수 이름을 대문자로 작성하지 않은 점은 있지만 값은 상수이다.

<br>

### 데이터 타입

- Language Type과 specification Type으로 구분
- specification Type
  - 자바스크립트 엔진에서 사용됨 => 개발자와 관계x
  - 스펙에서 사용하는 내부 타입
- Language Type
  - 8가지 타입이 존재
  - Undefined, Null, Boolean, String, Symboll, Object, Numeric(Number, BigInt)
  - 자바스크립트로 개발자가 직접 작성하는 값에 해당하는 타입
  - 흔히 말하는 데이터 타입
- Object 타입을 제외한 다른 데이터 타입은 primitive value라는 빌트인(사전에 정의된) 타입의 값을 제공함  
  => (ture/false, 123, "ABC"의 형태라는 뜻)
- typeof 연산자 : 데이터 타입을 소문자로 반환한다.

<br>

### 프로퍼티

- property
  - {key : value} 형태
  - 프로퍼티 키, 프로퍼티 값
- 프로퍼티 key
  - 데이터 타입은 String 또는 Symbol
- 프로퍼티 value
  - 자바스크립트에서 지원하는 모든 데이터 타입과 함수, 오브젝트 사용 가능

### 프로퍼티 확장

<pre><code>const book = {
  "title" : "책"
  point : {
    bonus : 100,
    getPoint : function(){}
  }
};</code></pre>

- 프로퍼티 값에 프로퍼티를 작성하여 프로퍼티를 확장한다.
- **자바스크립트의 모든 구조는 프로퍼티이다**
- (ex) const music = "클래식"
  - music이 프로퍼티 key, "클래식"이 프로퍼티 value
- {getPoin : function}
  - getPoint 가 함수이지만 getPoint는 프로퍼티 key, function()은 프로퍼티 value

<br>

### Object 데이터 타입

- 스펙의 The Object Type
- Object 타입은 Object 데이터 타입을 뜻한다.
- Object 데이터 타입은 8개의 데이터 타입 중에서 하나의 데이터 타입

<br>

<pre><code>const book = {
  title : "책",
  list : [10, 20]
};

log("1", typeof book);
log("2". typeof book.list);
log("3", Array.isArray(book.list));</code></pre>

- An Object is logically a collection of properties

  - object는 {title : "책"}처럼 중괄호 {} 안에 0개 이상의 프로퍼티가 있는 형태

- {title : "책"}은 데이터이며 그 데이터 타입이 Object 이다.  
  => 8개 데이터 타입 중에서 유일하게 이름과 값을 가진 데이터 타입이다.

- Object 타입을 번역하면 객체이지만
  - Object는 Null, Undefined 처럼 데이터 타입이며 데이터 타입을 나타내는 유일한 이름이다
  - 데이터 타입이므로 객체로 번역하면 뉘앙스가 달라진다.
  - Object 데이터 타입이지, 객체 데이터 타입이 아니다.
  - 배열(Array)이 구분되지 않으므로 Array.isArray()로 배열 여부를 체크한다.
  - 배열(Array)는 데이터 타입이 아니다.

<br>

### 프로퍼티 속성

- 자바스크립트에서 속성은 Object의 프로퍼티 상태를 정의한다.
- 자바스크립트에서 프로퍼티와 속성은 다르다
- 즉 프로퍼티의 상태를 정의하는데에만 속성을 사용한다.

<br>

<pre><code>const book = {};

Object.defineProperty(book, "Title", {
  value : "책",
  writable : true,
  enumerable : true,
  configurable : true
  });</code></pre>

- Object.defineProperty()
  - book Object에 {title:"책"}을 설정하면서
  - {writable:true}처럼 프로퍼티의 속성을 정의한다.
- 프로퍼티 디스크립터(Descriptor)
  - 프로퍼티의 속성 이름과 속성 값을 정의한다.

<br>

![Alt text](image.png)

<br>

<pre><code>const book = {};

Object.defineProperty(book, "title", {
  value: "책",
  configurable : true // 삭제 가능함
});

book.title = "음악";
log(book.title);

delete book.title; // title 프로퍼티 삭제
log(book.title);

//책
//undefined
</code></pre>

- Object.defineProperty()의 디폴트 값은 false
  - writable : true // 값 변경 가능
  - configurable : true // 삭제 가능
  - enumerable : true // 열거 가능
- log(book.title)
  - getter 호출함
  - "책"이 "음악"으로 바뀌지 않았다 => writalbe : true를 작성하지 않았기 때문에

<br>

###### 출처 : 김영보의 React 비기너
