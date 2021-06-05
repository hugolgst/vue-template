<template>
  <CFlex
    direction="column"
    align-items="center"
    justify-content="space-evenly"
    bg="gray.50"
    color="black"
    h="100vh"
  >
    <Hero />

    <CStack
      spacing="1.5em"
      w="100%"
      max-width="48rem"
    >
      <CText>
        Example repository of <CCode>Next.js</CCode> + <CCode>ChakraUI</CCode> + <CCode>TypeScript</CCode>.
      </CText>

      <CList
        spacing="3"
        my="0"
      >
        <Link
          name="ChakraUI"
          href="https://vue.chakra-ui.com"
        />

        <Link
          name="TypeScript (TS)"
          href="https://www.typescriptlang.org/"
        />
      </CList>
    </CStack>
  </CFlex>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component'
  import { CFlex, CStack, CText, CCode, CList, CListItem, CListIcon, CLink } from '@chakra-ui/vue-next'
  import Hero from '@/components/Hero.vue' // @ is an alias to /src
  import Link from '@/components/Link.vue'

  @Options({
    components: {
      CFlex, CStack, CText, CCode, CList, CListItem, CListIcon, CLink, Hero, Link
    }
  })
  export default class Home extends Vue {}
</script>
