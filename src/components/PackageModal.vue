<template lang="pug">
  modal(
    name="singlePackageModal"
    width="100%"
    :maxWidth="1300"
    height="auto"
    :adaptive="true"
    :scrollable="true"
  )
    v-card
      v-card-title {{ packageInfo.name }}
      v-card-subtitle {{ packageInfo.description }}
      v-card-text
        .keywords
          .keyword(
            v-for="keyword in packageInfo.keywords"
          ) {{ keyword }}
        .git.d-flex.align-center.mt-2(
          v-if="packageInfo.repository"
        ) {{ packageInfo.repository.host }}:&nbsp;
          a(
            :href="packageInfo.repository.url"
          ) {{ packageInfo.repository.url }}
          img.ml-2(
            :src="packageInfo.owner.avatar"
            width="25"
            height="25"
          )
        .latest-version.mt-2(
          v-if="packageInfo.version"
        ) Latest version: {{ packageInfo.version }}
        .home-page.mt-2(
          v-if="packageInfo.homepage"
        ) Homepage:&nbsp;
          a(
            :href="packageInfo.homepage "
          ) {{ packageInfo.homepage }}
</template>

<script>
export default {
  name: "AppModal",
  props: { packageInfo: Object }
}
</script>

<style scoped lang="scss">


</style>