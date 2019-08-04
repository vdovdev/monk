<template>
    <div class="blog">
        <div class="content">
            <div class="wrap__title flx jcsb aib">
                <div class="general__title">Blog</div>
                <div class="best__more"><a href="#">View All Blogs ></a></div>
            </div>
            <div class="blog__wrap flx jcsb">
                <div class="blog__item flx fdc">
                    <div class="blog__icon blog__icon1"></div>
                    <div class="blog__title">Have You Ever Tasted Spicy Cookies? Spicy Mexican Hot Chocolate Cookies, this taste will never forget</div>
                    <div class="blog__info">
                        <div class="blog__info-profile"><a href="#">Natasha Lilis</a></div>
                        <div class="blog__info-date">Feburary 4, 2019</div>
                        <div class="blog__info-reviews">67, Reviews</div>
                    </div>
                </div>
                <div class="blog__item">
                    <div class="blog__icon blog__icon2"></div>
                    <div class="blog__title">How to Make Pot Pаmpkin Soup?</div>
                    <div class="blog__info">
                        <div class="blog__info-profile"><a href="#">Melisa Ponner</a></div>
                        <div class="blog__info-date">Feburary 1, 2019</div>
                    </div>
                </div>
                <div class="blog__item">
                    <div class="blog__icon blog__icon3"></div>
                    <div class="blog__title">King Cake Cupcakes Are the Perfect Way to Celebrate Mardi Gras.</div>
                    <div class="blog__info">
                        <div class="blog__info-profile"><a href="#">Dahif Coffman</a></div>
                        <div class="blog__info-date">January 28, 2019</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.blog {
    margin-bottom: 130px;
}
.blog__item {
    margin-right: 32px;
}
.blog__item:last-child {
    margin-right: 0;
}
.blog__title {
    padding: 33px 0;
}
.blog__info {
    display: flex;
}
.blog__info-date {
    padding: 0 20px;
}
.blog__icon {
    background-repeat: no-repeat;
    background-size: cover;
}
.blog__icon1 {
    width: 369px;
    height: 213px;
    background: url(../assets/blog-icon1.png);
}
.blog__icon2 {
    width: 369px;
    height: 213px;
    background: url(../assets/blog-icon2.png);
}
.blog__icon3 {
    width: 369px;
    height: 213px;
    background: url(../assets/blog-icon3.png);
}
</style>
