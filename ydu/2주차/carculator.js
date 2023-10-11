// 1. 숫자 1을 저장할 변수를 만든다
// 2. 숫자 2를 저장할 변수를 만든다
// 3. 연산자를 저장할 변수를 만든다

// 연산자 변수가 비어있다면 숫자를 첫번째 변수에 저장한다
// 아닐 경우, 두 번째 변수에 저장한다.

// 세 변수를 num1, op, num2 라고 할 경우
// num1 이 존재해야 op가 존재하고, op가 존재해야 num2가 존재한다.


// 경우의 수 3가지
// 1. 숫자 버튼 클릭
// 2. 연산자 버튼 클릭
// 3. = 버튼 클릭

let numOne = '';
let operator = '';
let numTwo = '';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');
// 태그 저장시 $표시 붙이기



const onClickButton = (event) => {
  if (!operator) {  // 연산자 입력 받지 않았을 경우
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  }
  // 연산자가 있을 때
  if (!numTwo) {
    $result.value = "";
  }
  numTwo += event.target.textContent;
  $result.value += event.target.textContent;

};

document.querySelector('#num-0').addEventListener('click', onClickButton);
document.querySelector('#num-1').addEventListener('click', onClickButton);
document.querySelector('#num-2').addEventListener('click', onClickButton);
document.querySelector('#num-3').addEventListener('click', onClickButton);
document.querySelector('#num-4').addEventListener('click', onClickButton);
document.querySelector('#num-5').addEventListener('click', onClickButton);
document.querySelector('#num-6').addEventListener('click', onClickButton);
document.querySelector('#num-7').addEventListener('click', onClickButton);
document.querySelector('#num-8').addEventListener('click', onClickButton);
document.querySelector('#num-9').addEventListener('click', onClickButton);


const onClickOperator = (op) => () => {
  if (numOne) {
    operator = op;
    $operator.value = op;
  } else {
    alert('숫자를 먼저 입력하세요.');
  }
}

document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('*'));
document.querySelector('#calculate').addEventListener('click', () => {
  if (numTwo) // 두 번째 숫자가 입력 됐을 경우
  {
    switch (operator) {
      case '+':
        $result.value = eval(numOne + operator + numTwo);
        break;
      case '-':
        $result.value = numOne - numTwo;
        break;
      case '*':
        $result.value = numOne * numTwo;
        break;
      case '/':
        $result.value = numOne / numTwo;
      default:
        break;
    }
  } else {
    alert("숫자를 먼저 입력하세요 ");
  }
});
document.querySelector('#clear').addEventListener('click', () => {
  numOne = '';
  numTwo = '';
  $result.value = '';
  operator = '';
  $operator.value = '';
});
