<template>
    <v-layout row>
        <v-flex xl1 lg2 md2 sm2 xs2 align-content-center>
            <v-btn fab flat @click="play" v-if="!playing">
                <v-icon large>
                    play_arrow
                </v-icon>
            </v-btn>
            <v-btn fab flat @click="pause" v-if="playing">
                <v-icon large>
                    pause
                </v-icon>
            </v-btn>
        </v-flex>
        <v-flex xs8 align-self-center>
            <v-layout column justify-space-between>
                <v-flex>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="track.title" class="font-weight-bold title"></v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="track.artist"></v-list-tile-title>
                    </v-list-tile-content>
                </v-flex>
            </v-layout>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs1 align-self-center>
            <div>
                <audio-player :sources="audioSources"></audio-player>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
import VueHowler from 'vue-howler'
import AudioPlayer from './AudioPlayer'
    export default {
        props: {
            "track": {
                type: Object,
                required: true
            }
        },
        components: {
            AudioPlayer
        },
        data () {
            return {
                playing: false,
                audioSources: ["https://firebasestorage.googleapis.com/v0/b/player-ff8d9.appspot.com/o/tracks%2Fprimavera.mp3?alt=media&token=9153b841-2b1c-48fc-8ca7-564e21c5a39b"],
                html5: true,
                xhrWithCredentials: true
            }
        },

        methods: {
            play() {
                return VueHowler.play
            },
            pause() {
                return VueHowler.pause
            },
            getFile() {
                return track.file
                console.log(getFile())
            }
        }
    }
</script>
