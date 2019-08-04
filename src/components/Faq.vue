<template>
    <div>
        <NavGetFood/>
        <div class="greyPage">
            <div class="content">
                <div class="general__title">FAQ</div>
            </div>
        </div>
        <div class="greyPage">
            <div class="content">
                <div class="flx jcsb">
                    <article>
                        <div class="white__papper">
                            <div>
                                <div>
                                    <label>Question</label>
                                    <input type="text">
                                </div>
                                <div class="jce">0 / 1500 max</div>
                            </div>
                            <div>
                                <div>
                                    <label>Answer</label>
                                    <input type="text">
                                </div>
                                <div>0 / 3500 max</div>
                            </div>
                            <div class="line"></div>
                            <div>
                                <a href="">+ Add FAQ for Customes</a>
                            </div>
                        </div>
                        <div class="wrap__nextSaveButt flx jcsb">
                            <div class="nextSave__backButt">
                                <router-link to='/getfood'>
                                    <div class="nextSave__backIcon"></div>
                                    <div class="nextSave__backTitle">Back</div>
                                </router-link>
                            </div>
                            <div class="getFoodButton flx">
                                <div class="getFoodSave">
                                    <button>Save</button>
                                </div>
                                <div class="getFoodNext">
                                    <button>Next</button>
                                </div>
                            </div>
                        </div>
                    </article>
                    <aside>
                        <div class="getFoodInfo white__papper">
                            <div class="getFoodImage"></div>
                            <div class="flx jcsb">
                                <div><a href="">D</a> / Type Chef</div>
                                <div class="flx aic">
                                    <div class="getFoodCityIcon"></div>
                                    <div>City</div>
                                </div>
                            </div>
                            <div class="getFoodInfoTitle">This is your name dish. Use max 100 characters</div>
                            <div class="getFoodCost flx">
                                <div class="getFoodCostItem">0$</div>
                                <div class="getFoodCostDescr">Per person / Free cancellation</div>
                            </div>
                            <div class="wrap__star flx aic">
                                <div class="star__list flx">
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                </div>
                                <div class="star__descr">0 / Superchef</div>
                            </div>
                            <div class="line"></div>
                            <BestInfo/>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BestInfo from './BestInfo.vue'
import NavGetFood from './NavGetFood.vue'

export default {
    data () {
        return {

        }
    },
    components: {
        BestInfo,
        NavGetFood
    }
}
</script>

<style>

</style>
