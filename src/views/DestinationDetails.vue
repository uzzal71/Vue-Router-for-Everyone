<template>
    <section class="destination">
        <h2>{{ destination.name }}</h2>
        <div class="destination-details">
            <img :src="require(`@/assets/${destination.imgage}`)" alt="destination.name" />
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            destinationId: this.$route.params.id
        }
    },
    computed: {
        destination() {
            return store.destinations.find(
                destination => destination.id === this.destinationId
            )
        }
    }
}
</script>