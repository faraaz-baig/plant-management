<template>
  <div>
    <v-container class="py-12">
      <v-row justify="center">
        <v-text class="text-h5 font-weight-bold"
          >Register Your Enterprise</v-text
        >
      </v-row>
    </v-container>
    <EnterpriseForm @save-data="saveData" />
  </div>
</template>

<script>
import EnterpriseForm from "@/components/enterprises/EnterpriseForm";
export default {
  components: {
    EnterpriseForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch("enterprises/registerEnterprise", data);
      this.$router.replace("/enterprises");
    },
  },
};
</script>
