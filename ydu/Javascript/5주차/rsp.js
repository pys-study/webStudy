const $computer = document.querySelector('#computer');
const $score = document.querySelector('#score');
const $rock = document.querySelector('#rock');
const $scissors = document.querySelector('#scissors');
const $paper = document.querySelector('#paper');
const IMG_URL = './rsp.png';

$computer.style.background = `url(${IMG_URL}) -464px 0`; // 백그라운드의 가로 너비, 세로 너비 = 0 0
$computer.style.backgroundSize = 'auto 200px';  // 너비 자동, 높이 200px

// 변수들의 X 좌표라는 공통점을 이용하여 객체로 묶어서 표현, 그룹화
const rspX = {
  scissors: '0',
  rock: '-220px',
  paper: '-440px'
};



let computerChoice = 'scissors';
const changeComputerHand = () => {
  if (computerChoice === 'scissors') { // 가위면
    computerChoice = 'rock';
  } else if (computerChoice === 'rock') { // 바위
    computerChoice = 'paper';
  } else if (computerChoice === 'paper') { // 보
    computerChoice = 'scissors'
  }
  $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
  $computer.style.backgroundSize = 'auto 200px'; // backgroundSize 리셋 안되게 한 번 더 적어주기
}

setInterval(changeComputerHand, 50); // 함수 자리에 함수를 호출하면 리턴값이 들어가므로 주의

