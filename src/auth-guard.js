import store from './store'

export default (to,from, next) => {
    if(store.getters.isUserAuthentificated) {
        next()
    } else {
        next('/signin')
    }
}