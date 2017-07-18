<template>
    <div class="banner">
        <div class="banner-inner">
            <div class="banner-pic">
                <a href="/pc/pages/story_detail.html">
                    <img src="../../../assets/images/banner1.jpg">
                </a>
            </div>
            <ul class="banner-title-list">
                <li class="active">
                    <a href="#">甜宠军婚：重生农家辣媳</a>
                </li>
                <li>
                    <a href="#">甜宠军婚：重生农家辣媳</a>
                </li>
                <li>
                    <a href="#">甜宠军婚：重生农家辣媳</a>
                </li>
                <li>
                    <a href="#">甜宠军婚：重生农家辣媳</a>
                </li>
                <li>
                    <a href="#">甜宠军婚：重生农家辣媳</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>

</script>
<style>
    .banner {
        background: #FFF;
        height: 300px;
        margin-bottom: 20px;
        overflow: hidden;
        position: relative;
    }

    .banner .banner-inner {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -125px 0 0 -492px;
        border: 1px solid #ccc;
        height: 250px;
        width: 980px;
    }

    .banner .banner-inner .banner-pic {
        width: 749px;
        height: 100%;
        float: left;
        overflow: hidden;
    }

    .banner .banner-inner .banner-pic a {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .banner .banner-inner .banner-pic a img {
        position: absolute;
        top: 0;
        left: 0;
    }

    .banner .banner-inner .banner-title-list {
        width: 232px;
        height: 100%;
        float: right;
        margin-left: -2px;
    }

    .banner .banner-inner .banner-title-list li {
        padding: 17px 10px;
    }

    .banner .banner-inner .banner-title-list li.active {
        color: #FFF;
        background: #ff3955;
        position: relative;
    }

    .banner .banner-inner .banner-title-list li.active::before {
        content: '';
        position: absolute;
        top: 50%;
        left: -4px;
        margin-top: -4px;
        height: 8px;
        width: 8px;
        background: #ff3955;
        transform: rotate(45deg);
    }

    .banner .banner-inner .banner-title-list li.active a {
        color: #FFF;
    }

    .banner .banner-inner .banner-title-list li a {
        text-decoration: none;
        color: #1a1a1a;
        font-size: 14px;
    }
</style>