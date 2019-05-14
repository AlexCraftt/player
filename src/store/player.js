export default {
    state: {
        playlists: [
            {
                id: 'aaaaaa',
                title: 'Playlist 1',
                imageId: 'iaaaaa',
                plailistItems: 10
            },
            {
                id: 'baaaaa',
                title: 'Playlist 2',
                imageId: 'ibaaaa',
                plailistItems: 10
            },
            {
                id: 'caaaaa',
                title: 'Playlist 3',
                imageId: 'icaaaa',
                plailistItems: 10
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