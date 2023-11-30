const candidate = Array(45).fill().map((el, i) => i + 1);
// 1에서 45까지의 숫자

// 45개의 숫자 섞기
// 빈 배열 하나를 두고 변수에서 하나씩 무작위로 값을 뽑아 옮기면 된다.

const suffle = [];


// ※ math.random() 함수는 0에서 1까지의 랜덤 한 값을 선택한다.
while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length); // 무작위 인덱스 뽑기
  const spliceArray = candidate.splice(random, 1); // 뽑은 값은 배열에 들어 있으므로 splice로 제거 해주기 => ex) splice(3, 1) : 3번째 인덱스부터 1개 슬라이싱
  const value = spliceArray[0]; // 뽑아낸 값
  suffle.push(value); // 빈 배열에 삽입
}

const winBalls = suffle.slice(0, 6).sort((a, b) => a - b);
const bonus = suffle[6];
console.log(winBalls, bonus);

const $result = document.querySelector("#result");
const $bonus = document.querySelector("#bonus");


drawBall = (number, $parent) => {
  const $ball = document.createElement('div'); // 태그 직접 만들기
  $ball.className = "ball"; // 태그의 클래스 이름 설정
  $ball.textContent = number;
  $parent.appendChild($ball); // append 와 appendChild의 차이점 ?
};


for (let i = 0; i < winBalls.length; i++) {
  setTimeout(() => {
    drawBall(suffle[i], $result);
  }, (i + 1) * 1000);
}

console.log(bonus);

setTimeout(() => {
  drawBall(bonus, $bonus);
}, 7000);
