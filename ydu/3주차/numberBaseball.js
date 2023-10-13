const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

// floor 내림
// round 반올림
// ceil 올림

const numbers = [];

for (let n = 1; n <= 9; i++) {
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
