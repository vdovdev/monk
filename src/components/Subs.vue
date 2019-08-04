<template>
    <div class="content">
        <div class="subs">
            <div class="subs__title tac">Discover the Best Mont Mari on Foodstrove.</div>
            <div class="subs__descr tac">Sign Up to Receive Our Weekly Projects We Love Newsletter</div>
            <form action="POST">
                <div class="subs__write flx jcc aic ais">
                    <div class="subs__input">
                        <input type="text" placeholder="Enter email address">
                    </div>
                    <div class="subs__button">
                        <button>Subscribe</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style>
.subs {
    background: url(../assets/subscribe-bg.png);
    background-size: cover;
    padding: 76px 0 70px 0;
}
.subs__descr {
    padding-top: 34px;
    font-size: 9px;
}
.subs__write {
    padding-top: 50px;
}
.subs__input {
    margin-right: 15px;
}
.subs__input input {
    width: 474px;
    height: 58px;
    border-radius: 3px;
    border: 1px solid #e1e1e1;
    padding-left: 34px;
}
.subs__button button {
    background: #00adb5;
    color: #fff;
    border-radius: 3px;
    border: 1px solid #44c3c2;
    font-size: 9px;
    height: 100%;
    padding: 0 28px 0 28px;
}
</style>
