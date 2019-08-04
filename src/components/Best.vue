<template>
    <div class="best">
        <div class="content">
            <div class="wrap__title flx jcsb aib">
                <div class="general__title">Choose Best Chef</div>
                <div class="best__more"><a href="#">View All Monts ></a></div>
            </div>
            <carousel :perPageCustom="[[768, 3], [1024, 4]]">
                <slide>
                    <div class="slider__item">
                        <a href="#">
                            <div class="slider__image slider__icon1">
                                <div class="slider__youtube"></div>
                            </div>
                        </a>
                        <div class="slider__content">
                            <a href="#">
                                <div class="wrap__sliderTitle">
                                    <div class="slider__name">Pummy</div>
                                </div>
                            </a>
                            <div class="slider__mainTitle">Contary to popular belief, Lorem Ipsum</div>
                            <div class="wrap__price flx">
                                <div class="slider__price">$100</div>
                                <div class="slider__priceDescr">Per person / Free cancellation</div>
                            </div>
                            <div class="wrap__star flx aic">
                                <div class="star__list flx">
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                </div>
                                <div class="star__descr">276 / Supermont</div>
                            </div>
                            <div class="line"></div>
                            <BestInfo/>
                        </div>
                    </div>
                </slide>
                <slide>
                    <div class="slider__item">
                        <a href="#">
                            <div class="slider__image slider__icon2">
                                <div class="slider__youtube"></div>
                            </div>
                        </a>
                        <div class="slider__content">
                            <div class="wrap__sliderTitle flx jcsb">
                                <a href="#"><div class="slider__name">Sular</div></a>
                                <a href="#">
                                    <div class="slider__location flx">
                                        <div class="slider__location-icon"></div>
                                        <div class="slider__location-text">Los Angeles, CA</div>
                                    </div>
                                </a>
                            </div>
                            <div class="slider__mainTitle">Contary to popular belief, Lorem Ipsum</div>
                            <div class="wrap__price flx">
                                <div class="slider__price">$200</div>
                                <div class="slider__priceDescr">Per 2 person / Free cancellation</div>
                            </div>
                            <div class="wrap__star flx aic">
                                <div class="star__list flx">
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                </div>
                                <div class="star__descr">102 / Mont</div>
                            </div>
                            <div class="line"></div>
                            <BestInfo/>
                        </div>
                    </div>
                </slide>
                <slide>
                    <div class="slider__item">
                        <a href="#">
                            <div class="slider__image slider__icon3">
                                <a href="#">
                                    <div class="slider__certified"></div>
                                </a>
                            </div>
                        </a>
                        <div class="slider__content">
                            <div class="wrap__sliderTitle flx jcsb">
                                <a href="#"><div class="slider__name">Contary</div></a>
                            </div>
                            <div class="slider__mainTitle">Contary to popular belief, Lorem Ipsum</div>
                            <div class="wrap__price flx">
                                <div class="slider__price">$120</div>
                                <div class="slider__priceDescr">Per 2 person / Free cancellation</div>
                            </div>
                            <div class="wrap__star flx aic">
                                <div class="star__list flx">
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                </div>
                                <div class="star__descr">15 / Mont</div>
                            </div>
                            <div class="line"></div>
                            <BestInfo/>
                        </div>
                    </div>
                </slide>
                <slide>
                    <div class="slider__item">
                        <a href="#">
                            <div class="slider__image slider__icon4"></div>
                        </a>
                        <div class="slider__content">
                            <div class="wrap__sliderTitle flx jcsb">
                                <a href="#"><div class="slider__name">Pastry</div></a>
                            </div>
                            <div class="slider__mainTitle">Contary to popular belief, Lorem Ipsum</div>
                            <div class="wrap__price flx">
                                <div class="slider__price">$2300</div>
                                <div class="slider__priceDescr">Per 21 Person / Free cancellation</div>
                            </div>
                            <div class="wrap__star flx aic">
                                <div class="star__list flx">
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                </div>
                                <div class="star__descr">6 / Mont</div>
                            </div>
                            <div class="line"></div>
                            <div class="best__info flx aic jcsb">
                                <div class="flx aic">
                                    <a href="#" class="flx aic">
                                        <div class="best__profile"></div>
                                        <div class="best__name">Ranemaster</div>
                                    </a>
                                </div>
                                <a href="#">
                                    <div class="best__like"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </slide>
                <slide>
                    <div class="slider__item">
                        <a href="#">
                            <div class="slider__image slider__icon5">
                                <div class="slider__youtube"></div>
                            </div>
                        </a>
                        <div class="slider__content">
                            <div class="wrap__sliderTitle flx jcsb">
                                <a href="#"><div class="slider__name">Pummy</div></a>
                                <a href="#">
                                    <div class="slider__location flx">
                                        <div class="slider__location-icon"></div>
                                        <div class="slider__location-text">Paris, France</div>
                                    </div>
                                </a>
                            </div>
                            <div class="slider__mainTitle">Excepteur sint occaecat cupidatat non peroident</div>
                            <div class="wrap__price flx">
                                <div class="slider__price">$10</div>
                                <div class="slider__priceDescr">Per person / Free cancellation</div>
                            </div>
                            <div class="wrap__star flx aic">
                                <div class="star__list flx">
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                </div>
                                <div class="star__descr">276 / Supermont</div>
                            </div>
                            <div class="line"></div>
                            <BestInfo/>
                        </div>
                    </div>
                </slide>
                <slide>
                    <div class="slider__item">
                        <a href="#">
                            <div class="slider__image slider__icon6">
                                <div class="slider__youtube"></div>
                            </div>
                        </a>
                        <div class="slider__content">
                            <div class="wrap__sliderTitle flx jcsb">
                                <a href="#"><div class="slider__name">Sorem</div></a>
                                <a href="#">
                                    <div class="slider__location flx">
                                        <div class="slider__location-icon"></div>
                                        <div class="slider__location-text">Los Angeles, CA</div>
                                    </div>
                                </a>
                            </div>
                            <div class="slider__mainTitle">Excepteur sint occaecat cupidatat non peroident</div>
                            <div class="wrap__price flx">
                                <div class="slider__price">$0</div>
                                <div class="slider__priceDescr">Free / Sponsor Henkelman</div>
                            </div>
                            <div class="wrap__star flx aic">
                                <div class="star__list flx">
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                </div>
                                <div class="star__descr">102 / Mont</div>
                            </div>
                            <div class="line"></div>
                            <div class="best__info flx aic jcsb">
                                <a href="#" class="flx aic">
                                    <div class="best__profile"></div>
                                    <div class="best__name">Manitu</div>
                                </a>
                                <a href="#">
                                    <div class="best__like"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </slide>
                <slide>
                    <div class="slider__item">
                        <a href="#">
                            <div class="slider__image slider__icon7"></div>
                        </a>
                        <div class="slider__content">
                            <div class="wrap__sliderTitle flx jcsb">
                                <a href="#"><div class="slider__name">Ginting</div></a>
                            </div>
                            <div class="slider__mainTitle">Excepteur sint occaecat cupidatat non peroident</div>
                            <div class="wrap__price flx">
                                <div class="slider__price">$50</div>
                                <div class="slider__priceDescr">Per 2 Person / Free cancellation</div>
                            </div>
                            <div class="wrap__star flx aic">
                                <div class="star__list flx">
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                </div>
                                <div class="star__descr">15 / Coock</div>
                            </div>
                            <div class="line"></div>
                            <div class="best__info flx aic jcsb">
                                <div class="flx aic">
                                    <a href="#" class="flx aic">
                                        <div class="best__profile"></div>
                                        <div class="best__name">Montmaster</div>
                                    </a>
                                </div>
                                <a href="#">
                                    <div class="best__like"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </slide>
                <slide>
                    <div class="slider__item">
                        <a href="#">
                            <div class="slider__image slider__icon8"></div>
                        </a>
                        <div class="slider__content">
                            <div class="wrap__sliderTitle flx jcsb">
                                <a href="#"><div class="slider__name">Pollege</div></a>
                            </div>
                            <div class="slider__mainTitle">Excepteur sint occaecat cupidatat non peroident</div>
                            <div class="wrap__price flx">
                                <div class="slider__price">$23</div>
                                <div class="slider__priceDescr">Per 2 Person / Free cancellation</div>
                            </div>
                            <div class="wrap__star flx aic">
                                <div class="star__list flx">
                                    <div class="star__item"></div>
                                    <div class="star__item"></div>
                                </div>
                                <div class="star__descr">6 / Mont</div>
                            </div>
                            <div class="line"></div>
                            <div class="best__info flx aic jcsb">
                                <div class="flx aic">
                                    <a href="#" class="flx aic">
                                        <div class="best__profile"></div>
                                        <div class="best__name">Blackmanry</div>
                                    </a>
                                </div>
                                <a href="#">
                                    <div class="best__like"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </slide>
            </carousel>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import BestInfo from './BestInfo.vue'

