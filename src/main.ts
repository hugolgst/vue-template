import './registerServiceWorker'

import ChakraUIVuePlugin, { chakra } from '@chakra-ui/vue-next'

import App from './App.vue'
import { createApp } from 'vue'
import { domElements } from '@chakra-ui/vue-system'
import router from './router'

const app = createApp(App)
  .use(router)
  .use(ChakraUIVuePlugin)

domElements.forEach((tag) => {
  app.component(
    `chakra.${tag}`,
    chakra(tag)
  )
})

app.mount('#app')
