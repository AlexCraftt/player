<template>
    <v-container grid-list-md v-if="playlist">
        <v-layout row wrap>
            <v-flex xs12 md10 offset-sm1>
                <playlist-details :playlist="playlist"></playlist-details>
            </v-flex>
            <v-flex xs12 md10 offset-sm1 v-for="track in playlist.tracks" :key="track.id">
                <playlist-item :track="track"></playlist-item>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import PlaylistDetails from '../components/PlaylistDetails'
    import PlaylistItem from '../components/Track'
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
        },
        components: {
            PlaylistDetails,
            PlaylistItem
        }
    }
</script>