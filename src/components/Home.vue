<template>
    <div>
        <div class="wrapper">
            <Menu/>
            <CartList/>
            <Best/>
            <Well/>
            <DayMenu/>
            <Subs/>
            <Choose/>
            <Offer/>
            <Blog/>
            <Footer/>
        </div>
    </div>
</template>

<script>
import Best from './Best.vue'
import Blog from './Blog.vue'
import CartList from './CartList.vue'
import Choose from './Choose.vue'
import Footer from './Footer.vue'
import Header from './Header.vue'
import Menu from './Menu.vue'
import Offer from './Offer.vue'
import Subs from './Subs.vue'
import Well from './Well.vue'
import DayMenu from './DayMenu.vue'

export default {
    data () {
        return {

        }
    },
    components: {
        Best,
        Blog,
        CartList,
        Choose,
        Footer,
        Header,
        Menu,
        Offer,
        Subs,
        Well,
        DayMenu,
    }
}
</script>

<style>

</style>
