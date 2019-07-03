import Vue from 'vue'

export default {
    state: {
        playlists: [],
        tracks: []
    },

    mutations: {
        SET_PLAYLISTS (state, payload) {
            state.playlists = payload
        }
    },

    actions: {
        LOAD_PLAYLISTS ({commit}) {
            Vue.$db.collection('playlists')
            .get()
            .then(querySnapshot => {
                let playlists = []
                querySnapshot.forEach(s => {
                    const data = s.data()
                    let playlist = {
                        id: s.id,
                        title: data.title,
                        imageUrl: data.imageUrl
                    }

                    let tracks = []
                    if(data.tracks){
                        data.tracks.forEach(t => {
                            let track = {
                                id: t.id,
                                title: t.title,
                                artist: t.artist,
                                file: t.file,
                                howl: t.howl
                            }
                            tracks.push(track)
                        })
                    }

                    playlist.tracks = tracks

                    playlists.push(playlist)
                })
                commit('SET_PLAYLISTS', playlists)
            })
            // eslint-disable-next-line no-console
            .catch(error => console.log(error))
        }
    },

    getters: {
        getPlaylists: (state) => state.playlists
    },
    track (state) {
        return state.track
    }
}