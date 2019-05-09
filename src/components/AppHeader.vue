<template>
    <div>
        <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
            <v-list class="mt-5">
                <v-list-tile v-for="(item, i) in menuItems" :key="`navdrawer${i}`" :to="item.route">
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>                    
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar app dark class="primary">
            <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
            <router-link to="/" tag="span" style="cursor: pointer">
                <v-toolbar-title><v-icon large>audiotrack</v-icon></v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat v-for="(item, i) in menuItems" :key="`menuitem${i}`" :to="item.route">
                    <v-icon v-html="item.icon"></v-icon>
                    {{ item.title }}
                </v-btn>
                <v-btn flat @click.prevent="signout" v-if="isUserAuthentificated">
                    <v-icon left>exit_to_app</v-icon>
                    Выход
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                drawer: false
            }
        },
        computed: {
            isUserAuthentificated(){
                return this.$store.getters.isUserAuthentificated
            },
            menuItems () {
                return this.isUserAuthentificated
                    ? [
                        {
                            icon: 'library_music',
                            title: 'Библиотека',
                            route: '/music_store'
                        },
                        {
                            icon: 'favorite_border',
                            title: 'Моя музыка',
                            route: '/mymusic'
                        }
                    ] :
                    [                                             
                        {
                            icon: 'input',
                            title: 'Войти',
                            route: '/signin'
                        },
                        {
                            icon: 'lock_open',
                            title: 'Зарегистрироваться',
                            route: '/signup'
                        }
                    ]
            }
        },
        methods: {
            signout () {
                this.$store.dispatch('SIGNOUT')
            }
        }
    }
</script>