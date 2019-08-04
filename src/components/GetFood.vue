<template>
    <div class="getFood">
        <NavGetFood/>
        <div class="greyPage">
            <div class="content">
                <div class="general__title">Title, Dish Type</div>
                <div class="wrapper__getFood flx jcsb">
                    <article>
                        <div class="warning flx aic">
                            <div class="warning__logo"></div>
                            <div class="warning__title">You did not complete "<b class="boldText">Events</b>". Please do it.</div>
                        </div>
                        <div class="white__papper">
                            <form action="action">
                                <div class="getFoodTitle">
                                    <label for="getFoodTitle">Dish Title</label>
                                    <input placeholder="This is your name dish. Use max 100 characters" maxlength="100" type="text">
                                </div>
                                <div class="getFoodType">
                                    <label for="getFoodType">Kitchen Type</label>
                                    <select name="" id="">
                                        <option value="">European</option>
                                        <option value="">Italian</option>
                                        <option value="">France</option>
                                    </select>
                                </div>
                                <div class="getFoodChef">
                                    <label for="getFoodChef">Type Chef</label>
                                    <select name="" id="">
                                        <option disabled value="">Your option</option>
                                        <option value="">One option</option>
                                        <option value="">Two option</option>
                                        <option value="">Three option</option>
                                    </select>
                                </div>
                                <div class="getFoodEvent flx">
                                    <label for="">Events</label>
                                    <div class="getFoodEventList">
                                        <p>
                                            <input type="checkbox" id="getFoodFamily">
                                            <label for="getFoodFamily">Family Meeting</label>
                                        </p>
                                        <p>
                                            <input type="checkbox" id="getFoodGrad">
                                            <label for="getFoodGrad">Graduation</label>
                                        </p>
                                        <p>
                                            <input type="checkbox" id="getFoodImpor">
                                            <label for="getFoodImpor">Important Guests</label>
                                        </p>
                                        <p>
                                            <input type="checkbox" id="getFoodJust">
                                            <label for="getFoodJust">Just Meeting</label>
                                        </p>
                                        <p>
                                            <input type="checkbox" id="getFoodNew">
                                            <label for="getFoodNew">New Year</label>
                                        </p>
                                        <p>
                                            <input type="checkbox" id="getFoodAnniv">
                                            <label for="getFoodAnniv">Anniversary</label>
                                        </p>
                                        <p>
                                            <input type="checkbox" id="getFoodSoul">
                                            <label for="getFoodSoul">For the Soul</label>
                                        </p>
                                        <p>
                                            <input type="checkbox" id="getFoodSome">
                                            <label for="getFoodSome">Something New</label>
                                        </p>
                                        <p>
                                            <input type="checkbox" id="getFoodBith">
                                            <label for="getFoodBith">Bithday Party</label>
                                        </p>
                                        <p>
                                            <input type="checkbox" id="getFoodWedd">
                                            <label for="getFoodWedd">Wedding</label>
                                        </p>
                                        <p>
                                            <input type="checkbox" id="getFoodChild">
                                            <label for="getFoodChild">Children's Holiday</label>
                                        </p>
                                        <p>
                                            <input type="checkbox" id="getFoodLovers">
                                            <label for="getFoodLovers">For Lovers</label>
                                        </p>
                                    </div>
                                </div>
                                <div class="getFoodIngredCost flx">
                                    <label for="getFoodIngredCost">Ingredients Cost</label>
                                    <div class="wrap__getFoodIngred">
                                        <input type="value" placeholder="$">
                                        <div class="getFoodIngredInfo flx">
                                            <p><input type="checkbox">Included in Dish Cost</p>
                                            <p><input type="checkbox">No</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="getFoodPlace flx">
                                    <label for="getFoodPlace">Cooking Place</label>
                                    <div class="flx">
                                        <p>
                                            <input type="checkbox" id="getFoodOn">
                                            <label for="getFoodOn">On Customer Kitchen</label>
                                        </p>
                                        <p>
                                            <input type="checkbox" id="getFoodIn">
                                            <label for="getFoodIn">In My Van</label>
                                        </p>
                                    </div>
                                </div>
                                <div class="getFoodPerson">
                                    <label for="getFoodPerson">Dish Per Quantity Person</label>
                                    <select name="" id="">
                                        <option value="">3</option>
                                        <option value="">6</option>
                                        <option value="">10</option>
                                    </select>
                                </div>
                                <div class="getFoodTable">
                                    <label for="GetFoodTable">Table Setting</label>
                                    <select name="" id="">
                                        <option value="">Yes</option>
                                        <option value="">No</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div class="getFoodButton flx">
                            <div class="getFoodSave">
                                <button>Save</button>
                            </div>
                            <div class="getFoodNext">
                                <button>Next</button>
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
.main__step {
    color: #8c969d;
}
.main__step .active {
    color: #151515;
}
.main__stepItem {
    padding-right: 24px;
}
.main__stepItem:last-child {
    padding-right: 0;
}
.warning {
    background: #ffe5e6;
    border: 1px solid #f4b2be;
    border-radius: 3px;
    padding: 24px 20px;
}
.warning__logo {
    width: 31px;
    height: 28px;
    margin-right: 10px;
    background: url(../assets/icon_warning.png);
}

.getFoodInfo {
    padding: 24px 26px 22px 26px;
}


.getFoodCityIcon {
    width: 10px;
    height: 12px;
    background: url(../assets/menu-location.png);
    background-size: cover;
}

/**
.getFoodInfo .best__info {
    
}
**/
</style>
