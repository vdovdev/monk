<template>
    <div class="menu">
        <div class="content">
            <div class="menu__titles">
                <div class="main__title">Find Your Perfect Chef Cook</div>
                <div class="sub__title">For Your Party or Just Dinner </div>
            </div>
            <div class="menu__navigation flx jcsb aic ais">
                <div class="menu__nav flx ais aic">
                    <div class="wrap__cart">
                        <div class="nav__cart">
                            <div class="nav__item nav__location flx jcsb aic">
                                <div class="nav__info flx aic">
                                    <div class="nav__icon icon__location"></div>
                                    <div class="nav__text">Los Angeles</div>
                                </div>
                                <div class="nav__close"></div>
                            </div>
                        </div>
                    </div>
                    <div class="wrap__cart">
                        <div class="nav__cart">
                            <div class="nav__item nav__event flx aic">
                                <div class="nav__icon icon__event"></div>
                                <div class="nav__text">Events</div>
                            </div>
                        </div>
                    </div>
                    <div v-on:click="show = !show" class="wrap__cart">
                        <div  class="nav__cart">
                            <div class="nav__item nav__type flx aic">
                                <div class="nav__icon icon__type"></div>
                                <div class="nav__text">Type Chef</div>
                            </div>
                            <div v-if="show" class="nav__show-list">
                                <div class="nav__show-item">Universal Monk</div>
                                <div class="nav__show-item">Confection</div>
                                <div class="nav__show-item">Monkist</div>
                                <div class="nav__show-item">Parist</div>
                                <div class="nav__show-item">Finist</div>
                                <div class="nav__show-item">Mont / Ront</div>
                            </div>
                        </div>
                    </div>
                    <div class="wrap__cart">
                        <div class="nav__cart">
                            <div class="nav__item nav__date flx aic">
                                <div class="nav__icon icon__date"></div>
                                <div class="nav__info">
                                    <div class="nav__title">Dates</div>
                                    <div class="nav__calendar">21.02.19 - 02.02.19</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="menu__search"></div>
            </div>
            <div class="menu__popular">
                <div>Popular: <span><a href="#">Lorem,</a><a href="#">Dummy,</a><a href="#">Wenuning</a></span></div>
            </div>
        </div>
    </div>
</template>

<style>
.menu {
    background: url(../assets/menu-bg.png);
    background-size: cover;
    margin-bottom: 30px;
}
.menu__titles {
    color: #fff;
    padding-top: 188px;
}
.main__title {
    font-size: 25px;
    margin-bottom: 30px;
}
.menu__navigation {
    margin: 42px 0 30px 0;
    max-height: 80px;
}
.menu__nav {
    border-radius: 3px;
    max-height: 80px;
}
.wrap__cart {
    display: flex;
    align-items: stretch;
    border-right: 1px solid #e5e5e5;
    background: #fff;
}
.nav__item {
    padding: 0 15px 0 28px;
    height: 100%;
    width: 245px;
}
.nav__item:first-child {
    padding: 0 15px 0 18px;
}
.nav__item:hover {
    border-bottom: 2px solid black;
    padding-top: 2px;
    cursor: pointer;
}
.nav__icon {
    margin-right: 16px;
}
.menu__search {
    min-width: 35px;
    min-height: 35px;
    background: url(../assets/menu-search.png)no-repeat center center;
    background-color: #00adb5;
    border-radius: 3px;
    padding: 40px 45px;
}
.menu__popular {
    padding-bottom: 116px;
}
.nav__show-list {
    background: #fff;
    border: 2px solid #e5e5e5;
}
.nav__show-item {
    padding: 34px 37px;
}
.nav__show-item:hover {
    background: #ededed;
    cursor: pointer;
}
/* Icon for menu nav list */
.icon__location {
    width: 19px;
    height: 25px;
    background: url(../assets/menu-location.png);
}
.icon__event {
    width: 27px;
    height: 25px;
    background: url(../assets/menu-event.png);
}
.icon__type {
    width: 26px;
    height: 28px;
    background: url(../assets/menu-type.png);
}
.icon__date {
    width: 22px;
    height: 24px;
    background: url(../assets/menu-date.png);
}
.nav__close {
    width: 18px;
    height: 18px;
    background: url(../assets/menu-close.png);
}
/* Icon for menu nav list end */
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

