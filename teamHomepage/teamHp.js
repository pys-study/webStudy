
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