# 1주차

학습 자료 : Let's Get It 자바스크립트 프로그래밍 [ 저자 : 조현영 ]

[강의링크] : https://www.youtube.com/watch?v=2yGhb-z8VTQ&list=PLcqDmjxt30RvEEN6eUCcSrrH-hKjCT4wt

## 3장 : 끝말잇기 게임 만들기

### 순서도 그리기

#### 프로그램 절차를 만들 때의 원칙

    1. 프로그램 절차의 개수는 정해져 있어야 한다.
    2. 각 절차는 항상 같은 내용이어야 한다.
    3. 모든 가능성을 고려해야 한다.
    4. 예시는 절차를 검증하는 데 사용한다.

#### 절차 도출하기

    1. 게임에 몇 명이 참가할지를 선택한다.
    2. 참가자 순서를 정한다. (편의상 숫자로 한다.)
    3. 첫 번째 사람이 어떤 단어를 말한다.
    4. 다음 사람이 어떤 단어를 말한다.
    5. 절차 4에서 말한 단어가 올바른지 판단한다.
    6. 올바르다면 그다음 사람이 어떤 단어를 말한다.
    7. 올바르지 않다면 틀렸다고 표시한다.

#### 완성된 순서도

![Alt text](image.png)

#### HTML 태그 정리

- 대화상자 띄우기 (사용자 입력 받기)
  <pre><code>prompt('사용자에게 표시할 메세지')</code></pre>

- 경고창 띄우기
  <pre><code>alert(' 사용자에게 표시할 메세지');</code></pre>

- 사용자에게 의사 물어보기
  <pre><cod>confirm('사용자에게 표시할 메세지')</cod></pre>

<br>

#### HTML 태그 선택하기

자바스크립트에서 HTML 태그를 가져오는 것을 선택한다라고 표현한다. <br>
선택하기 위해서 다음과 같은 함수를 사용한다.

<pre><code>document.querySelector('선택자')</code></pre>

- `선택자` : HTNL 태그를 선택할 수 있게 도와주는 문자열
- ex) document.querySelector('선택자 내부선택자1 내부선택자2 ')
- 여러 개의 태그를 선택하고 싶다면 <code>document.querySelector</code> 대신 <code>document.querySelectorAll</code>을 써야 한다.

<br>

#### 아이디 속성

id 값은 태그에 달 수 있는 고유한 값이다. 한번 사용한 id 값은 다른 태그에 재사용할 수 없다.  
id가 있으면 앞에 #을 붙여 `#아이디`라는 선택자를 사용하면 된다.  
(단, 자바스크립트 기준이며 HTML에서는 여러번 사용할 수 있다.)

<pre><code>document.querySelector('#아이디')</code></pre>

<br>

#### 클래스 속성

id는 하나의 태그에만 쓸 수 있으므로 두 개를 동시에 선택할 떄는 사용할 수 없다.  
이럴 때는 `class`를 사용해야 한다. 자바스크립트 문법에 있는 class와는 다르다.

<pre><code>document.querySelectorAll('.클래스');</code></pre>

- 클래스를 선택할 때는 클래스 앞에 .을 붙여 .클래스로 선택하면 된다.
- 이때도 <code>document.querySelectorAll</code> 대신 <code>document.querySelector</code>를 사용하면 하나의 태그만 선택되니 주의한다.

<br>

#### 어떤 태그 안에 태그를 선택할 때

선택자를 여러 개 동시에 적으면 되는데, 선택자 사이에 공백을 주어 구분한다.  
가장 먼저 나오는 선택자가 기준 태그이고, 다음에 나오는 선택자는 기준 태그 안에 들어 있는 태그이다.

<pre><code>document.querySelector('선택자 내부선택자 내부선택자2')</code></pre>

- 예를 들어, 선택자가 div span 일 경우 div 태그 안에 들어 있는 span 태그를 찾는다.
- 다른 예로, 선택자가 body #target button일 때는 body 태그 안에 들어 있는 id가 target인 태그에서 다시 그 안의 button 태그를 찾는다.

<br>

#### 태그에 이벤트 달기

사용자가 태그와 상호 작용을 할 때 `이벤트`라는 것이 발생한다. 자바스크립트는 이벤트를 자동으로 감지할 수 없다.  
`이벤트 리스너`를 직접 추가해 이벤트를 감지해야 한다.

<pre><code>태그.addEventListener('이벤트 이름', 리스너 함수);</code></pre>

- 클릭 이벤트의 이름 : click
- 버튼 클릭 함수 : onClickButton
- onClickButton에서 `()`를 붙일 경우 클릭과 상관없이 함수가 실행되므로 주의 한다.
- `콜백 함수` : 특정 작업이 실행되고 난 뒤에 추가로 실행되는 함수 ex) onClickButton
