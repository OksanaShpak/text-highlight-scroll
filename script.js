const h2 = document.querySelector('h2');
const count = h2.children.length - 1;

onscroll = () => {
  const i = (document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * count | 0;
  const active = h2.querySelector('.active');
  const next = h2.children[i];

  active?.classList.remove('active');
  next.classList.add('active');
}