import {createApp} from 'vue';
import App from "@/App.vue";
import router from "@/router/index.js";
import store from "@/store/index.js";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA2scOXbDri_qoXoazCNfabCPQRIs0O8p4",
    authDomain: "weather-37759.firebaseapp.com",
    projectId: "weather-37759",
    storageBucket: "weather-37759.appspot.com",
    messagingSenderId: "508639575205",
    appId: "1:508639575205:web:29710f1d23a6ebfa56a14c"
};
const app = initializeApp(firebaseConfig);

createApp(App)
    .use(store)
    .use(router)
    .mount('#app');
