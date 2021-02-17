<template>
    <div>
        <v-container class="mt-10">
            <v-row>
                <v-col cols="10" class="mx-auto">
                    <v-card outlined class="pa-4" color="#EEEEEE">
                        <v-card-title class="headline text-h5 font-weight-bold">
                            {{ name }}
                        </v-card-title>
                        <v-card-subtitle class=" text-subtitle font-weight-medium">Rs {{ pricePerLoad }} per load</v-card-subtitle>
                        <v-card-text>{{ address }}</v-card-text>
                        <v-card-actions>
                            <v-btn class="primary" :to="challanLink">make challan</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card> 
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <router-view :enterpriseName="this.name"></router-view>
        </v-container>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        computed: {
            challanLink() {
                return this.$route.path + '/' + 'make-challans';
            },
            pricePerLoad() {
                return this.selectedEnterprise.pricePerLoad
            },
            name() {
                return this.selectedEnterprise.name
            },
            address() {
                return this.selectedEnterprise.address
            },

        },
        data: () => {
            return {
                selectedEnterprise: null
            }
        },
        created() {
            this.selectedEnterprise = this.$store.getters['enterprises/enterprises'].find((enterprise) => enterprise.id === this.id);
        }
    }
</script>

<style scoped>

</style>