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
                            <v-icon x-large v-if="!playing || paused">
                                play_arrow
                            </v-icon>
                            <v-icon v-else>
                                pause
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
    const formatTime = second => new Date(second * 1000).toISOString().substr(11, 8);
    export default {
        props: {
            track_url: {
                type: String,
                default: null
            },
            autoPlay: {
                type: Boolean,
                default: false
            },
            ended: {
                type: Function,
                default: () => {}
            },
            canPlay: {
                type: Function,
                default: () => {}
            }
        },

        data () {
            return {
                firstPlay: true,
                isMuted: false,
                loaded: false,
                playing: false,
                paused: false,
                playProgress: 0,
                currentTime: '00:00:00',
                audio: undefined,
                totalDuration: 0
            }
        },

        computed: {
            duration: function () {
                return this.audio ? formatTime (this.totalDuration): ''
            }
        },

        methods: {
            setPosition () {
                this.audio.currentTime = parseInt(this.audio.duration / 100 * this.playProgress)
            },

            stop () {
                this.paused = this.playing = false
                this.audio.pause()
                this.audio.currentTime = 0
            },

            play () {
                if (this.playing) return
                this.paused = false
                this.audio.play()
                .then ( () => this.playing = true) /* _ () */
            },

            pause () {
                this.paused = !this.paused
                (this.paused) ? this.audio.pause() : this.audio.play()
            },

            mute () {
                this.isMuted = !this.isMuted
                this.audio.muted = this.isMuted
                this.volumeValue = this.isMuted ? 0 : 75
            },

            reload () {
                this.audio.load()
            },

            _handleLoaded: function () {
                if (this.audio.readyState >= 2) {
                    if (this.audio.duration === Infinity) {
                        // Fix duration for streamed audio source or blob based
                        // https://stackoverflow.com/questions/38443084/how-can-i-add-predefined-length-to-audio-recorded-from-mediarecorder-in-chrome/39971175#39971175
                        this.audio.currentTime = 1e101;
                        this.audio.ontimeupdate = () => {
                            this.audio.ontimeupdate = () => {}
                            this.audio.currentTime = 0
                            this.totalDuration = parseInt(this.audio.duration)
                            this.loaded = true;
                        }
                    } else {
                        this.totalDuration = parseInt(this.audio.duration)
                        this.loaded = true
                    }
                    if (this.autoPlay) this.audio.play()
                } else {
                    throw new Error('Failed to load sound file')
                }
            },

            _handlePlayingUI: function (e) {
                this.playProgress = this.audio.currentTime / this.audio.duration * 100
                this.currentTime = formatTime(this.audio.currentTime)
            },

            _handlePlayPause: function (e) {
                if (e.type === 'play' && this.firstPlay) {
                    this.audio.currentTime = 0;
                    if (this.firstPlay) {
                        this.firstPlay = false;
                    }
                }
                if (e.type === 'pause' && this.paused === false && this.playing === false) {
                    this.currentTime = '00:00:00'
                } 
            },

            _handleEnded () {
                this.paused = this.playing = false
            },

            init: function () {
                this.audio.addEventListener ('timeupdate', this._handlePlayingUI)
                this.audio.addEventListener ('loadeddata', this._handleLoaded)
                this.audio.addEventListener ('pause', this._handlePlayPause)
                this.audio.addEventListener ('play', this._handlePlayPause)
                this.audio.addEventListener ('ended', this._handleEnded)
            }
        },

        mounted () {
            this.audio = this.$refs.player
            this.init()
        },

        beforeDestroy () {
            this.audio.removeEventListener ('timeupdate', this._handlePlayingUI)
            this.audio.removeEventListener ('loadeddata', this._handleLoaded)
            this.audio.removeEventListener ('pause', this._handlePlayPause)
            this.audio.removeEventListener ('play', this._handlePlayPause)
            this.audio.removeEventListener ('ended', this._handleEnded)
        }
    }
</script>
