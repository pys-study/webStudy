const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

// floor 내림
// round 반올림
// ceil 올림

const numbers = [];

for (let n = 1; n <= 9; n++) {
  numbers.push(n);
}

// 배열 : 단순히 값들을 모아놓은 것
// 객체 : 각각의 값들에 속성의 이름을 붙여 구분해야할 때

const answer = [];
for (let n = 0; n < 4; n++) {
  const index = Math.floor(Math.random() * numbers.length); // 0 부터 8까지 인덱스를 랜덤하게 하고 
  answer.push(numbers[index]); // 배열에 인덱스 푸시
  numbers.splice(index, 1); // 원래 값 제거
}
// numbers[1, 2, 4, 5, 6, 7, 8, 9]
// answer[3]

console.log(answer);


//input 태그를 쓰면 보통 form으로 감싸준다(웹 표준 형식이라 함). 이럴땐 form에 이벤트를 달아준다
//form은 새로고침(기본동작) 되기 때문에 새로고침시 변수에 저장된 값이 날라간다 => 이벤트로 막아줘야함

const tries = [];

function checkInput(input) {
  if (input.length !== 4) {//길이가 4인지 확인
    return alert('4자리 숫자를 입력해주세요'); // alert 문은 undefind 반환 => if 문에서는  false 값
  }
  if (new Set(input).size !== 4) {// 중복된 숫자 있는지 확인 / new Set =>  중복을 제거한 배열 ex) [3, 1, 4, 4] => [3, 1, 4]
    return alert('중복되지 않게 입력해 주세요');
  }
  if (tries.includes(input)) { // 이미 시도한 값은 아닌가
    return alert('이미 시도한 값 입니다.');
  }
  return true;
} // 검사하는 코드, 통과하면 true, 실패하면 false 반환

$form.addEventListener('submit', (event) => {
  event.preventDefault(); // 기본 동작 막기
  console.log('submit 발생');

  const value = $input.value;  // === event.target.value[0];
  $input.value = '';
  const valid = checkInput(value); // value 검사

  if (!valid) return;
  if (answer.join('') === value) {  // ex) [3, 1, 4, 6] => '3146'  / 배열을 문자열로 바꿔주는 join
    $logs.textContent = '홈런 !';
    return;
  }
  if (tries.length >= 9) { // 시도횟수 초과시 패배
    const message = document.createTextNode(`패배 ! 정답은 ${answer.join('')}`);
    $logs.appendChild(message);
    return;
  }
  // 몇스트라이크 몇 볼인지 검사

  let strike = 0;
  let ball = 0;

  // 1. for문으로 구현
  // for (let i = 0; i < answer.length; i++) {
  //   const index = value.indexOf(answer[i]); // indexOf는 JavaScript 배열에서 특정 값의 인덱스(위치)를 찾는 메서드입니다.
  //   // ex) '2345'.indexOf(1) 일경우 -1 반환

  //   if (index > -1) {// 일치하는 숫자 발견
  //     if (index === i) // 인덱스 위치 같음
  //     {
  //       strike += 1;
  //     } else { // 숫자만 같음
  //       ball += 1;
  //     }
  //   }
  // }

  // 2.foreach문으로 구현
  answer.forEach((number, index) => {
    const idx = value.indexOf(number);
    console.log(typeof (number))
    if (idx > -1) // 일치하는 값이 존재 
    {
      if (idx === index) {
        strike += 1;
      } else {
        ball += 1;
      }
    }
  });


  $logs.append(`${value}: ${strike} 스트라이크 ${ball} 볼`, document.createElement('br'));
  tries.push(value);
  // 홈런 메세지 표시하기
  // 기존 $log 태그의 내용을 유지하면서 추가로 다음 줄에 기록을 남기려면 document.createTextNode로 먼저 텍스트를 만들고 ,
  // appendChild 로 화면에 추가해야 한다. textContent를 사용할 경우 기존 내용이 사라진다.


});