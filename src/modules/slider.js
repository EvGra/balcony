export const slider = () => {
  const sliderBlock = document.querySelector('.services')
  const slides = sliderBlock.querySelectorAll('.col-md-12')
 
  let currentSlide = 0
  let seccondCurrentSlide = 1

  const prevSlide = (elems, index) => {
    elems[index].style = 'display: none'
  }

  const nextSlide = (elems, index) => {
    elems[index].style = 'display: flex'
  }

    sliderBlock.addEventListener('click', (e) => {
      e.preventDefault()

      if (document.documentElement.offsetWidth <= 576) {
        prevSlide(slides, currentSlide)

        if (e.target.closest('#arrow-right')) {
          currentSlide++
        } else if (e.target.closest('#arrow-left')) {
          currentSlide--
        }

        if (currentSlide >= slides.length) {
          currentSlide = 0
        }

        if (currentSlide < 0) {
          currentSlide = slides.length - 1
        }

        nextSlide(slides, currentSlide)
      } else {
        prevSlide(slides, currentSlide)
        prevSlide(slides, seccondCurrentSlide)

        if (e.target.closest('#arrow-right')) {
          currentSlide = currentSlide + 2
          seccondCurrentSlide = seccondCurrentSlide + 2
        } else if (e.target.closest('#arrow-left')) {
          currentSlide = currentSlide - 2
          seccondCurrentSlide = seccondCurrentSlide - 2
        }

        if (currentSlide >= slides.length) {
          currentSlide = 0
        }

        if (seccondCurrentSlide >= slides.length) {
          seccondCurrentSlide = 1
        }

        if (currentSlide < 0) {
          currentSlide = slides.length - 2
        }

        if (seccondCurrentSlide < 0) {
          seccondCurrentSlide = slides.length - 1
        }

        nextSlide(slides, currentSlide)
        nextSlide(slides, seccondCurrentSlide)
      }
    })
  
}