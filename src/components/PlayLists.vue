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
            <v-flex v-for="playlist in filteredPlaylists" :key="playlist.id" xs12 md8 sm10 offset-sm1 offset-md2>
                <playlist :playlist="playlist"></playlist>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Playlist from './PlayListsItem'
    export default {
        components: {
            Playlist
        },
        data(){
            return {
                Search: null
            }
        },
        computed: {
            playlists () {
                return this.$store.getters.getPlaylists
            },
            filteredPlaylists(){
                let playlists = this.playlists
                if(this.Search)
                    playlists = playlists.filter(p => 
                    p.title.toLowerCase().indexOf(this.Search.toLowerCase()) >=0)
                return playlists
            }
        }
    }
</script>

