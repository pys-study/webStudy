### 함수의 형태

<pre><code>//함수 선언문
function getPoint (param){
  const point = param + 100;
  return point;
};

// 함수 표현식
const setPoint = function(param){

};

// 화살표 함수
const addPoint = () => {
  
};
</code></pre>

- 함수
  - function 키워드를 사용하여 작성한다.
- 파라미터 (Parameter)
  - 매개 변수, 인자, 아규먼트라고도 부른다.
- 함수 Body
  - 중괄호{} 안에 작성한 코드
  - 함수 코드, 소스 텍스트로도 불린다.
  - 강좌는 함수 코드, 함수 블록 코드로 표기
- 함수 형태

  - 함수 선언문, 함수 표현식, 화살표 함수

- 함수 이름
  - 함수 코드를 읽지 않아도 이름과 파라미터로 함수 기능을 알 수 있도록 작명
  - 함수는 처리가 동반되므로 동사 형태의 이름을 부여
- 함수 이름의 첫 문자를 소문자로 작성
  - 전통적인 관례
  - 첫 문자가 대문자이면 단일 기능의 함수가 아니라는 뉘앙스를 갖는다.

<br>

### prototype

- 함수 선언문과 함수 표현식은 prototype이 있다.
  - prototype에 함수를 연결할 수 있다.
  - prototype은 자바스크립트에서 객체 지향 프로그래밍의 바탕이 된다.
- 화살표 함수는 prototype이 없다. => 가볍게 단일 함수로 사용하려는 목적

※ 객체지향언어에서 흔히 사용되는 클래스(Class)가 자바스크립트에서는 프로토타입(Prototype)이며 생성자 함수가 사용된다.  
  &nbsp; => 다시 말해 클래스나 프로토타입을 사용하여 만들어 낸 것이 인스턴스라고 할 수 있다.

 <br>

### React 컴포넌트의 대문자

- function App(){}
- App의 첫 문자가 대문자이며 명사이다.
- prototype를 사용하지 않았으며 class도 아니다

- React는 function APP(){} 형태를 컴포넌트라고 한다.

  - 컴포넌트라고 하더라도 function 키워드를 사용하므로 함수이다.
  - ECMAscriptt 스펙에서 component를 사용하지만 React의 컴포넌트와 형태, 용도가 다르다.

- React의 컴포넌트는

  - 컴포넌트 기반 개발 방법의 컴포넌트이다.
  - component-based development(CBD)

- 컴포넌트 개발 방법의 키워드

  - <strong>재사용, 컴포넌트를 조합하여 사용, 독립적 실행</strong>

- React의 컴포넌트 범위는, 유저 인터페이스

  - Module(import, Exprot)가 컴포넌트 구현의 바탕

- 자바스크립트에서 함수와 메소드가

  - 모두 function 키워드를 사용하지만 작성하는 위치가 다르다.

- const like = new Sport("수영");

  - new 연산자로 Sport 생성자 함수를 호출한다.
  - 그러면 인스턴스를 생성하여 반환한다.

- log(like.getTitle());

  - 메소드는 일반적으로 직접 호출하지 않는다.
  - new 연산자로 인스턴스를 생성하고
  - like.getTitle() 형태로 호출한다.

- **함수와 메소드는 작성 형태와 호출하는 형태가 다르므로 구분해야 한다.**

###### 출처 : 김영보의 React 비기너
