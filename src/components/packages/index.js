import RadioButton from './radio-button.vue'
import Transfer from './transfer.vue'

const compontents = [
  RadioButton,
  Transfer,
]

const install = Vue => {
  if (install.installed) {
    return
  }

  compontents.map(element => Vue.component(element.name, element))
}

typeof window !== 'undefined' && window.Vue && install(window.Vue)

export default {
  install
}
