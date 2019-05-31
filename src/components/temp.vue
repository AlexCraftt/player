data () {
            return {
                firstPlay: true,
                isMuted: false,
                loaded: false,
                playing: false,
                paused: false,
                playProgress: 0,
                currentTime: '00:00:00',
                totalDuration: 0
            }
        },

        computed: {
            duration: function () {
                return track ? formatTime (this.totalDuration): ''
            }
        },

        methods: {
            setPosition () {
                track.currentTime = parseInt(track.duration / 100 * this.playProgress)
            },

            stop () {
                this.paused = this.playing = false
                track.pause()
                track.currentTime = 0
            },

            play () {
                if (this.playing) return
                this.paused = false
                track.play()
                .then (() => this.playing = true)
            },

            pause () {
                this.paused = !this.paused;
                (this.paused) ? this.track.pause() : this.track.play()
            },

            mute () {
                this.isMuted = !this.isMuted
                this.track.muted = this.isMuted
                this.volumeValue = this.isMuted ? 0 : 75
            }
        }




// playlists: [

        //             {
        //                 id: 'aag',
        //                 title: 'Like a Stone',
        //                 artist: 'Audioslave',
        //                 time: '7:12',
        //                 link: '#'
        //             },
        //             {
        //                 id: 'aah',
        //                 title: 'Basket Case',
        //                 artist: 'Green Day',
        //                 time: '4:49',
        //                 link: '#'
        //             },
        //             {
        //                 id: 'aai',
        //                 title: 'Billy and Bonnie',
        //                 artist: 'Стив Эрл',
        //                 time: '6:34',
        //                 link: '#'
        //             },
        //             {
        //                 id: 'aaj',
        //                 title: 'Feeling Good',
        //                 artist: 'Nina Simone',
        //                 time: '7:11',
        //                 link: '#'
        //             },
        //             {
        //                 id: 'aak',
        //                 title: 'Take Five',
        //                 artist: 'Дейв Брубек',
        //                 time: '3:15',
        //                 link: '#'
        //             },
        //             {
        //                 id: 'aal',
        //                 title: 'Boots',
        //                 artist: 'The Dead South',
        //                 time: '6:57',
        //                 link: '#'
        //             }
                    
        //         ]
        //     },
        //     {
        //         id: 'baaaaa',
        //         title: 'Playlist 2',
        //         imageId: 'ibaaaa',
        //         plailistItems: 10,
        //         tracks: [
        //             {
        //                 id: 'taaa',
        //                 title: 'Track 1',
        //                 artist: 'Artist 1',
        //                 link: '#'
        //             },
        //             {
        //                 id: 'tyaa',
        //                 title: 'Track 2',
        //                 artist: 'Artist 2',
        //                 link: '#'
        //             },
        //             {
        //                 id: 'tbaa',
        //                 title: 'Track 3',
        //                 artist: 'Artist 3',
        //                 link: '#'
        //             },
        //             {
        //                 id: 'tcaa',
        //                 title: 'Track 4',
        //                 artist: 'Artist 4',
        //                 link: '#'
        //             }
        //         ]
        //     },
        //     {
        //         id: 'caaaaa',
        //         title: 'Playlist 3',
        //         imageId: 'icaaaa',
        //         plailistItems: 10,
        //         tracks: [
        //             {
        //                 id: 'taaa',
        //                 title: 'Track 1',
        //                 artist: 'Artist 1',
        //                 link: '#'
        //             },
        //             {
        //                 id: 'tyaa',
        //                 title: 'Track 2',
        //                 artist: 'Artist 2',
        //                 link: '#'
        //             },
        //             {
        //                 id: 'tbaa',
        //                 title: 'Track 3',
        //                 artist: 'Artist 3',
        //                 link: '#'
        //             },
        //             {
        //                 id: 'tcaa',
        //                 title: 'Track 4',
        //                 artist: 'Artist 4',
        //                 link: '#'
        //             }
        //         ]
        //     }
        // ]