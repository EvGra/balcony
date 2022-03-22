export const sendForm = ({ formId, total }) => {
  const form = document.getElementById(formId)
  const statusBlock = document.createElement('div')
  const errorText = 'Ошибка...'
  const loadText = 'Загрузка'
  const successText = 'Спасибо. С вами свяжется наш менеджер'

  const totalInput = document.querySelector('#calc-total')

  const name = form.querySelector('.formName')
  const phone = form.querySelector('.formPhone')
  
  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
  }

  const submitForm = () => {
    const formElements = form.querySelectorAll('input')
    const formData = new FormData(form)
    const formBody = {}

    statusBlock.textContent = loadText

    statusBlock.style = 'color: #5d5d5d'
  
    form.append(statusBlock)

    formData.forEach((val, key) => {
      formBody[key] = val
    })

    if (totalInput) {
      formBody['calc-total'] = totalInput.value
    }

    sendData(formBody).then(data => {
      statusBlock.textContent = successText

      formElements.forEach(input => {
        input.value = ''
      })

      setTimeout(() => {
        statusBlock.textContent = ''
      }, 3000)
    })
    .catch(error => {
      statusBlock.textContent = errorText
    })
  }

  try {
    if (!form) {
      throw new Error('Верните форму')
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault()

      if (!/[^А-яA-z\s]/g.test(name.value) && !/[^\d\+]/g.test(phone.value) && (phone.value.length <= 16) && phone.value.trim() != '' && name.value.trim() != '' && name.value[0] != ' ') {
        submitForm()
      } else {
        alert('Данные не валидны')
      } 
    })
  } catch(error) {
    console.log(error.message);
  }
}