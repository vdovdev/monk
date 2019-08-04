<template>
    <Header/>
</template>

<script>
import Vue from 'vue'
import Header from './components/Header.vue'

// register modal component
Vue.component('modal', {
  template: '#modal-template'
})

// start app
new Vue({
  el: '#app',
  data: {
    showModal: false
  }
})

export default {
    data () {
        return {
            
        }
    },
    components: {
        Header,
    }
}
</script>

<style>
/* General */
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}
.title__order {
    font-size: 18px;
    text-align: center;
    padding: 76px 0 33px 0;
}
.font__ptSans {
    font-family: 'PT Sans', sans-serif;
    font-weight: 400;
}
.boldText {
    font-weight: 500;
}
.white__papper {
    background: #fff;
}

.white__wrap {
    background: #fff;
    border: 1px solid #e2e3e4;
    padding: 26px 24px 44px 24px;
}
.main__bg {
    background: #00adb5;
    color: #fff;
}
.general__title {
    padding: 65px 0 30px 0;
}
.line {
    height: 1px;
    width: 100%;
    background: #e1e2e3;
}
.tac {
    text-align: center;
}
.page__descr {
    text-align: center;
    font-size: 14px;
    color: #404c56;
    max-width: 624px;
    margin: 0 auto;
}
.login__cart {
    max-width: 440px;
    text-align: center;
    margin: 0 auto;
    background: #fff;
}
.login__title {
    font-size: 20px;
    text-align: center;
    color: #161616;
    padding-bottom: 25px;
}
.wraper__cart {
    margin: 0 0 22px 0;
    padding: 30px 32px 34px 32px;
}
.wrap__login {
    background: #fff;
}
.login__remember {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.loginRemember {
    display: flex;
}
.or__line {
    text-align: center;
}
.social__button {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.capcha {
    text-align: center;
    padding-bottom: 20px;
}
.login__descr {
    font-size: 12px;
}
.login__page {
    background: #f4f5f7;
}
/* General end */
/* Flex */
.flx {
    display: flex;
}
.jcsb {
    justify-content: space-between;
}
.jcc {
    justify-content: center;
}
.jce {
    justify-content: end;
}
.aic {
    align-items: center;
}
.ais {
    align-items: stretch;
}
.aib {
    align-items: baseline;
}
.fdc {
    flex-direction: column;
}
.fdr {
    flex-direction: row;
}
.fww {
    flex-wrap: wrap;
}
/* Flex end */
/* Wraps */
.wrapper {
    max-width: 1763px;
    width: 100%;
    margin: 0 auto;
}
.content {
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
}
.greyPage {
    background: #f4f5f7;
}
/* Wraps end */

/**/
.getFoodImage {
    width: 266px;
    height: 173px;
    background: url(assets/getFoodImage.png);
}

.main__stepItem {
    margin-right: 36px;
    padding: 24px 0;
}
.main__stepItem:last-child {
    margin-right: 0;
}
</style>
