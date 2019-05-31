<template>
    <v-card color="indigo" class="white--text">
        <v-container fluid>
            <v-layout row>
                <v-flex xs6>
                    <v-img :src="playlist.imageUrl"
                    height="200px"
                    min-width="200px"
                    >
                    </v-img>
                </v-flex>
                <v-flex sm12 align-self-start>
                    <v-card-title>
                        <div class="headline">{{ playlist.title }}</div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn fab flat class="white--text" :to="{name:'playlist', params:{id:playlist.id}}">
                            <v-icon style="font-size: 3em">play_arrow</v-icon>
                        </v-btn>
                        <v-btn fab flat class="white--text">
                            <v-icon style="font-size: 3em">playlist_add</v-icon>
                        </v-btn>                                    
                    </v-card-actions>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex sm12>
                    <div>Треков: {{ playlist.tracks.length }}</div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    export default {
        props:{
            "playlist": {
                type: Object,
                required: true
            }
        }
    }
</script>