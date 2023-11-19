
// top 버튼
let moveToTop = function () {
  document.body.scrollIntoView({ behavior: "smooth" });
};


// 상단 진행바
let scrollTop = 0;
let bar;

window.onload = function () {
  bar = document.getElementsByClassName("progressBar-ing")[0];
};
window.addEventListener('scroll', function () {
  const scrollTop = document.documentElement.scrollTop;
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
  const scrollBar = document.querySelector('.progressBar-ing');
  scrollBar.style.width = scrollPercent + '%';
});

// ================   모달  =============

// 클릭 시, 모달을 열 버튼과 모달 닫기 버튼 불러오기 
const detailButtons = document.querySelectorAll('.detailButton');
const modalCloseButtons = document.querySelectorAll('.modalCloseButton');

// 이벤트 핸들러 정의
function modal(num) {
  // 이벤트 리스너 추가
  detailButtons[num].addEventListener('click', () => {
    // 모달의 속성을 이용해서 모달의 ID값 가져오기
    const modalId = detailButtons[num].getAttribute('data-modal');
    // 모달 ID에 따라 요소 선택
    const modal = document.getElementById(modalId);

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
}

// 모든 모달 버튼에 모달 열기 이벤트 핸들러를 정의
for (let i = 0; i < detailButtons.length; i++) {
  modal(i);
}

// 모달 창 닫기
modalCloseButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);

    modal.style.display = 'none';
    document.body.style.overflow = 'unset';
  });
});

// ==================  githubButton  ==================
document.querySelector('.githubButton1').addEventListener('click', function () {
  const githubLink = 'https://github.com/yundoun';

  // 새 창에서 외부 링크 열기
  window.open(githubLink, '_blank');
});

document.querySelector('.githubButton2').addEventListener('click', function () {
  const githubLink = 'https://github.com/asd0236';

  // 새 창에서 외부 링크 열기
  window.open(githubLink, '_blank');
});

document.querySelector('.githubButton3').addEventListener('click', function () {
  const githubLink = 'https://github.com/MCshin00';

  // 새 창에서 외부 링크 열기
  window.open(githubLink, '_blank');
});
