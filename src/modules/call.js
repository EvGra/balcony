export const call = () => {
  const body = document.querySelector('body')
  const call = document.querySelector('.header-modal')
  const overlay = document.querySelector('.overlay')

   const callClick = () => {
    call.classList.toggle('header-modal')
  }

  body.addEventListener('click', (e) => {
      
    if (e.target.closest('#header .button')) {
      e.preventDefault()

      callClick()
      overlay.style.display = 'flex'
    } 
    if (e.target.closest('.header-modal__close') || e.target.closest('.overlay')) {
    e.preventDefault()

    callClick()
    overlay.style.display = 'none'
    }
  })
}