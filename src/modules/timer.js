export const timer = (deadline) => {
  const timerDays = document.querySelector('.days')
  const timerHours = document.querySelector('.hours')
  const timerMinutes = document.querySelector('.minutes')
  const timerSeconds = document.querySelector('.seconds')

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime()
    let dateNow = new Date().getTime()
    let timeRemaining = (dateStop - dateNow) / 1000
    let days = Math.floor(timeRemaining / 3600 / 24)
    let hours = Math.floor((timeRemaining / 3600) % 24)
    let minutes = Math.floor((timeRemaining / 60) % 60)
    let seconds = Math.floor(timeRemaining % 60)

    return { timeRemaining, days, hours, minutes, seconds }
  }

  const updateClock = () => {
    let getTime = getTimeRemaining()

    const arr = [getTime.days, getTime.hours, getTime.minutes, getTime.seconds]

    arr.forEach((item, i, arr) => {
      if (item < 10){
        arr[i] = '0' + item
      }
    })

    timerDays.textContent = arr[0]
    timerHours.textContent = arr[1]
    timerMinutes.textContent = arr[2]
    timerSeconds.textContent = arr[3]

    if (getTime.timeRemaining > 0) {
      setTimeout(updateClock, 1000)
    } else if (getTime.timeRemaining <= 0) {
      timerDays.textContent = '00'
      timerHours.textContent = '00'
      timerMinutes.textContent = '00'
      timerSeconds.textContent = '00'
    }

  }
  updateClock()
}