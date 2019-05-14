<template>
    <div>
        <v-card color="blue accent-4" class="white--text">
            <v-card-title primary-title class="title">{{ track.title }} - {{ track.artist }}</v-card-title>
        </v-card>
    </div>
</template>

<script>
    export default {
        props: {
            "track": {
                type: Object,
                required: true
            }
        }
    }
</script>