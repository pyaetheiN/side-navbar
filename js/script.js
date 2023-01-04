const toggle = document.querySelector('.nav__toggle');
const expand = document.querySelector('.expand');
const navBar = document.querySelector('.nav');

toggle.addEventListener('click', () => {
  navBar.classList.toggle('expand');
  if(navBar.classList.contains('expand')){
    toggle.classList.replace('uil-arrow-circle-right', 'uil-arrow-circle-left')
  } else{
    toggle.classList.replace('uil-arrow-circle-left', 'uil-arrow-circle-right')
  }
})