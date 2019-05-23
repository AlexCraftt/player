<template>
    <v-container fluid v-if="playlist">
        <v-layout row class="hidden-sm-and-down" justify-center>
            <v-flex md6>
                <playlist-details :playlist="playlist"></playlist-details>
                <v-layout v-resize="onResize" column align-center justify-center style="color:red">
                    <v-subheader style="color:red" class="font-weight-bold title">Window Size</v-subheader>
                    {{ windowSize }}
                </v-layout>
            </v-flex>
            <v-flex md6 class="pt-3">
                <v-container 
                v-resize="onResize"
                id="scroll-target list-lg" 
                style="height: 75vh" 
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
                id="scroll-target" 
                style="height: 50vh" 
                class="scroll-y">
                    <v-layout column v-scroll:#scroll-target="onScroll">
                        <v-list two-line>
                            <!-- Блок, выводящий размеры окна /начало/ -->
                            <v-flex xs12>                      
                                <v-list-tile>
                                    <v-layout row>
                                        <v-flex xl1 lg2 md2 sm2 xs2 align-content-center>
                                            <v-btn fab flat>
                                                <v-icon large>
                                                    play_arrow
                                                </v-icon>
                                            </v-btn>
                                        </v-flex>
                                        <v-flex xs8 align-self-center>
                                            <v-layout column justify-space-between>
                                                <v-flex>
                                                    <v-list-tile-content>
                                                        <v-list-tile-title class="font-weight-bold title" style="color:red">Window Size</v-list-tile-title>
                                                    </v-list-tile-content>
                                                    <v-list-tile-content>
                                                        <v-list-tile-title style="color:red">{{ windowSize }}</v-list-tile-title>
                                                    </v-list-tile-content>
                                                </v-flex>
                                            </v-layout>
                                        </v-flex>
                                        <v-spacer></v-spacer>
                                        <v-flex xs1 align-self-center>
                                            <div>
                                                0:00
                                            </div>
                                        </v-flex>
                                    </v-layout>
                                </v-list-tile>
                                <v-divider></v-divider>                      
                            </v-flex>
                            <!-- Блок, выводящий размеры окна /окончание/ -->

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
    import PlaylistDetails from '../components/PlaylistDetails'
    import PlaylistItem from '../components/Track'
    export default {
        data: () => ({
            windowSize: {
                x: 0,
                y: 0
            }
        }),
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
        },

        methods: {
            onScroll (e) {
            this.offsetTop = e.target.scrollTop
            },
            onResize () {
                this.windowSize = { x: window.innerWidth, y: window.innerHeight }
            }
        },
        mounted () {
            this.onResize()
        }
    }
</script>

<style scoped>
    
</style>
