<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="10" class="mx-auto">
          <v-row justify="end" class="pa-4">
            <v-btn
              class="primary"
              v-if="!isLoggedIn"
              to="/auth?redirect=register"
              >Register Your enterprise</v-btn
            >
            <v-btn
              v-if="isLoggedIn && !isEnterprise && !isLoading"
              class="primary"
              to="/register"
              ><v-icon left>mdi-plus</v-icon> Add your enterprise</v-btn
            >
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="isLoading">
      <v-row>
        <v-col cols="10" class="mx-auto">
          <v-skeleton-loader class="pa-4" type="article"></v-skeleton-loader>
          <v-skeleton-loader class="pa-4" type="article"></v-skeleton-loader>
          <v-skeleton-loader class="pa-4" type="article"></v-skeleton-loader>
          <v-skeleton-loader class="pa-4" type="article"></v-skeleton-loader>
          <v-skeleton-loader class="pa-4" type="article"></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else-if="hasEnterprises">
      <EnterpriseItem
        v-for="enterprise in Enterprises"
        :key="enterprise.id"
        :id="enterprise.id"
        :name="enterprise.name"
        :pricePerLoad="enterprise.pricePerLoad"
      />
    </v-container>
    <v-container v-else-if="error" class="my-16 font-weight-bold text-h5">
      <v-card outlined>
        <v-row class="pa-5" justify="center">Failed to fetch data :(</v-row>
      </v-card>
    </v-container>
    <v-container class="my-16 font-weight-bold text-h5" v-else>
      <v-card outlined>
        <v-row class="pa-5" justify="center">No enterprises found...</v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import EnterpriseItem from "@/components/enterprises/EnterpriseItem";

export default {
  components: {
    EnterpriseItem,
  },
  data: () => {
    return {
      isLoading: false,
      error: false,
    };
  },
  computed: {
    Enterprises() {
      return this.$store.getters["enterprises/enterprises"];
    },
    hasEnterprises() {
      return (
        !this.isLoading && this.$store.getters["enterprises/hasEnterprises"]
      );
    },
    isEnterprise() {
      return this.$store.getters["enterprises/isEnterprise"];
    },
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    async loadEnterprises() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("enterprises/loadEnterprises");
      } catch (error) {
        this.error = true;
      }
      this.isLoading = false;
    },
  },
  created() {
    this.loadEnterprises();
  },
};
</script>
