<template>
    <div class="wrapper login__page">
        <div class="wrap__login">
            <div class="wraper__cart">
                <div class="login__title">Welcome</div>
                <div class="social__button">
                    <div class="facebook__button">Facebook</div>
                    <div class="google__button">Google</div>
                </div>
                <div class="or__line">Or</div>
                <form>
                    <div class="register__form flex aic">
                        <div class="form__email">
                            <input type="text" placeholder="Email">
                        </div>
                        <div class="form__password">
                            <input type="text" placeholder="Password">
                        </div>
                        <div class="login__remember">
                            <div class="loginRemember">
                                <input type="checkbox">
                                <span>Remember me</span>
                            </div>
                            <div class="loginForgot">
                                <router-link to='/reset'>Forgot Your Password?</router-link>
                            </div>
                        </div>
                        <div class="createAcc__button">
                            <button>Sign In to Your Account</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
</style>
