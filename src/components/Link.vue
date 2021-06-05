<template>
  <CListItem>
    <CListIcon
      name="check-circle"
      color="green.500"
    />
    <CLink
      :href="href"
      flex-grow="1"
      mr="2"
    >
      {{ name }}
    </CLink>
  </CListItem>
</template>

<script lang="ts">
  import { Prop } from 'vue-property-decorator'
  import { CListItem, CListIcon, CLink } from '@chakra-ui/vue-next'
  import { Vue, Options } from 'vue-class-component'

  @Options({
    components: {
      CListItem, CListIcon, CLink
    }
  })
  export default class Link extends Vue {
    @Prop(String) readonly name!: string
    @Prop(String) readonly href!: string
  }
</script>
