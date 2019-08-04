<template>
    <div class="wrapper  login__page loginCart__wrapper">
        <div class="page__descr">You can use your account from social network Facebook or from your Google account to register. After registration, go to settings account and fill in the remaining fields.</div>
        <div class="wrap__login">
            <div class="wraper__cart">
                <div class="login__title">Create Your Account</div>
                <div class="social__button">
                    <div class="facebook__button">Facebook</div>
                    <div class="google__button">Google</div>
                </div>
                <div class="or__line">Or</div>
                <form>
                    <div class="register__form">
                        <div class="form__email">
                            <input type="text" placeholder="Email">
                        </div>
                        <div class="form__enterUser">
                            <input type="text" placeholder="Chef or Client?">
                        </div>
                        <div class="form__name">
                            <input type="text" placeholder="Name">
                        </div>
                        <div class="form__surname">
                            <input type="text" placeholder="Surname">
                        </div>
                        <div class="form__password">
                            <input type="text" placeholder="Password">
                        </div>
                        <div class="form__password">
                            <input type="text" placeholder="Confirm Password">
                        </div>
                        <div class="capcha">I'm don't robot!</div>
                        <div class="createAcc__button">
                            <button>Create Account</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="haveAcc">Already have an account? <a href="#">Sign in</a></div>
    </div>
</template>

<style>
.loginCart__wrapper {
    padding: 50px 0 100px 0;
}
.haveAcc {
    text-align: center;
    font-size: 14px;
}
.or__line {
    padding: 20px 0;
}
.wrap__login {
    margin: 0 auto;
    max-width: 440px;
}
.register__form input {
    height: 45px;
    width: 100%;
    padding: 0 0 0 15px;
    margin: 0 0 20px 0;
    border-radius: 3px;
    border: 1px solid #d8dbe0;
    font-size: 14px;
}
.createAcc__button button {
    background: #1990ff;
    border: none;
    border-radius: 3px;
    height: 48px;
    width: 100%;
    color: #fff;
}
</style>


<script>
</script>

