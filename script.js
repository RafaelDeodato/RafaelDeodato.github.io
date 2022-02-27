const menuList = document.querySelectorAll('.nav ul li');
const contentList = document.querySelectorAll('.content-item');

function contentActive(index) {
  contentList.forEach((item) => {
    item.classList.remove('active');
  });

  menuList.forEach((item) => {
    item.classList.remove('active');
  });

  contentList[index].classList.add('active');
  menuList[index].classList.add('active');
}

contentList[1].classList.add('active');
menuList[1].classList.add('active')

menuList.forEach((item, index) => {
  item.addEventListener('click', () => {
    contentActive(index);
  });
});
