export const call = () => {
  const body = document.querySelector('body')
  const callHeader = document.querySelector('.header-modal')
  const overlay = document.querySelector('.overlay')
  const callServices = document.querySelector('.services-modal')

   const closeClick = (str) => {

    overlay.style.display = 'none'

    if (str == 'header') {
      callHeader.classList.add('header-modal')
    }

    if (str == 'service') {
      callServices.classList.add('services-modal')
    }
  }

  const openClick = (str) => {

    overlay.style.display = 'flex'

    if (str == 'header') {
      callHeader.classList.remove('header-modal')
    }

    if (str == 'service') {
      callServices.classList.remove('services-modal')
    }
  }

  body.addEventListener('click', (e) => {
      
    if (e.target.closest('#header .button')) {
      e.preventDefault()

      openClick('header')
    } 
    if (e.target.closest('.header-modal__close') || e.target.closest('.overlay')) {
    e.preventDefault()

    closeClick('header')
    }

    if (e.target.closest('.service-button')) {
      e.preventDefault()

      openClick('service')
    } 
    if (e.target.closest('.services-modal__close') || e.target.closest('.overlay')) {
    e.preventDefault()

    closeClick('service')
    }
  })
}