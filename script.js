const itemTitle = document.querySelectorAll('.item-title');

function handleClick(index) {
  itemTitle[index].parentNode.classList.toggle('active');
}

itemTitle.forEach((item, index) => {
  item.classList.remove('active');
  item.addEventListener('click', () => handleClick(index));
});