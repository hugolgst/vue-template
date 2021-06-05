<template>
  <CBox font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';">
    <router-view />
  </CBox>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component'
  import { CBox } from '@chakra-ui/vue-next'

  @Options({
    components: { CBox }
  })
  export default class App extends Vue { }
</script>
