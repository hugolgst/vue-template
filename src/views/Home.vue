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
      <chakra.p>
        Example repository of <CCode>Next.js</CCode> + <CCode>ChakraUI</CCode> + <CCode>TypeScript</CCode>.
      </chakra.p>

      <CList
        spacing="3"
        my="0"
      >
        <CListItem>
          <CListIcon
            name="check-circle"
            color="green.500"
          />
          <CLink
            href="https://vue.chakra-ui.com/"
            flex-grow="1"
            mr="2"
          >
            ChakraUI
          </CLink>
        </CListItem>
      </CList>
    </CStack>
  </CFlex>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component'
  import { CFlex, CStack, CText, CCode, CList, CListItem, CListIcon, CLink } from '@chakra-ui/vue-next'
  import Hero from '@/components/Hero.vue' // @ is an alias to /src

  @Options({
    components: {
      CFlex, CStack, CText, CCode, CList, CListItem, CListIcon, CLink, Hero
    }
  })
  export default class Home extends Vue {}
</script>
