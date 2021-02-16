<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="10" class="mx-auto">
                    <v-row justify="end" class="pa-4">
                        <v-btn v-if="!isEnterprise" class="primary" to="/register"><v-icon left>mdi-plus</v-icon> Add your enterprise</v-btn>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
        <v-container v-if="hasEnterprises">
            <EnterpriseItem v-for="enterprise in Enterprises" :key="enterprise.id" :id="enterprise.id" :name="enterprise.name" :pricePerLoad="enterprise.pricePerLoad"  />
        </v-container>
        <h3 v-else>No enterprises found.</h3>
    </div>
</template>

<script>
import EnterpriseItem from '@/components/enterprises/EnterpriseItem'

export default {
    components: {
        EnterpriseItem
    }, 
    computed: {
        Enterprises() {
            return this.$store.getters['enterprises/enterprises'];
        },
        hasEnterprises() {
            return this.$store.getters['enterprises/hasEnterprises'];
        },
        isEnterprise() {
            return this.$store.getters['enterprises/isEnterprise']
        }
    }
}
</script>
