const navToggleBtn = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')

navToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('nav-open')
})

   
navLinks.forEach(link => {
  link.addEventListener('click', ()  => {
    document.body.classList.remove('nav-open')
  })
})