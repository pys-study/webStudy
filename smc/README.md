# 1주차
경로 오류에 대비해 폴더명 신민철->SMC 변경

Spring을 이용한 REST API 생성 완료

REST API 설계 및 리소스에 대한 GET, POST 메소드 구현에 대해 이해함.

### REST API 관련 예제 작성

<pre><code>1. User Resource에서 GET, POST, DELETE 메소드 구현
2. 예외 처리 구현
3. 유효성 검증 구현
4. API 사양 문서화
5. REST API 국제화
6. REST API 버전 관리
7. REST API 필터링 구현
8. JPA 및 Hibernate를 이용한 DBMS 활용
9. Spring Security를 이용한 자격 증명 구현
</code></pre>
### 1. User Resource에서 GET, POST, PUT, DELETE 메소드 구현
- GET : 데이터의 조회에 사용
- POST : 데이터의 등록에 사용
- PUT : 데이터의 수정에 사용
- DELETE : 데이터의 삭제에 사용

### 2. 예외 처리 구현
- Talend API Tester 활용
- 404 NOT FOUND 예외 처리
- 커스텀 예외 처리 추가

### 3. 유효성 검증 구현
- @Size 어노테이션을 이용한 데이터의 길이 검증
- @Past 어노테이션을 이용한 날짜 데이터가 현재 날짜보다 과거인지 검증

### 4. API 사양 문서화
- springdoc-openapi 라이브러리 활용
- 라이브러리에서 제공하는 Swagger 사용, GET, POST, DELETE 등 구현한 메소드의 응답을 테스트 할 수 있는 웹페이지 제공

### 5. REST API 국제화
- properties를 통해 국제화를 구현할 수 있음
- 일반적으로 Accept - Language 헤더가 사용됨
- 요청한 헤더에 따라 알맞은 언어로 국제화하여 응답 제공

### 6. REST API 버전 관리
- 다양한 방법으로 버전 관리를 수행할 수 있음
- URI와 요청 매개변수를 이용한 버전 관리는 URL 오염이 상당히 많이 발생
- 헤더 버전 관리와 미디어 유형 버전 관리는 HTTP 헤더 오용이 발생함(HTTP 헤더는 버전 관리 용도로 사용하는 것이 아니다.)
- 모든 버전 관리 방식은 문제점이 있으므로 프로젝트에 필요한 방식을 잘 파악해 일관성 있게 사용해야 함.

### 7. REST API 필터링 구현
- 정적 필터링과 동적 필터링으로 구분
- 정적 필터링은 API에서 특정 데이터만을 필터링함
- 동적 필터링은 API에 따라 같은 Bean에서도 다른 값을 출력하도록 필터링 함수 작성

### 8. JPA 및 Hibernate를 이용한 DBMS 활용
- SNS 프로그램 예제 작성
- User 엔티티와 일대다 관계의 Post 엔티티 생성(사용자, 게시글)
- 사용자 게시물 전체 조회, 게시물 생성을 위한 GET, POST API 구현
- JPA 및 Hibernate를 이용해 쿼리문 구성, 인메모리 DBMS인 H2를 이용해 테스트
- Docker 환경을 구축하고 MySQL 컨테이너를 구성해 사용자 및 스키마, 테이블을 생성
- REST API 쿼리문이 MySQL 컨테이너 환경에서 작동하도록 jdbc, 포트, 사용자 정보를 application.properties에서 구성

### 9. Spring Security를 이용한 자격 증명 구현
- Talend API Tester에서 Authorization 헤더를 사용해 자격 증명
- 자격이 증명된 사용자만 API에 접근할 수 있음
- application.properties에서 name 및 password 정보를 구성

카운터 예제를 통해 React의 구조와 React 컴포넌트들의 동작 방식에 대해 확인함.

### 카운터 예제 작성
<pre><code>1. Create React App 구조 확인
2. React 컴포넌트 생성 및 state
3. 컴포넌트 모듈 리팩토링
4. JSX를 이용한 뷰 작성
5. state와 props를 이용한 Counter 및 CounterButton 구성
6. 상위 컴포넌트 메소드 호출
</code></pre>
### 1. Create React App 구조 확인
- node.js 환경에서 구현
- npm(pakage manager)를 이용해 필요한 패키지 설치
- npx(pakage executer)를 이용해 필요한 패키지 실행
- 대상 폴더에서 npm start 명령어를 통해 react app 실행

