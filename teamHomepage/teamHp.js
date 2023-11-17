document.addEventListener('DOMContentLoaded', function () {
  // 팝업 열기
  const popupButton = document.getElementById('popupButton');
  const popup = document.getElementById('popup');
  const popupCloseButton = document.getElementById('popupCloseButton');

  popupButton.addEventListener('click', function () {
    popup.style.display = 'block';
  });

  popupCloseButton.addEventListener('click', function () {
    popup.style.display = 'none';
  });

  // 입력 기능
  const inputField = document.getElementById('inputField');
  inputField.addEventListener('keyup', function () {
    console.log('입력값:', inputField.value);
  });
});

// top 버튼
let moveToTop = function () {
  document.body.scrollIntoView({ behavior: "smooth" });
};


// 상단 진행바
let scrollTop = 0;
let bar;

window.onload = function () {
  bar = document.getElementsByClassName("bar-ing")[0];
};
window.addEventListener('scroll', function () {
  const scrollTop = document.documentElement.scrollTop;
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
  const scrollBar = document.querySelector('.scroll-ing');
  scrollBar.style.width = scrollPercent + '%';
});