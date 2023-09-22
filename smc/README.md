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
