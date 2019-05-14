<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-container fluid>
                    <v-layout row>
                        <v-flex>
                            <v-text-field label="Поиск" v-model="Search">

                            </v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex v-for="playlist in playlists" :key="playlist.id" xs12 md8 sm10 offset-sm1 offset-md2>
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
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data(){
            return {
                Search: null
            }
        },
        computed: {
            playlists () {
                return this.$store.getters.getPlaylists
            }
        }
    }
</script>

