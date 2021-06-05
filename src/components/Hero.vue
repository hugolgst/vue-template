<template>
  <CFlex
    justify-content="center"
    align-items="center"
    bg-gradient="linear(to-l, #7928CA, #FF0080)"
    bg-clip="text"
  >
    <CHeading font-size="5vw">Vue TS/ChakraUI Template</CHeading>
  </CFlex>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component'
  import { CHeading, CFlex } from '@chakra-ui/vue-next'

  @Options({
    components: {
      CHeading, CFlex
    }
  })
  export default class Home extends Vue {}
</script>
