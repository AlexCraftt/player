<template>
    <v-footer fixed app color="indigo darken-3" height="72">
        <!-- Для больших экранов -->
        <v-layout row justify-space-between class="hidden-sm-and-down">
            <v-flex sm5 md4 lg3>
               <v-btn fab flat dark>
                    <v-icon>
                        skip_previous
                    </v-icon>
                </v-btn>
                <v-btn fab flat dark>
                    <v-icon x-large>
                        play_arrow
                    </v-icon>
                </v-btn>
                <v-btn fab flat dark>
                    <v-icon>
                        skip_next
                    </v-icon>
                </v-btn>
                <span class="subtitle-1 white--text">
                    0:48 / 5:33
                </span>
            </v-flex>
        </v-layout>
        <!-- Для маленьких экранов -->
        <v-layout row justify-space-between class="hidden-md-and-up">
            <v-flex sm5>
               <v-btn fab flat dark class="mx-0">
                    <v-icon>
                        skip_previous
                    </v-icon>
                </v-btn>
                <v-btn fab flat dark class="mx-0">
                    <v-icon large>
                        play_arrow
                    </v-icon>
                </v-btn>
                <v-btn fab flat dark class="mx-0">
                    <v-icon class="">
                        skip_next
                    </v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
    </v-footer>
</template>

<script>
    export default {
        
    }
</script>