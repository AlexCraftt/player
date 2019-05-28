<template>
    <v-container fluid v-if="playlist">
        <v-layout row class="hidden-sm-and-down" justify-center>
            <v-flex md6>
                <playlist-details :playlist="playlist"></playlist-details>
            </v-flex>
            
            <v-flex md6 class="pt-3">                
                <v-container 
                id="scroll-target"
                style="height: 80vh"
                class="scroll-y">
                    <v-layout column v-scroll:#scroll-target="onScroll">
                        <v-list two-line>
                            <v-flex v-for="track in playlist.tracks" :key="track.id">                        
                                <v-list-tile>
                                    <playlist-item :track="track"></playlist-item>
                                </v-list-tile>
                                <v-divider></v-divider>
                            </v-flex>
                        </v-list>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
        <v-layout column class="hidden-md-and-up">
            <v-flex xs12>
                <playlist-details :playlist="playlist"></playlist-details>
            </v-flex>
            <v-flex xs12 class="pt-3">
                <v-container
                id="scroll-target listlg" 
                style="height: 50vh" 
                class="scroll-y">
                    <v-layout column v-scroll:#scroll-target="onScroll">
                        <v-list two-line>
                            <v-flex xs12 v-for="track in playlist.tracks" :key="track.id">                      
                                <v-list-tile>
                                    <playlist-item :track="track"></playlist-item>
                                </v-list-tile>
                                <v-divider></v-divider>                      
                            </v-flex>
                        </v-list>
                    </v-layout>
                </v-container>               
            </v-flex>
        </v-layout>       
    </v-container>    
</template>

<script>
    import Vue from 'vue'
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
