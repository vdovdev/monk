<template>
    <section class="pricing">
        <NavGetFood/>
        <div class="greyPage">
            <div class="content">
                <div class="general__title">Pricing</div>
            </div>
        </div>
        <div class="greyPage">
            <div class="content">
                <div class="wrapper__pricing flx jcsb">
                    <article>
                        <div class="white__papper">
                            <div class="price__dish">
                                <div class="price__dishItem flx">
                                    <label for="">Price Dish</label>
                                    <div>
                                        <select name="" id="">
                                            <option value="">For 1 Person</option>
                                            <option value="">For 2 Person</option>
                                            <option value="">For 3 Person</option>
                                        </select>
                                        <input type="value" value="$ 100" placeholder="$">
                                    </div>
                                </div>
                                <div class="price__dishItem flx">
                                    <label for="">Price Dish</label>
                                    <div>
                                        <select name="" id="">
                                            <option value="">For</option>
                                            <option value="">For 1 Person</option>
                                            <option value="">For 2 Person</option>
                                            <option value="">For 3 Person</option>
                                        </select>
                                        <input type="value" value="$ " placeholder="$">
                                    </div>
                                </div>
                                <div class="price__dishItem flx">
                                    <label for="">Price Dish</label>
                                    <div>
                                        <select name="" id="">
                                            <option value="">For</option>
                                            <option value="">For 1 Person</option>
                                            <option value="">For 2 Person</option>
                                            <option value="">For 3 Person</option>
                                        </select>
                                        <input type="value" value="$ " placeholder="$">
                                    </div>
                                </div>
                                <div class="price__dishItem flx">
                                    <label for="">Price Dish</label>
                                    <div>
                                        <select name="" id="">
                                            <option value="">For</option>
                                            <option value="">For 1 Person</option>
                                            <option value="">For 2 Person</option>
                                            <option value="">For 3 Person</option>
                                        </select>
                                        <input type="value" value="$ " placeholder="$">
                                    </div>
                                </div>
                                <div class="price__dishItem flx">
                                    <label for="">Price Dish</label>
                                    <div>
                                        <select name="" id="">
                                            <option value="">For</option>
                                            <option value="">For 1 Person</option>
                                            <option value="">For 2 Person</option>
                                            <option value="">For 3 Person</option>
                                        </select>
                                        <input type="value" value="$ " placeholder="$">
                                    </div>
                                </div>
                            </div>
                            <div class="price__more flx">
                                <label for="">More Persons</label>
                                <div>
                                    <div>
                                        <select name="" id="">
                                            <option value="25">25</option>
                                            <option value="">30</option>
                                            <option value="">35</option>
                                        </select>
                                        <input type="value" value="$ " placeholder="$ ">
                                    </div>
                                    <a href="">+ Add Dish Price</a>
                                </div>
                            </div>
                        </div>
                        <div class="wrap__nextSaveButt flx jcsb">
                            <div class="nextSave__backButt">
                                <router-link to='/gallery'>
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
    </section>
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
