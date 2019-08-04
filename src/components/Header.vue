<template>
    <div>
        <header class="content header flx jcsb aic">
            <div class="header__logo flx aic">
                <a href="/">
                    <div class="logo"></div>
                </a>
                <div class="humburger"></div>
            </div>
            <div v-on:click="show = !show" class="pageList">
                <div class="pageListName">Select page</div>
                <div v-if="show" class="pageListItem flex">
                    <p>
                        <router-link to='/daymenuorder'>Day Menu Order</router-link>
                    </p>
                    <p>
                        <router-link to='/basket'>My Basket</router-link>
                    </p>
                    <p>
                        <router-link to='/getfood'>Get Food</router-link>
                    </p>
                    <p>
                        <router-link to='/gallery'>Gallery </router-link>
                    </p>
                    <p>
                        <router-link to='/pricing'>Pricing</router-link>
                    </p>
                    <p>
                        <router-link to='/fooddescr'>Description</router-link>
                    </p>
                    <p>
                        <router-link to='/faq'>FAQ</router-link>
                    </p>
                </div>
            </div>
            <div class="header__nav flex">
                <router-link to='/#'>Become a Coke</router-link>
                <router-link to='/register'>Help</router-link>
                <router-link to='/login'>Search</router-link>
                <router-link to='/login'>Log in</router-link>
                <router-link class="header__button" to='/login'>Sign up</router-link>
            </div>
        </header>
        <router-view />
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.header {
    height: 80px;
}
.logo {
    width: 36px;
    height: 40px;
    background: url(../assets/logo.png);
    margin-right: 20px;
}
.humburger {
    width: 21px;
    height: 14px;
    background: url(../assets/humburger.png);
}
.humburger:hover {
    cursor: pointer;
}
.header__nav a {
    margin-right: 30px;
}
.header__nav a:last-child {
    margin-right: 0;
}
.header__nav a:hover {
    color: #1990ff;
}
.header__button {
    padding: 12px 20px;
    border-radius: 3px;
    border: 1px solid #D6DFE5;
}
.header__nav .header__button:hover {
    background: #1990FF;
    color: #fff;
    border: 1px solid #1990FF;
}
.pageList {
    position: relative;
}
.pageList:hover {
    cursor: pointer;
    color: #1990ff;
}
.pageListItem {
    width: 100px;
    position: absolute;
    top: 30px;
    left: 0;
}
</style>

<script>
export default {
    name: 'app',
    data: function() {
        return {
            show: false,
            showEnter: false
        }
    }
}
</script>

<style>
.pageListItem {
    background: #fff;
}
.pageListItem p {
    padding: 5px 10px;
}
.pageListItem p:hover {
    background: #eee;
}
</style>
