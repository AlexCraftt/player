export default {
    state: {
        playlists: [
            {
                id: 'aaaaaa',
                title: 'Playlist 1',
                imageId: 'iaaaaa',
                plailistItems: 10,
                tracks: [
                    {
                        id: 'taaa',
                        title: 'track 1',
                        artist: 'Artist 1'
                    },
                    {
                        id: 'tyaa',
                        title: 'track 2',
                        artist: 'Artist 2'
                    },
                    {
                        id: 'tbaa',
                        title: 'track 3',
                        artist: 'Artist 3'
                    },
                    {
                        id: 'tcaa',
                        title: 'track 4',
                        artist: 'Artist 4'
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
                        title: 'track 1',
                        artist: 'Artist 1'
                    },
                    {
                        id: 'tyaa',
                        title: 'track 2',
                        artist: 'Artist 2'
                    },
                    {
                        id: 'tbaa',
                        title: 'track 3',
                        artist: 'Artist 3'
                    },
                    {
                        id: 'tcaa',
                        title: 'track 4',
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
                        title: 'track 1',
                        artist: 'Artist 1'
                    },
                    {
                        id: 'tyaa',
                        title: 'track 2',
                        artist: 'Artist 2'
                    },
                    {
                        id: 'tbaa',
                        title: 'track 3',
                        artist: 'Artist 3'
                    },
                    {
                        id: 'tcaa',
                        title: 'track 4',
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