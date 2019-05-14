<template>
    <v-card color="info" class="white--text">
        <v-container fluid>
            <v-layout row>
                <v-flex xs4 md3>
                    <v-img src="https://i.ytimg.com/vi/OHZZuO2vY50/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3lsHGuz4qk22UCmxv6MnDXaRl6-BQ"
                    height="200px"
                    >
                    </v-img>
                </v-flex>
                <v-flex xs8 md9>
                    <v-card-title>
                        <div class="headline">{{ playlist.title }}</div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn fab flat class="white--text">
                            <v-icon large>play_circle_outline</v-icon>
                        </v-btn>
                        <v-btn fab flat class="white--text">
                            <v-icon large>playlist_add</v-icon>
                        </v-btn>                                    
                    </v-card-actions>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs12>
                    <div>Треков: {{ playlist.tracks.length }}</div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    export default {
        props: {
            'playlist': {
                type: Object,
                required: true
            }
        }
    }
</script>