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

