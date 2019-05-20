<template>
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
                {{ track.time }}
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        props: {
            "track": {
                type: Object,
                required: true
            }
        }
    }
</script>
