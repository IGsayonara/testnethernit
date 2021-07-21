<template lang="pug">
  v-app
    AppHeader
    AppMain
    AppFooter
</template>

<script>

import AppHeader from "@/components/AppHeader";
import AppMain from "@/components/AppMain";
import AppFooter from "@/components/AppFooter";

export default {
  name: 'App',

  components: {
    AppFooter,
    AppMain,
    AppHeader
  }
};
</script>
