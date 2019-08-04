<template>
    <div class="basket">
        <div class="step__wrap">
            <div class="step__header">
                <div class="content">
                    <div class="step__list flx">
                        <div class="step__item">
                            <div class="step__icon step__compile">1</div>
                            <div class="step__title">Orders</div>
                            <div class="step__arrow"></div>
                        </div>
                        <div class="step__item">
                            <div class="step__icon">2</div>
                            <div class="step__title">Personal information</div>
                            <div class="step__arrow"></div>
                        </div>
                        <div class="step__item">
                            <div class="step__icon">3</div>
                            <div class="step__title">Confirm and Pay</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="general__title">My Basket / 42</div>
                <div class="header__basket flx aic jcsb">
                    <div class="basket__profile">
                        <div class="best__info flx aic jcsb">
                            <a href="#" class="flx aic">
                                <div class="best__profile"></div>
                                <div class="best__name">Valeron_Co</div>
                            </a>
                            <a href="#">
                                <div class="best__status">
                                    <div class="best__status-pro">Pro</div>
                                </div>
                            </a>
                            <a href="#">
                                <div class="best__winner"></div>
                            </a>
                            <a href="#">
                                <div class="best__deal"></div>
                            </a>
                            <a href="#">
                                <div class="best__like"></div>
                            </a>
                        </div>
                    </div>
                    <div class="header__basketInfo">
                        <a href="">Buy 5 Dishes, </a><span>Get 1 Free or 5% Off</span>
                    </div>
                </div>
                <div class="white__wrap">
                    <div class="basket__content">
                        <div class="basket__productList">
                            <div class="basket__productWrap flx aic jcsb">
                                <div class="basket__prof flx">
                                    <div class="basket__face">
                                        <div class="basket__icon"></div>
                                    </div>
                                    <div class="basket__titles">
                                        <div class="basket__links"><a href="">Dish / </a><span>Sweets</span></div>
                                        <div class="basket__title">L'LL Cook Delicious Pies and Great Cakes</div>
                                    </div>
                                </div>
                                <div class="basket__confirm">
                                    <div class="basket__confirmLogo"></div>
                                    <div class="basket__confitmTitle">Confirmed</div>
                                </div>
                                <div class="basket__numberItem flx">
                                    <label for="numberBusketItem">Dishes <br> Quantity</label>
                                    <input type="number" id="numberBusketItem" name="numberBusketItem" value="20" min="10" max="100">
                                </div>
                                <div class="basket__price flx fdc aic">
                                    <div class="basket__priceValue">$1950</div>
                                    <div class="basket__priceDesc">0.70% Discount</div>
                                </div>
                            </div>
                            <div class="basket__buttonWrap flx aic">
                                <div class="basket__buttons flx">
                                    <div class="basket__buttonSave">
                                        <div class="basket__buttonSaveIcon"></div>
                                        <div class="basket__buttonSaveTitle">Save</div>
                                    </div>
                                    <div class="basket__buttonRemove">
                                        <div class="basket__buttonRemoveIcon"></div>
                                        <div class="basket__buttonTitle">Remove</div>
                                    </div>
                                </div>
                                <div class="basket__buttonMore">
                                    <div v-on:click="showBasket = !showBasket">+ Addtitionall Information</div>
                                    <div v-if="showBasket" class="basket__addtitInfo">
                                        <div class="basket__popupWrap">
                                            <div class="basket__popupTitle">Write if you have allergic to any product in the dish and you want to replace it. <br> Wait for chef confirmation and make order.</div>
                                            <div class="basket__chooseList">
                                                <div class="basket__chooseAllegy">
                                                    <label for="">Allergy</label>
                                                    <select>
                                                        <option>I have not</option>
                                                        <option>I have</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="basket__productList">
                            <div class="basket__productWrap flx aic jcsb">
                                <div class="basket__prof flx">
                                    <div class="basket__face">
                                        <div class="basket__icon"></div>
                                    </div>
                                    <div class="basket__titles">
                                        <div class="basket__links"><a href="">Dish / </a><span>Sweets</span></div>
                                        <div class="basket__title">L'LL Cook Delicious Pies and Great Cakes</div>
                                    </div>
                                </div>
                                <div class="basket__confirm">
                                    <div class="basket__confirmLogo"></div>
                                    <div class="basket__confitmTitle">Confirmed</div>
                                </div>
                                <div class="basket__numberItem flx">
                                    <label for="numberBusketItem">Dishes <br> Quantity</label>
                                    <input type="number" id="numberBusketItem" name="numberBusketItem" value="20" min="10" max="100">
                                </div>
                                <div class="basket__price flx fdc aic">
                                    <div class="basket__priceValue">$1950</div>
                                    <div class="basket__priceDesc">0.70% Discount</div>
                                </div>
                            </div>
                            <div class="basket__buttonWrap flx aic">
                                <div class="basket__buttons flx">
                                    <div class="basket__buttonSave">
                                        <div class="basket__buttonSaveIcon"></div>
                                        <div class="basket__buttonSaveTitle">Save</div>
                                    </div>
                                    <div class="basket__buttonRemove">
                                        <div class="basket__buttonRemoveIcon"></div>
                                        <div class="basket__buttonTitle">Remove</div>
                                    </div>
                                </div>
                                <div class="basket__buttonMore">
                                    <a href="">+ Addtitionall Information</a>
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="basket__productList">
                            <div class="basket__productWrap flx aic jcsb">
                                <div class="basket__prof flx">
                                    <div class="basket__face">
                                        <div class="basket__icon"></div>
                                    </div>
                                    <div class="basket__titles">
                                        <div class="basket__links"><a href="">Dish / </a><span>Sweets</span></div>
                                        <div class="basket__title">L'LL Cook Delicious Pies and Great Cakes</div>
                                    </div>
                                </div>
                                <div class="basket__confirm">
                                    <div class="basket__confirmLogo"></div>
                                    <div class="basket__confitmTitle">Confirmed</div>
                                </div>
                                <div class="basket__numberItem flx">
                                    <label for="numberBusketItem">Dishes <br> Quantity</label>
                                    <input type="number" id="numberBusketItem" name="numberBusketItem" value="20" min="10" max="100">
                                </div>
                                <div class="basket__price flx fdc aic">
                                    <div class="basket__priceValue">$1950</div>
                                    <div class="basket__priceDesc">0.70% Discount</div>
                                </div>
                            </div>
                            <div class="basket__buttonWrap flx aic">
                                <div class="basket__buttons flx">
                                    <div class="basket__buttonSave">
                                        <div class="basket__buttonSaveIcon"></div>
                                        <div class="basket__buttonSaveTitle">Save</div>
                                    </div>
                                    <div class="basket__buttonRemove">
                                        <div class="basket__buttonRemoveIcon"></div>
                                        <div class="basket__buttonTitle">Remove</div>
                                    </div>
                                </div>
                                <div class="basket__buttonMore">
                                    <a href="">+ Addtitionall Information</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data: function() {
        return {
            showBasket: false,
            showEnter: false
        }
    }
}


