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

                <v-btn
                color="primary"
                @click="submit()"
                :loading="loading"
                >
                Submit
                </v-btn>
        </v-form>
              </v-card>
          </v-col>
       </v-container>
    </div>
</template>

<script>
    export default {
      props: ['enterpriseName'],
      data: () => ({
      dialog: false,
      plantName: '',
      trips: '',
      plateNumber: '',
      date: new Date().toISOString().substr(0, 10),
      menu2: false,
      nameRules: [
        v => !!v || 'Please Enter plant Name',
        v => v.length > 1 || 'Enter Valid plant Name',
        v => isNaN(v) || 'Enter A Valid plant Name'
      ],
      numRules: [
        v => !!v || 'Please Enter Number Of Trips',
        v => !isNaN(v) || 'Enter A Valid Number'
      ],
      plateRules: [
        v => !!v || 'Please Enter Plate Number',
        v => v.length >= 1 || 'Enter Valid Plate Number'
      ],
      loading: false
    }),
    methods: {
      submit() {
        if(this.$refs.form.validate()) {
          this.loading = true;

          const chalan = {
            plantName: this.plantName,
            plateNumber: this.plateNumber,
            trips: this.trips,
            date: this.date,
            enterpriseId: this.$route.params.id
          }
          this.$store.dispatch('challans/makeChallan', chalan)
          this.$router.replace('/enterprises')
        }
      }
    }
      

    }
</script>
