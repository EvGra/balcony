import {call} from './modules/call'
import {slider} from './modules/slider'
import {timer} from './modules/timer'
import {sendForm} from './modules/sendForm'
import {scroll} from './modules/scroll'
import {calc} from './modules/calc'

call()
slider()
timer('18 april 2022')
scroll()
calc()

sendForm({
  formId: 'formDiscount',
  total: 'calc-total'
})
sendForm({
  formId: 'formDiscount2',
  total: 'calc-total'
})