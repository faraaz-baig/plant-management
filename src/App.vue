<template>
  <v-app>
    <Header />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import _ from "lodash";

export default {
  components: {
    Header,
  },
};
</script>
