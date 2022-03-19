export const docOpen = () => {
  const imgs = document.querySelectorAll('.sertificate-document')
  const openImgs = document.querySelectorAll('.img-document')
  const overlay = document.querySelector('.overlay')
  const body = document.querySelector('body')

  body.addEventListener('click', (e) => {
    if (e.target.closest('.sertificate-document')) {
      e.preventDefault()

      imgs.forEach((img, i) => {

        const openDoc = () => {
        openImgs[i].style = 'display: flex'
        overlay.style.display = 'flex'
        }

        openDoc()
      })
    }

    if (e.target.closest('.overlay')) {
      openImgs.forEach((img) => {

        img.style = 'display: none'
      })
    }
  })
}