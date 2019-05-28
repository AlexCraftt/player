<template>
    <div>
        <v-card color="blue lighten-2" class="white--text">
            <v-layout row align-center>
                <v-flex xs1 align-self-center>
                    <v-btn fab dark flat>
                        <v-icon large>play_circle_outline</v-icon>
                    </v-btn>
                </v-flex>
                <v-flex xs11>     
                    <v-card-title primary-title class="title">{{ track.title }} - {{ track.artist }}</v-card-title>
                    <div>10:00</div>                 
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex xs12>
                    <v-progress-linear height="5" value="1"></v-progress-linear>
                </v-flex>
            </v-layout>
        </v-card>
    </div>
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