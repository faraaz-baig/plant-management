<template>
  <div>
    <v-container>
      <v-row dense>
        <v-col cols="10" class="mx-auto">
          <v-card class="pa-4" color="#EEEEEE">
            <v-card-title class="headline text-h6 text-sm-h5 font-weight-bold">
              {{ name }}
            </v-card-title>
            <v-card-subtitle class=" text-subtitle font-weight-medium"
              >Rs {{ pricePerLoad }} per load</v-card-subtitle
            >
            <v-card-actions>
              <v-btn text :to="EnterpriseDetailLink">View Details</v-btn>
              <v-spacer></v-spacer>
              <v-tooltip bottom>
                <template v-slot:activator="{ on: tooltip }">
                  <v-btn
                    :to="MakeChallanLink"
                    fab
                    v-on="{ ...tooltip }"
                    small
                    class="primary"
                    ><v-icon>mdi-plus</v-icon></v-btn
                  >
                </template>
                <span>Add New Chalan</span>
              </v-tooltip>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "pricePerLoad"],
  computed: {
    MakeChallanLink() {
      return this.$route.path + "/" + this.id + "/make-challans";
    },
    EnterpriseDetailLink() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>
