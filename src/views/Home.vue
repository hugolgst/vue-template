<template>
  <div class="home">
    <Hero />
  </div>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component'
  import Hero from '@/components/Hero.vue' // @ is an alias to /src

  @Options({
    components: {
      Hero
    }
  })
  export default class Home extends Vue {}
</script>
