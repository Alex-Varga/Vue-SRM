import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from './filters/currency.filter'
import localizeFilter from './filters/localize.filter'
import messagePlugin from '@/utils/message.plugin'
import Paginate from 'vuejs-paginate'
import Loader from '@/components/app/Loader.vue'
import tooltipDirective from './directives/tooltip.directive'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)
Vue.directive('tooltip', tooltipDirective)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)

firebase.initializeApp({
  apiKey: "AIzaSyDFiAipkw15fheXygcN4K1_hbBiMIQ4dSg",
  authDomain: "vue-srm-money.firebaseapp.com",
  databaseURL: "https://vue-srm-money-default-rtdb.firebaseio.com",
  projectId: "vue-srm-money",
  storageBucket: "vue-srm-money.appspot.com",
  messagingSenderId: "511632786373"
})

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
