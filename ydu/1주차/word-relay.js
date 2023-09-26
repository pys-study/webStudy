const number = parseInt(prompt("몇 명이 참가하나요 ?"), 10); // 10 적어주면 10진법, 2 적어주면 2진법으로 인식

const $button = document.querySelector("button");
const $input = document.querySelector("input");
const $word = document.querySelector("#word");
const $order = document.querySelector("#order");

let word; // 제시어
let newWord; // 새로 입력한 단어

const onClickButton = () => {
  if (!word || word[word.length - 1] === newWord[0]) {
    // 제시어가 비어 있는 가 OR 단어가 올바른가 
    word = newWord;
    $word.textContent = word;  // 화면ㅇ ㅔ제시어 표시

    const order = Number($order.textContent);

    if (order + 1 > number) {
      // 현재순서에 + 1 한 값이 총 인원보다 큰가? => 순번 초기화
      $order.textContent = 1;
    } else {
      $order.textContent = order + 1;
    }

  } else {
    // 올바르지 않다
    alert("올바르지 않은 단어입니다.");
  }
  $input.value = "";
  $input.focus();
};

const onInput = (event) => {
  newWord = event.target.value;
};


$button.addEventListener("click", onClickButton);
$input.addEventListener("input", onInput);


// 1. 자주 쓰이지 않는 경우 함수를 포함해서 한번에 작성

// 2. onClick 이라는 함수를 따로 작성해서 사용

//document.querySelector('button').addEventListener('click', onClick);  // 함수 이름만 넣어야한다 // () 넣으면 리턴값 나옴 => 리턴값  x
