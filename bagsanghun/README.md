<!-- https://gist.github.com/ihoneymon/652be052a0727ad59601 -->
# 1주차
intellij 설치 이후 컴파일 되지 않던 오류 수정. 파일 경로에 한글이 있어서 오류가 난듯 함.

welcome 페이지 생성 완료


##### mvc와 템플릿 엔진, api 방식 웹개발에 대해 이해함.

[mvc와 템플릿 엔진 관련 자료][link]

[link]: https://velog.io/@falling_star3/Spring-Boot-%EC%8A%A4%ED%94%84%EB%A7%81-%EC%9B%B9%EA%B0%9C%EB%B0%9C-%EA%B8%B0%EC%B4%88-MVC%EC%99%80-%ED%85%9C%ED%94%8C%EB%A6%BF-%EC%97%94%EC%A7%84

[api방식 관련 자료][link]

[link]: https://uhhyunjoo.tistory.com/50

### 회원 관리 예제 작성

<pre><code>1. 비즈니스 요구 사항 정리
2. 회원 도메인과 리포지토리 만들기
3. 회원 리포지토리 테스트 케이스 작성
4. 회원 서비스 개발
5. 회원 서비스 테스트
</code></pre>
### 1. 비즈니스 요구사항 정리
- 데이터: 회원ID, 이름
- 기능: 회원등록, 조회
- 아직 데이터 저장소(DB)가 선정되지 않음(가상의 시나리오)

### 2. 회원 도메인과 레포지토리 만들기
- 도메인과 레포지토리를 패키지 파일로 분류
- 도메인(엔티티 클래스의 개념인 듯 하다) 패키지 내의 클래스는 Member
- Member 클래스: 변수 id와 name, 각각의 getter와 setter
- 레포지토리(컨트롤 클래스의 개념인 듯 하다) 패키지 내의 파일은 MemberRepository 인터페이스와 MemoryMemberRepository 클래스
- MemberRepository 인터페이스: 회원 저장, Id로 회원 찾기, Name로 회원 찾기, 전체 회원 조회 함수들을 선언
- MemoryMemberRepository 클래스: 선언한 함수들을 Override 이후 구현하는 구현부이자 회원 목록을 List 형식으로 저장

### 3. 회원 리포지토리 케이스 작성
- test 폴더 내의 spring 폴더 안에 repository 패키지 생성
- Assertions.assertThat(A).isEqualTo(B) 를 실무에서 많이 쓴다. A는 기댓값, B는 결과값으로 두 값이 다르면 오류 발생
- TestCase는 프로그램이 임의로 순서를 정하기 때문에 내가 짠 코드와 관계 없이 Test의 순서가 결정되므로 내가 짠 순서에 의존하면 오류가 날 수 있다.
- 테스트는 서로 순서에 의한 의존관계가 없이 설계되어야 하기 때문에 테스트가 끝날 때 마다 레포지토리를 깔끔하게 지워주는 @AfterEach를 수행해주어야 한다.

### 4. 회원 서비스 개발
- 중복 회원이 있는가 검증하는 함수를 작성
- 전체 회원 반환 함수와 id가 일치하는 회원 반환 함수 작성

### 5. 회원 서비스 테스트
- 테스트케이스 만드려는 클래스 선택 후 ctrl + shift + T 하면 빠르게 테스트케이스 생성 가능
- 테스트 함수들은 과감하게 한글로 적어도 된다.
- 하나의 db만을 이용하도록 생성자를 이용하여 DI 처리를 한다.
- 회원 가입이 잘 되었는지, 중복은 되지 않았는지 테스트하는 함수를 작성한다.