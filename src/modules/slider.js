export const slider = () => {
  const sliderBlock = document.querySelector('.benefits-wrap')
  const slides = document.querySelectorAll('.benefits__item')
 

  let currentSlide = 0


  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass)
  }

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass)
  }


  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault()

    if(!e.target.matches('.benefits__arrow')) {
      return
    }
    prevSlide(slides, currentSlide, 'benefits__item-active')

    if (e.target.matches('#arrow-right')) {
      currentSlide++
    } else if (e.target.matches('#arrow-left')) {
      currentSlide--
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1
    }

    nextSlide(slides, currentSlide, 'benefits__item-active')
  })
}