export default {
    components: {
        Carousel,
        Slide,
        BestInfo
    }
}
</script>

<style>
.slider__item {
    width: 266px;
    border: 1px solid #d9e1e7;
}
.slider__content {
    padding: 16px 16px 6px 16px;
}
.slider__image {
    width: 100%;
    height: 173px;
    padding: 10px;
}
.slider__youtube {
    width: 30px;
    height: 24px;
    background: url(../assets/best-youtube-icon.png);
    background-size: cover;
}
.slider__price {
    margin-right: 7px;
    color: #2aacb4;
}
.star__list {
    margin-right: 7px;
}
.star__item {
    width: 11px;
    height: 10px;
    background: url(../assets/best-star-icon.png);
}
.best .best__info {
    margin-top: 6px;
}
.best__profile {
    width: 34px;
    height: 34px;
    background: url(../assets/best-profile-icon.png);
    margin-right: 7px;
}
.best__status-normal {
    background: #5c676f;
    padding: 7px;
    margin-left: 15px;
    border-radius: 3px;
    font-size: 6px;
    color: #fff;
}
.best__status-pro {
    background: #fd3c65;
    border-radius: 3px;
    padding: 7px;
    font-size: 6px;
    color: #fff;
}
.best__winner {
    width: 15px;
    height: 20px;
    background: url(../assets/best-winner-icon.png);
}
.best__deal {
    width: 16px;
    height: 13px;
    background: url(../assets/best-deal-icon.png);
}
.best__like {
    width: 16px;
    height: 14px;
    background: url(../assets/best-like-icon.png);
    background-position: 0px 0px;
}
.best__like:hover {
    background-position: 16px 0px;
}
.slider__location-icon {
    width: 10px;
    height: 12px;
    margin-right: 5px;
    background: url(../assets/menu-location.png);
    background-size: cover;
}
.slider__certified {
    width: 38px;
    height: 38px;
    background: url(../assets/best-certified-icon.png);
    position: absolute;
    right: 20px;
    bottom: -10px;
}
/* Slider icons */
.slider__icon1 {
    background: url(../assets/best-icon1.png);
    background-size: cover;
}
.slider__icon2 {
    background: url(../assets/best-icon2.png);
    background-size: cover;
}
.slider__icon3 {
    background: url(../assets/best-icon3.png);
    background-size: cover;
    position: relative;
}
.slider__icon4 {
    background: url(../assets/best-icon4.png);
    background-size: cover;
}
/* Slider icons end */
</style>

