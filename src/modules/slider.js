export const slider = () => {
  const sliderBlock = document.querySelector('.services')
  const slides = sliderBlock.querySelectorAll('.col-md-12')
  const benefits = document.querySelector('#benefits')
  const benefitsItems = benefits.querySelectorAll('.benefits__item')

  let currentSlide = 0
  let seccondCurrentSlide = 1

  let currentBenefits = 0
  let seccondBenefits = 1
  let thirdBenefits = 2

  const prevSlide = (elems, index) => {
    elems[index].style = 'display: none'
  }

  const nextSlide = (elems, index) => {
    elems[index].style = 'display: flex'
  }

  const nextSlideBenefits = (elems, index) => {
    elems[index].style = 'display: block'
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
  benefits.addEventListener('click', (e) => {
    e.preventDefault()

    if (document.documentElement.offsetWidth <= 576) {
      prevSlide(benefitsItems, currentBenefits)

      if (e.target.closest('.benefits__arrow--right')) {
        currentBenefits++
      } else if (e.target.closest('.benefits__arrow--left')) {
        currentBenefits--
      }

      if (currentBenefits >= benefitsItems.length) {
        currentBenefits = 0
      }

      if (currentBenefits < 0) {
        currentBenefits = benefitsItems.length - 1
      }

      nextSlideBenefits(benefitsItems, currentBenefits)
    } else {
      prevSlide(benefitsItems, currentBenefits)
      prevSlide(benefitsItems, seccondBenefits)
      prevSlide(benefitsItems, thirdBenefits)

      if (e.target.closest('.benefits__arrow--right')) {
        currentBenefits = currentBenefits + 3
        seccondBenefits = seccondBenefits + 3
        thirdBenefits = thirdBenefits + 3

      } else if (e.target.closest('.benefits__arrow--left')) {
        currentBenefits = currentBenefits - 3
        seccondBenefits = seccondBenefits - 3
        thirdBenefits = thirdBenefits - 3
      }

      if (currentBenefits >= benefitsItems.length) {
        currentBenefits = 0
      }

      if (seccondBenefits >= benefitsItems.length) {
        seccondBenefits = 1
      }

      if (thirdBenefits >= benefitsItems.length) {
        thirdBenefits = 2
      }

      if (currentBenefits < 0) {
        currentBenefits = benefitsItems.length - 3
      }

      if (seccondBenefits < 0) {
        seccondBenefits = benefitsItems.length - 2
      }

      if (thirdBenefits < 0) {
        thirdBenefits = benefitsItems.length - 1
      }

      nextSlideBenefits(benefitsItems, currentBenefits)
      nextSlideBenefits(benefitsItems, seccondBenefits)
      nextSlideBenefits(benefitsItems, thirdBenefits)
    }
  })
}