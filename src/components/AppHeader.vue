<template lang="pug">
  v-app-bar(
    app
    color="primary"
    dark
  )
    v-container
      v-row.d-flex.justify-center
        v-col(
          cols="12"
          md="9"
        )
          v-text-field(
            filled
            flat
            rounded
            dense
            placeholder="Search"
            type="text"
            hide-details
            v-model="searchValue"
            background-color="rgba(0, 0, 0, 0.5)"
            color="primary"
            append-icon="mdi-magnify"
            v-debounce:300ms="debounceChangeQuery"
          )
</template>

<script>

import { mapActions } from "vuex";

export default {
  name: "AppHeader",
  data: () => ({
    searchValue: null
  }),
  methods: {
    ...mapActions(["changeQuery"]),
    debounceChangeQuery(query){
      this.changeQuery(query)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  },

}
</script>

<style scoped lang="scss">

</style>