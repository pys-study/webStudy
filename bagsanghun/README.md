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
