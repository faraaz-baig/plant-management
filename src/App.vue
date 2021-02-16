<template>
  <v-app>
    <Header/>
    <v-main>
      <router-view />
    </v-main>
  </v-app>

</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
        Header
    }  
}
</script>
