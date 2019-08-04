<template>
    <section class="gallery">
        <NavGetFood/>
        <div class="greyPage">
            <div class="content">
                <div class="general__title">Gallery <span>/ Photo</span></div>
                <div class="wrapper__gallery flx jcsb">
                    <article class="content__gallery">
                        <div class="content">
                            <div class="white__papper">
                                <div class="toggleButt__photoVideo">
                                    <div class="toggle__photo flx">
                                        <div class="toggle__photoTitle">Photos</div>
                                        <div class="toggle__videoTitle">Video</div>
                                    </div>
                                    <div class="line"></div>
                                    <div class="gallery__count">2/12</div>
                                </div>
                                <div class="gallery__list flx fww">
                                    <div class="gallery__item">
                                        <div class="gallery__icon"></div>
                                        <div class="gallery__title">Primary Photo</div>
                                    </div>
                                    <div class="gallery__item">
                                        <div class="gallery__icon"></div>
                                        <div class="gallery__title">Primary Photo</div>
                                    </div>
                                    <div class="gallery__item">
                                        <div class="gallery__icon"></div>
                                        <div class="gallery__title">Primary Photo</div>
                                    </div>
                                    <div class="gallery__item">
                                        <div class="dragOrDropGallery flx aic jcc">Drag a Photo or <a href="">Browse</a></div>
                                    </div>
                                    <div class="gallery__item">
                                        <div class="gallery__addMore flx aic jcc">+ Add more Photo</div>
                                    </div>
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
.content__gallery {
    margin-right: 30px;
}
.gallery .white__papper  {
    padding: 0 25px;
}
.gallery__item {
    margin-right: 14px;
    margin-bottom: 30px;
}
.gallery__icon {
    width: 190px;
    height: 120px;
    background: grey;
}
.dragOrDropGallery {
    width: 190px;
    height: 120px;
    background: #f4f5f7;
}
.gallery__addMore {
    width: 190px;
    height: 120px;
}
</style>

