<template>
    <div>
        <section>
            enterprises
        </section>
        <section>
            <router-link to="/register">register as an enterprise</router-link>
        </section>
    </div>
</template>

<script>


export default { 
    computed: {
        hasEnterprises() {
            return this.$store.getters['enterprises/hasEnterprises']
        }
    }
}
</script>
