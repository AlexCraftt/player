import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import VuetifyConfirm from 'vuetify-confirm'
import 'vuetify/dist/vuetify.min.css'
import FirebaseConfig from './config/firebase'
import firebase from 'firebase'
import "firebase/firestore"

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.use(VuetifyConfirm, {
  buttonTrueText: 'Да',
  buttonFalseText: 'Нет',
  width: 500
})

const firebaseApp = firebase.initializeApp(FirebaseConfig)
const db = firebaseApp.firestore()
// db.settings({
//   timestampsInSnapshots: true
// });

Vue.$db = db

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    let vm = this
    firebase.auth().onAuthStateChanged(function(user) {
      vm.$store.dispatch ('STATE_CHANGED', user)
    })

    this.$store.dispatch('LOAD_PLAYLISTS')
  }
}).$mount('#app')
