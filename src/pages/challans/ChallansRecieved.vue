<template>
    <div>
        <v-container class="my-7">
            <v-row justify="center" class="font-weight-bold text-h5" >Challans Made For Your Enterprise</v-row>
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
        <v-container  v-else-if="hasChallans">
            <challan-item v-for="challan in recievedChallans" :key="challan.id" :platenumber="challan.plateNumber" :plantname="challan.plantName" :id="challan.id" :date="challan.date" :trips="challan.trips"></challan-item>
        </v-container>
        <v-container v-else-if="error"  class="my-16 font-weight-bold text-h5">
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
import ChallanItem from '@/components/challans/ChallanItem'
    export default {
        components: {
            ChallanItem
        },
        data: () => {
            return {
                isLoading: false,
                error: false
            }
        },
       
        computed: {
            recievedChallans() {
              return this.$store.getters['challans/challans']
            },
            hasChallans() {
                return this.$store.getters['challans/hasChallans']
            },
        },
        methods: {
            async loadChallans() {
                this.isLoading = true
                try {
                    await this.$store.dispatch('challans/fetchChallans')
                }catch (error) {
                    this.error = true
                }
                this.isLoading = false
            }
        },
        created() {
            this.loadChallans()
        }
        
    }
</script>

<style scoped>

</style>