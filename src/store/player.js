export default {
    state: {
        playlists: [
            {
                id: 'aaaaaa',
                title: 'Понравившиеся мелодии из фильмов',
                imageId: 'iaaaaa',
                plailistItems: 10,
                tracks: [
                    {
                        id: 'aaa',
                        title: 'Like a Stone',
                        artist: 'Audioslave',
                        time: '7:12'
                    },
                    {
                        id: 'aab',
                        title: 'Basket Case',
                        artist: 'Green Day',
                        time: '4:49'
                    },
                    {
                        id: 'aac',
                        title: 'Billy and Bonnie',
                        artist: 'Стив Эрл',
                        time: '6:34'
                    },
                    {
                        id: 'aad',
                        title: 'Feeling Good',
                        artist: 'Nina Simone',
                        time: '7:11'
                    },
                    {
                        id: 'aae',
                        title: 'Take Five',
                        artist: 'Дейв Брубек',
                        time: '3:15'
                    },
                    {
                        id: 'aaf',
                        title: 'Boots',
                        artist: 'The Dead South',
                        time: '6:57'
                    },
                    {
                        id: 'aag',
                        title: 'Like a Stone',
                        artist: 'Audioslave',
                        time: '7:12'
                    },
                    {
                        id: 'aah',
                        title: 'Basket Case',
                        artist: 'Green Day',
                        time: '4:49'
                    },
                    {
                        id: 'aai',
                        title: 'Billy and Bonnie',
                        artist: 'Стив Эрл',
                        time: '6:34'
                    },
                    {
                        id: 'aaj',
                        title: 'Feeling Good',
                        artist: 'Nina Simone',
                        time: '7:11'
                    },
                    {
                        id: 'aak',
                        title: 'Take Five',
                        artist: 'Дейв Брубек',
                        time: '3:15'
                    },
                    {
                        id: 'aal',
                        title: 'Boots',
                        artist: 'The Dead South',
                        time: '6:57'
                    }
                    
                ]
            },
            {
                id: 'baaaaa',
                title: 'Playlist 2',
                imageId: 'ibaaaa',
                plailistItems: 10,
                tracks: [
                    {
                        id: 'taaa',
                        title: 'Track 1',
                        artist: 'Artist 1'
                    },
                    {
                        id: 'tyaa',
                        title: 'Track 2',
                        artist: 'Artist 2'
                    },
                    {
                        id: 'tbaa',
                        title: 'Track 3',
                        artist: 'Artist 3'
                    },
                    {
                        id: 'tcaa',
                        title: 'Track 4',
                        artist: 'Artist 4'
                    }
                ]
            },
            {
                id: 'caaaaa',
                title: 'Playlist 3',
                imageId: 'icaaaa',
                plailistItems: 10,
                tracks: [
                    {
                        id: 'taaa',
                        title: 'Track 1',
                        artist: 'Artist 1'
                    },
                    {
                        id: 'tyaa',
                        title: 'Track 2',
                        artist: 'Artist 2'
                    },
                    {
                        id: 'tbaa',
                        title: 'Track 3',
                        artist: 'Artist 3'
                    },
                    {
                        id: 'tcaa',
                        title: 'Track 4',
                        artist: 'Artist 4'
                    }
                ]
            }
        ]
    },

    mutations: {
        SET_PLAYLISTS(state, payload) {
            state.playlists = payload
        }
    },

    actions: {
        SET_PLAYLISTS(state, payload){
            state.playlists = payload
        }
    },

    getters: {
        getPlaylists: (state) => state.playlists
    }
}