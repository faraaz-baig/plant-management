<template>
    <v-container>
            <v-card :max-width="$vuetify.breakpoint.xs ? '80%' : '50%'"  class="pa-7 mx-auto">
                <v-form ref="form" lazy-validation>
                    <v-text-field
                    v-model.trim="name"
                    label="Enterprise Name"
                    required
                    :rules="nameRules"
                    class="my-6"
                    ></v-text-field>

                    <v-text-field
                    v-model.number="price"
                    label="Cost Per Load (in ruppees) "
                    required
                    :rules="numRules"
                    class="my-6"
                    ></v-text-field>

                    <v-text-field
                    v-model="address"
                    label="Enterprise Address"
                    required
                    class="my-6"
                    :rules="addressRules"
                    ></v-text-field>

                    <v-btn
                    color="primary"
                    class="my-6"
                    @click="submitForm"
                    :loading="loading"
                    >
                    Submit
                    </v-btn>
                </v-form>

            </v-card>
        </v-container>
</template>

<script>
    export default {
        emits: ['save-data'],
        data: () => {
            return {
                address: '',
                price: null,
                name: '',
                numRules: [
                    v => !!v || 'Please Enter Number Of Trips',
                    v => !isNaN(v) || 'Enter A Valid Number'
                ],
                nameRules: [
                    v => !!v || 'Please Enter Enterprise Name',
                    v => v.length > 1 || 'Enter Valid Enterprise Name',
                    v => isNaN(v) || 'Enter A Valid Enterprise Name'
                ],
                addressRules: [
                    v => !!v || 'Please Enter Your Address ',
                    v => v.length > 10 || 'Enter Valid Address',
                    v => isNaN(v) || 'Enter Valid Address'
                ],
                loading: false
            }
        },
        methods: {
            submitForm() {
              if(this.$refs.form.validate()) {
                  this.loading = true;
                  const formData = {
                    name: this.name,
                    price: this.price,
                    address: this.address
                }
                this.$emit('save-data', formData)
              }  
            }
        }
    }
</script>