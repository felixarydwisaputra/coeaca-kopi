const scroll = document.querySelector('.scroll')


window.addEventListener('scroll', () => {
  if(scrollY > 1500){
    scroll.classList.add('active')
  } else{
    scroll.classList.remove('active')
  }
})