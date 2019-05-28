<template>
    <v-footer fixed app color="indigo darken-3" height="72">
        <v-layout column>
            <v-flex xs12>
                <v-progress-linear
                    class="my-0"
                    height="5"
                    color="red darken-4"
                    value="15"
                ></v-progress-linear>
            </v-flex>
            <v-flex xs12>
                <!-- Для больших экранов -->
                <v-layout row justify-space-around align-center class="hidden-md-and-down">
                    <v-flex md4 lg3>
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
                    <v-flex lg5 xl4>
                        <v-layout row justify-start align-center>
                            <v-flex class="px-4">
                                <v-img 
                                    src="https://i.ytimg.com/vi/OHZZuO2vY50/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3lsHGuz4qk22UCmxv6MnDXaRl6-BQ"
                                    height="50" 
                                    width="50" 
                                    >
                                </v-img>
                            </v-flex>
                            <v-flex lg9 xl10>
                                <v-layout column>
                                    <v-flex>
                                        <div class="subheading white--text text-no-wrap">What I Like About You (Acoustic) (feat. Theresa Rex)</div>
                                        <div class="body-2 white--text">Jonas Blue</div>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex lg2 xl2>
                                <v-layout row nowrap>
                                    <v-flex lg4 class="mr-4">
                                        <v-btn fab flat dark class="mx-0 my-0">
                                            <v-icon>
                                                thumb_up_alt
                                            </v-icon>
                                        </v-btn>
                                    </v-flex>
                                    <v-flex lg4 class="mr-4">
                                        <v-btn fab flat dark class="mx-0 my-0">
                                            <v-icon>
                                                thumb_down_alt
                                            </v-icon>
                                        </v-btn>
                                    </v-flex>
                                    <v-flex lg4>
                                        <v-btn fab flat dark class="mx-0 my-0">
                                            <v-icon>
                                                more_vert
                                            </v-icon>
                                        </v-btn>
                                    </v-flex>
                                </v-layout>                               
                            </v-flex>
                        </v-layout>                        
                    </v-flex>
                    <v-flex lg1 xl1>
                        <v-layout row justify-end align-center>
                            <v-flex lg4 class="mr-1">
                                <v-btn fab flat dark class="mx-0 my-0">
                                    <v-icon>
                                        volume_up
                                    </v-icon>
                                </v-btn>
                            </v-flex>
                            <v-flex lg4 class="mr-1">
                                <v-btn fab flat dark class="mx-0 my-0">
                                    <v-icon>
                                        repeat
                                    </v-icon>
                                </v-btn>
                            </v-flex>
                            <v-flex lg4 class="mr-1">
                                <v-btn fab flat dark class="mx-0 my-0">
                                    <v-icon>
                                        shuffle
                                    </v-icon>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
                <!-- Для маленьких экранов -->
                <v-layout row align-center justify-space-around class="hidden-lg-and-up">
                    <v-flex xs5>
                        <v-btn fab flat dark class="mx-0 px-0">
                            <v-icon small>
                                skip_previous
                            </v-icon>
                        </v-btn>
                        <v-btn fab flat dark class="mx-0 px-0">
                            <v-icon>
                                play_arrow
                            </v-icon>
                        </v-btn>
                        <v-btn fab flat dark class="mx-0 px-0">
                            <v-icon small>
                                skip_next
                            </v-icon>
                        </v-btn>
                    </v-flex>
                    <v-flex xs6>
                        <v-layout column>
                            <v-flex>
                                <div class="body-2 white--text">What I Like About You (Acoustic) (feat. Theresa Rex)</div>
                                <div class="body-3 white--text">Jonas Blue</div>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex xs1 class="mr-3">
                        <v-btn fab flat dark class="mx-0 my-0">
                            <v-icon>
                                more_vert
                            </v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-footer>
</template>

<script>
    export default {
        data () {
            return {
                props: {
                    file: {
                        type: String,
                        default: null
                    },
                    
                }
            }
        }
    }
</script>