### 2. React 컴포넌트 생성 및 state
- App.js 파일에서 함수 형태(function으로 선언)로 컴포넌트 생성
- html 코드(또는 jsx)를 반환 -> return ()
- 함수 컴포넌트와 클래스 컴포넌트 두 종류로 구분
- state를 사용하기 위해 클래스 컴포넌트를 사용했으나, 16.8버전 이후 함수 컴포넌트도 state를 지원함
- state는 컴포넌트의 상태 변화를 나타냄

### 3. 컴포넌트 모듈 리팩토링
- 각 컴포넌트는 각자 다른 모듈에 존재하는 것이 바람직함
- App.js에 작성했던 함수 컴포넌트를 모두 분리해서 jsx파일로 작성
- import FirstComponent from './FirstComponent' 와 같이 임포트 문 작성
- 함수 앞에 export default 선언을 통해 import시 내보내는 기본 함수를 선언해야 함
- 함수 앞에 export 선언을 해야 모듈에서 함수 컴포넌트를 내보낼 수 있음

### 4. jsx를 이용한 뷰 작성
- jsx는 javascript에 xml를 추가한 버전
- 리액트로 프로젝트를 작성하는 데 사용됨
- 구 버전 브라우저에서도 javascript를 이해할 수 있도록 함

### 5. state와 props를 이용한 Counter 및 CounterButton 구성
- state를 이용해 Counter 숫자를 업데이트
- setCounter 함수 인자 값을 버튼 입력에 따라 조정
- props를 이용해 버튼의 프로퍼티 설정
- 현재 프로그램에서는 by 프로퍼티를 통해 증감 숫자의 크기를 조정
- propTypes를 통해 프로퍼티의 타입을 지정
- defaultProps를 통해 프로퍼티의 기본값을 지정

### 6. 상위 컴포넌트 메소드 호출
- 상위 컴포넌트 메소드 호출을 통해 기존의 버튼마다 따로 가지던 카운터 state를 제거하고 하나의 state로 통일

# 2주차
카운터 앱 일부 리팩토링
- 단순히 상위 메소드를 호출하기만 하는 하위 메소드를 삭제하고 직접 상위 메소드를 호출하도록 변경
- onClick 메소드에 arrow function으로 props 값 by를 넘겨 줌
- CounterButton에 있는 사용하지 않는 state 제거

Spring Boot와 React를 이용한 풀 스택 Todo App 작성

### 풀 스택 (Spring Boot + React) Todo App 구현

<pre><code>
1. 로그인 컴포넌트 작성
2. 로그인 인증 구현
</code></pre>
### 1. 로그인 컴포넌트 작성
- useState()를 이용해 입력 값을 저장
- 각 Label의 기본값을 value 프로퍼티로 지정하고, onChange 프로퍼티를 통해 변경이 발생할 때마다 이벤트 함수를 실행함
- 이벤트 함수 handleUsernameChange는 useState의 setUsername을 호출하고 state를 변경(username), 패스워드 또한 같은 방식으로 처리함
- event.target.value에 변경된 state 값이 들어 있음

### 2. 로그인 인증 구현
- 임시로 하드코딩을 통해 인증 구현
- showSuccessMessage, showErrorMessage와 각각 AND 연산을 통해 로그인 성공, 실패 메세지 출력

# 3주차
Spring Boot와 React를 이용한 풀 스택 Todo App 작성(계속)

<pre><code>
1. React Router DOM으로 다른 컴포넌트로 라우팅
2. 에러 컴포넌트 추가
3. 하드코딩 리팩토링
</code></pre>
### 1. React Router DOM으로 다른 컴포넌트로 라우팅
- npm install react-router-dom
- BrouserRouter, Routes, Route path='' element={}를 통해 주소와 라우팅할 컴포넌트를 지정
- useNavigate()를 통해 다른 컴포넌트로 라우팅

### 2. 에러 컴포넌트 추가
- 존재하지 않는 URL을 입력했을 경우 path='*'로 지정하고 에러 컴포넌트를 지정
- 각 컴포넌트에 h1태그를 통해 제목 지정

### 3. 하드코딩 리팩토링
- useParams hook를 통해 파라미터를 받아옴
- 파라미터를 이용해 필요한 값을 출력
- login 컴포넌트에서 navigate(`/welcome/${username}`) 코드를 통해 username 변수를 넘겨줌
- welcome 컴포넌트에서 useParams()를 통해 url의 경로 파라미터로 받아온 username을 출력
