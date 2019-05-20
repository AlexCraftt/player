<template>
    <v-container grid-list-md fluid>
        <v-layout row wrap>
            <v-flex xs12>
                <v-container fluid>
                    <v-layout row justify-center>
                        <v-flex xs10>
                            <v-text-field label="Поиск" v-model="Search">

                            </v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex v-for="playlist in filteredPlaylists" :key="playlist.id" sm12 lg6>
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

