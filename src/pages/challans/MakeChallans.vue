<template>
  <div>
    <v-container class="my-8">
      <v-col cols="10" class="mx-auto">
        <v-row justify="center" class="mb-8 headline text-h5 font-weight-bold">
          Make a Challan for {{ enterpriseName }}
        </v-row>
        <v-card outlined color="#EEEEEE" class="pa-7">
          <v-form ref="form" lazy-validation>
            <v-text-field
              v-model="plantName"
              label="plant Name*"
              :rules="nameRules"
              required
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="material"
              label="Material*"
              :rules="materialRules"
              required
              class="mb-3"
            ></v-text-field>

            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Date*"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>

            <v-text-field
              v-model="trips"
              label="Number of trips*"
              :rules="numRules"
              required
            ></v-text-field>

            <v-text-field
              v-model="plateNumber"
              :rules="plateRules"
              label="Plate number*"
              required
              class="mb-4"
            ></v-text-field>

            <div>
              <v-dialog v-model="dialog" width="800">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="primary" v-bind="attrs" v-on="on"
                    >Confirm</v-btn
                  >
                </template>

                <v-card>
                  <v-card-title class="headline grey lighten-2"
                    >Please Confirm Chalan Details</v-card-title
                  >
                  <v-card-subtitle class="subtitle grey lighten-2"
                    >You can't change, edit or delete this challan after
                    submitting</v-card-subtitle
                  >
                  <v-card-text>
                    <v-form ref="form" lazy-validation>
                      <v-text-field
                        v-model="plantName"
                        label="plant Name*"
                        :rules="nameRules"
                        required
                        :value="plantName"
                        class="mb-3"
                      ></v-text-field>

                      <v-text-field
                        v-model="material"
                        label="Material*"
                        :rules="materialRules"
                        required
                        :value="material"
                        class="mb-3"
                      ></v-text-field>

                      <v-menu
                        v-model="menu2"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="date"
                            label="Date*"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="date"
                          @input="menu2 = false"
                        ></v-date-picker>
                      </v-menu>

                      <v-text-field
                        v-model="trips"
                        label="Number of trips*"
                        :rules="numRules"
                        :value="trips"
                        required
                      ></v-text-field>

                      <v-text-field
                        v-model="plateNumber"
                        :rules="plateRules"
                        label="Plate number*"
                        :value="plateNumber"
                        required
                        class="mb-4"
                      ></v-text-field>
                    </v-form>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="submit">submit</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </v-form>
        </v-card>
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["enterpriseName"],
  data: () => ({
    dialog: false,
    plantName: "",
    trips: "",
    plateNumber: "",
    material: "",
    costPerTrip: "",
    date: new Date().toISOString().substr(0, 10),
    menu2: false,
    nameRules: [
      (v) => !!v || "Please Enter plant Name",
      (v) => v.length > 1 || "Enter Valid plant Name",
      (v) => isNaN(v) || "Enter A Valid plant Name",
    ],
    materialRules: [
      (v) => !!v || "Please Enter Material Name",
      (v) => v.length > 1 || "Enter Valid Material Name",
      (v) => isNaN(v) || "Enter A Valid Material Name",
    ],
    numRules: [
      (v) => !!v || "Please Enter Number Of Trips",
      (v) => !isNaN(v) || "Enter A Valid Number",
    ],
    plateRules: [
      (v) => !!v || "Please Enter Plate Number",
      (v) => v.length >= 1 || "Enter Valid Plate Number",
    ],
    loading: false,
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        const chalan = {
          plantName: this.plantName,
          plateNumber: this.plateNumber,
          trips: this.trips,
          date: this.date,
          material: this.material,
          enterpriseId: this.$route.params.id,
        };
        this.$store.dispatch("challans/makeChallan", chalan);
        this.$router.replace("/enterprises");
      }
    },
  },
};
</script>
