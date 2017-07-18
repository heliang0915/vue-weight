<template>
    <div class="container">
        <div class="container-inner">
            <div class="ranks">
                <Rank v-for="(item,index) in ranks" :key="index" :dataSource="item.list" :isRankFlag="true" :rankTitle="item.title"></Rank>
            </div>
            <div class="side-ad">
                <img src="//qidian.qpic.cn/qidian_common/349573/199bd90d7fc7e2225d0e13f7a33704bd/0" alt="">
            </div>
        </div>
    </div>
</template>
<style>
    .ranks {
        margin-top: -30px;
        overflow: hidden;
    }
</style>
<script>
    import Rank from './common/Rank';
    export default{
        data(){
            return {
                ranks: [
                    {
                        title: "热销榜",
                        list: [{
                            link: "http://www.baidu.com",
                            title: "首席的独宠新娘"
                        },
                        {
                            link: "http://www.baidu.com",
                            title: "绝色狂医：魔神大人，轻点撩"
                        },

                        {
                            link: "http://www.baidu.com",
                            title: "绝色狂医：魔神大人，轻点撩"
                        },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },
                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            }]

                    },
                    {
                        title: "点击榜",
                        list: [{
                            link: "http://www.baidu.com",
                            title: "首席的独宠新娘"
                        },
                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },
                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            }]

                    },
                    {
                        title: "新书榜",
                        list: [{
                            link: "http://www.baidu.com",
                            title: "首席的独宠新娘"
                        },
                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },
                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            }]

                    },
                    {
                        title: "完本榜",
                        list: [{
                            link: "http://www.baidu.com",
                            title: "首席的独宠新娘"
                        },
                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },
                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            },

                            {
                                link: "http://www.baidu.com",
                                title: "绝色狂医：魔神大人，轻点撩"
                            }]
                    }
                ]
            }
        },
        components: {
            Rank
        }
    }
</script>