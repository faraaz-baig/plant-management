<template>
  <div>
    <v-container class="my-12">
        <v-row justify="space-around">
          <v-card dark width="300px" class="pa-5 green lighten-2">
             <v-row justify="center">
              <v-card-title class="text-h5">Total Amount</v-card-title>
            </v-row>
            <v-row justify="center">
              <v-card-title class="font-weight-bold text-h4">Rs {{ totalPayable }}</v-card-title>
            </v-row>
          </v-card>
          <v-card dark width="300px" class="pa-5 green lighten-2">
             <v-row justify="center">
              <v-card-title class="text-h5">Total Challans</v-card-title>
            </v-row>
            <v-row justify="center">
              <v-card-title class="font-weight-bold text-h4">{{ recievedChallans.length }}</v-card-title>
            </v-row>
          </v-card>
        </v-row>
      </v-container>
    <v-container class="mb-7 mt-16">
      <v-row justify="center" class="font-weight-bold text-h5"
        >Challans Made For Your Enterprise</v-row
      >
    </v-container>
    <v-container class="mb-3 px-4">
        <v-btn small text color="grey" class="mr-4" @click="sortBy(trips)">
          <v-icon left small>mdi-sort-ascending</v-icon>
          <span class="caption text-capitalize">By Number Of Trips</span>
        </v-btn>
        <v-btn small text color="grey" @click="sortBy(date)">
          <v-icon left small>mdi-sort-calendar-ascending</v-icon>
          <span class="caption text-capitalize">Date</span>
        </v-btn>
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
    <v-container v-else-if="hasChallans">
      <challan-item
        v-for="challan in recievedChallans"
        :key="challan.id"
        :platenumber="challan.plateNumber"
        :plantname="challan.plantName"
        :id="challan.id"
        :date="challan.date"
        :trips="challan.trips"
        :material="challan.material"
        
      ></challan-item>
    </v-container>
    <v-container v-else-if="error" class="my-16 font-weight-bold text-h5">
      <v-card outlined>
        <v-row class="pa-5" justify="center">Failed to fetch data :(</v-row>
      </v-card>
    </v-container>
    <v-container v-else class="my-12">
      <v-row justify="center">You haven't recieved any challans yet!</v-row>
    </v-container>
  </div>
</template>

<script>
import ChallanItem from "@/components/challans/ChallanItem";
export default {
  components: {
    ChallanItem,
  },
  data: () => {
    return {
      isLoading: false,
      error: false,
    };
  },

  computed: {
    recievedChallans() {
      return this.$store.getters["challans/challans"];
    },
    hasChallans() {
      return this.$store.getters["challans/hasChallans"];
    },
    numberOfChallans() {
      return this.$store.getters["challans/numberOfChallans"];
    },
    totalPayable() {
      let sum = 0;
      this.recievedChallans.forEach(c => sum += parseInt(c.trips));
      const ppl = this.$store.state.enterprises.enterprises.filter(e => e.id === this.$store.state.auth.userId)[0].pricePerLoad;
      return ppl*sum;
    }
    
  },
  methods: {
    async loadChallans() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("challans/fetchChallans");
      } catch (error) {
        this.error = true;
      }
      this.isLoading = false;
    },
    sortBy(prop) {
      this.recievedChallans.sort((a,b) => b[prop] - a[prop])
    },
  },
  created() {
    this.loadChallans();
  },
};
</script>
