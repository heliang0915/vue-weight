<template>
    <div class="container hot">
        <div class="container-inner">

            <h3 class="channelName" v-if="isShow==false">热门小说</h3>

            <div class="recommend-title clearfix" v-else>
                <h3 class="channelName">分类推荐</h3>
                <div class="classify-list">
                    <ul>
                        <li class="active">仙侠奇缘1</li>
                        <li>仙侠奇缘1</li>
                        <li>仙侠奇缘1</li>
                        <li>仙侠奇缘1</li>
                        <li>仙侠奇缘1</li>
                        <li>仙侠奇缘1</li>
                    </ul>
                </div>

            </div>



            <ul class="hot-list">
                <li v-for="(item,index) in list">
                    <HoverImg  :key="index" :pic="item.pic" :link="item.link"></HoverImg>
                    <p>{{item.desc}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<style>
    .hot .container-inner .hot-list li, .recommend .container-inner .hot-list li {
        /*float: left;*/
        width: 105px;
        margin-right: 19px;
    }

    .hot .container-inner .hot-list li:nth-child(1), .recommend .container-inner .hot-list li:nth-child(1) {
        margin-left: 0;
    }

    .hot .container-inner .hot-list li p, .recommend .container-inner .hot-list li p {
        font-size: 12px;
        margin-top: 4px;
    }
    .hot-list{
        display: flex;
    }


    .recommend .recommend-title h3 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 16px;
    }

    .recommend .recommend-title {
        overflow: hidden;
        position: relative;
    }

    .recommend .recommend-title .classify-list {
        position: absolute;
        top: 0;
        left: 150px;
        overflow: hidden;
        font-size: 14px;
    }

    .recommend .recommend-title .classify-list ul li {
        float: left;
        padding: 0 10px;
        border-right: 1px solid #ccc;
        color: #262626;
        text-decoration: none;
        font-size: 12px;
        cursor: pointer;
        display: inline-block;
        font-size: 14px;
    }

    .recommend .recommend-title .classify-list ul li:hover {
        color: #ff3955 !important;
    }

    .recommend .recommend-title .classify-list ul li.active {
        color: #ff3955;
    }

    .recommend .recommend-title .classify-list ul li:nth-last-child(1) {
        border-right: 0;
    }
</style>
<script>
    import HoverImg from '../components/common/HoverImg';
    export default {

        props:{
            isShow:{
                type:Boolean,
                default:false
            }},
        data(){
            return {
                list: [
                    {
                        pic: "../../../assets/images/hot1.jpg",
                        link: "http://www.baidu.com",
                        desc: "描述1"
                    }, {
                        pic: "../../../assets/images/hot1.jpg",
                        link: "http://www.baidu.com",
                        desc: "描述2"
                    }, {
                        pic: "../../../assets/images/hot1.jpg",
                        link: "http://www.baidu.com",
                        desc: "描述3"
                    }, {
                        pic: "../../../assets/images/hot1.jpg",
                        link: "http://www.baidu.com",
                        desc: "描述1"
                    }, {
                        pic: "../../../assets/images/hot1.jpg",
                        link: "http://www.baidu.com",
                        desc: "描述4"
                    }, {
                        pic: "../../../assets/images/hot1.jpg",
                        link: "http://www.baidu.com",
                        desc: "描述4"
                    }, {
                        pic: "../../../assets/images/hot1.jpg",
                        link: "http://www.baidu.com",
                        desc: "描述4"
                    }, {
                        pic: "../../../assets/images/hot1.jpg",
                        link: "http://www.baidu.com",
                        desc: "描述4"
                    }]

            }
        },
        components: {
            HoverImg
        }
    }
</script>