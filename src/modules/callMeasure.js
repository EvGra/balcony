export const callMeasure = () => {
  const body = document.querySelector('body')
  const call = document.querySelector('.services-modal')
  const overlay = document.querySelector('.overlay')

   const callClick = () => {
    call.classList.toggle('services-modal')
  }

  body.addEventListener('click', (e) => {
      
    if (e.target.closest('.service-button')) {
      e.preventDefault()

      callClick()
      overlay.style.display = 'flex'
    } 
    if (e.target.closest('.services-modal__close')) {
    e.preventDefault()

    callClick()
    overlay.style.display = 'none'
    }
  })
}