</script>


<style>
.step__header {
    padding: 14px 0;
    border-top: 1px solid #e0e7ec;
    border-bottom: 1px solid #e0e7ec;
}
.step__item {
    display: flex;
    align-items: center;
}
.step__icon {
    background: #edeff0;
    width: 27px;
    height: 27px;
    border-radius: 50%;
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.step__item .step__compile {
    background: #505f6b;
    color: #fff;
}
.step__arrow {
    width: 5px;
    height: 7px;
    margin: 0 20px;
    background: url(../assets/step-arrow.png);
}

.basket__profile {
    width: 236px;
}
.header__basket {
    padding: 12px 24px;
    border-top: 1px solid #e2e3e4;
    border-left: 1px solid #e2e3e4;
    border-right: 1px solid #e2e3e4;
}
.basket__icon {
    width: 144px;
    height: 94px;
    background: blue;
}
.basket__titles {
    padding-left: 20px;
}
.basket__title {
    padding-top: 22px;
}
.basket__numberItem input {
    padding-left: 14px;
    margin-left: 14px;
}
.basket__priceDesc {
    padding-top: 12px;
}
.basket__buttonMore {
    margin-left: 46px;
}
.basket__buttonMore:hover {
    cursor: pointer;
}
.basket__buttonWrap {
    padding: 24px 0;
    position: relative;
}
.basket .line {
    margin-bottom: 24px;
}
.basket__addtitInfo {
    position: absolute;
    top: 67px;
    left: 0;
}
.basket__popupWrap {
    background: #fcfdfd;
    border: 1px solid #b8bcbf;
    padding: 34px 30px 24px 30px;
    border-radius: 3px;
}



.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
