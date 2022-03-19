export const calc = () => {
  const calcBlock = document.querySelector('#calc')
  const calcType = document.querySelector('#calc-type')
  const calcMaterial = document.querySelector('#calc-type-material')
  const calcSquere = document.querySelector('#calc-input')
  const total = document.getElementById('calc-total')

  if (calcBlock && calcType && calcMaterial && calcSquere && total) {
    const countCalc = () => {
    const calcSquereValue = +calcSquere.value

    let calcTypeValue = +calcType.options[calcType.selectedIndex].value
    let calcMaterialValue = +calcMaterial.options[calcMaterial.selectedIndex].value

    let totalValue = 0

    if (calcTypeValue > 0 && calcMaterialValue > 0 && calcSquereValue > 0) {
      totalValue = calcTypeValue * calcSquereValue * calcMaterialValue

      total.value = Math.floor(totalValue * 10) / 10;
    } else {
      totalValue = 0
    }
  }

  calcBlock.addEventListener('input', (e) => {
    if (e.target === calcType || e.target === calcSquere || e.target === calcMaterial) {
      calcSquere.value = calcSquere.value.replace (/\D/g, '')

      countCalc()
    }
  })
  }
}