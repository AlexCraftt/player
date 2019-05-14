<template>
    <v-container grid-list-md>

    </v-container>
</template>

<script>
    export default {
        props: {
            'id': {
                type: String,
                required: true
            }
        },
        computed: {
            playlist(){
                return this.$store.getters.getPlaylists.find(p => p.id == this.id)
            }
        }
    }
</script>