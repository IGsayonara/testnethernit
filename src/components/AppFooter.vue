<template lang="pug">
  v-footer.footer.pa-5(
    dark
    padless
  )
    .d-flex.flex-wrap
      .name Сделал: Дидуник Игорь Михайлович
      .git
        a(
          href="https://github.com/IGsayonara/testnethernit"
        ) Github: https://github.com/IGsayonara/testnethernit
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style scoped>
  .git a{
    color: white
  }
  .name, .git{
    margin: 5px;
  }
  @media(max-width: 600px) {
    .footer{
      font-size: 12px;
    }
  }
</style>