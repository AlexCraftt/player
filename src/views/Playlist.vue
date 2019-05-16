<template>
    <v-container grid-list-md v-if="playlist">
        <v-layout row class="hidden-sm-and-down">
            <v-flex xs6>
                <v-layout column>
                    <v-flex xs6>
                        <playlist-details :playlist="playlist"></playlist-details>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs6>
                <v-layout column>
                    <v-flex xs12 v-for="track in playlist.tracks" :key="track.id">
                        <v-list>
                            <v-list-tile>
                                <playlist-item :track="track"></playlist-item>
                            </v-list-tile>
                        </v-list>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
        <v-layout column class="hidden-md-and-up">
            <v-flex xs12>
                <v-layout>
                    <v-flex xs12>
                        <playlist-details :playlist="playlist"></playlist-details>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs12>
                <v-layout column>
                    <v-flex xs12 v-for="track in playlist.tracks" :key="track.id">
                        <v-list>
                            <v-list-tile>
                                <playlist-item :track="track"></playlist-item>
                            </v-list-tile>
                        </v-list>
                    </v-flex>
                </v-layout>
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