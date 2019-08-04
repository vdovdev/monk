// routes.js

import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Reset from './components/Reset.vue';
import Basket from './components/Basket.vue';
import GetFood from './components/GetFood.vue';
import Gallery from './components/Gallery.vue';
import Pricing from './components/Pricing.vue';
import FoodDescr from './components/FoodDescr';
import Faq from './components/Faq';
import NavGetMaster from './components/NavGetMaster';
import DayMenuOrder from './components/DayMenuOrder';

const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/reset', component: Reset },
    { path: '/basket', component: Basket },
    { path: '/getfood', component: GetFood },
    { path: '/gallery', component: Gallery },
    { path: '/pricing', component: Pricing },
    { path: '/fooddescr', component: FoodDescr },
    { path: '/faq', component: Faq },
    { path: '/navgetmaster', component: NavGetMaster },
    { path: '/daymenuorder', component: DayMenuOrder },
];

export default routes;