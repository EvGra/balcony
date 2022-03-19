import {call} from './modules/call'
import {slider} from './modules/slider'
import {timer} from './modules/timer'
import {sendForm} from './modules/sendForm'
import {scroll} from './modules/scroll'

call()
slider()
timer('18 april 2022')
scroll()

sendForm({
  formId: 'formDiscount'
})
sendForm({
  formId: 'formDiscount2'
})