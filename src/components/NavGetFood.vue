<template>
    <div class="wrap__mainStep">
        <div class="line"></div>
        <div class="content">
            <div class="main__step flx">
                <div class="main__stepItem">
                    <router-link to='/getfood'>Title, Dish Type</router-link>
                </div>
                <div class="main__stepItem active">
                    <router-link to='/gallery'>Gallery </router-link>
                </div>
                <div class="main__stepItem">
                    <router-link to='/pricing'>Pricing</router-link>
                </div>
                <div class="main__stepItem">
                    <router-link to='/fooddescr'>Dish Description</router-link>
                </div>
                <div class="main__stepItem">
                    <router-link to='/faq'>FAQ</router-link>
                </div>
            </div>
        </div>
        <div class="line"></div>
    </div>
</template>
