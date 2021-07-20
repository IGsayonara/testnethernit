<template lang="pug">
  v-app
    AppHeader
    AppMain

</template>

<script>

import AppHeader from "@/components/AppHeader";
import AppMain from "@/components/AppMain";

export default {
  name: 'App',

  components: {
    AppMain,
    AppHeader

  },

  data: () => ({
    //
  }),
};
</script>
