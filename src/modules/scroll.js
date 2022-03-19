export const scroll = () => {
  const button = document.querySelector('.smooth-scroll')
  const header = document.getElementById('header')
  
  const scrollBtn = () => {
    header.scrollIntoView({block: "start", behavior: "smooth"})
  }

  window.addEventListener('scroll', () => {
    const top = document.documentElement.scrollTop

    if (top >= 610) {
      button.classList.remove('smooth-scroll-none')
    } else {
      button.classList.add('smooth-scroll-none')
    }

    button.addEventListener('click', (e) => {
      e.preventDefault()

      scrollBtn()
    })
  })
}