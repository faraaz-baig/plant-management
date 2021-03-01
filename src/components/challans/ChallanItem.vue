<template>
  <v-card class="pa-3 mb-4">
    <v-layout row wrap>
      <v-row xs12 class="pa-6" justify="space-between">
        <v-flex class="ml-2">
          <!--<div class="caption grey--text">Chalan ID</div>-->
          <div class="font-weight-bold text-h6 blue-grey--text">
            {{ plantname }}
          </div>
          <div class="caption grey--text">{{ id }}</div>
        </v-flex>
      </v-row>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs6 sm6 md3 class="pa-6 text-left">
        <div class="caption grey--text">Material</div>
        <div>{{ material }}</div>
      </v-flex>
      <v-flex xs6 sm6 md3 class="pa-6 text-right text-sm-right text-md-center">
        <div class="caption grey--text">Date</div>
        <div>{{ date }}</div>
      </v-flex>
      <v-flex xs6 sm6 md3 class="pa-6 text-sm-left text-md-center">
        <div class="caption grey--text">Numbers Of Trips</div>
        <div>{{ trips }}</div>
      </v-flex>
      <v-flex xs6 sm6 md3 class="pa-6 text-right">
        <div class="caption grey--text">Plate Number</div>
        <div>{{ platenumber }}</div>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: ["platenumber", "date", "trips", "plantname", "id", "material"],
  computed: {
    recievedChallans() {
      return this.$store.getters["challans/challans"];
    },
  }
};
</script>
