import {call} from './modules/call'
import {slider} from './modules/slider'
import {timer} from './modules/timer'
import {sendForm} from './modules/sendForm'

call()
slider()
timer('18 april 2022')

sendForm({
  formId: 'formDiscount'
})
sendForm({
  formId: 'formDiscount2'
})