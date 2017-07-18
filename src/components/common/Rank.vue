<template>
    <div class="rank-item">
        <h3>{{rankTitle}}</h3>
        <ul>
            <li v-for="(item,index) in dataSource" :class="(isRankFlag==true?(index>3?'':rankClass[index]):'')">
                <em>{{index+1}}</em>
                <a href="#">{{item.title}}</a>
            </li>
        </ul>
    </div>
</template>
<style>
    .rank-item {
        width: 25%;
        margin-top: 30px;
        float: left;
    }

    .rank-item h3 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .rank-item ul {
        padding-right: 25px;
    }

    .rank-item ul li {
        border-bottom: 1px solid #ccc;
        padding: 9px 0;
    }

    .rank-item ul li a {
        color: #1a1a1a;
        text-decoration: none;
        font-size: 14px;
        cursor: pointer;
        display: inline-block;
    }

    .rank-item ul li a:hover {
        color: #ff3955 !important;
    }

    .rank-item ul li em {
        display: inline-block;
        height: 18px;
        line-height: 18px;
        font-size: 13px;
        width: 18px;
        text-align: center;
        margin-right: 5px;
    }

    .rank-item ul li:nth-last-child(1) {
        border-bottom: 0px solid #ccc;
    }

    .rank-item ul .first em {
        background: #ff3955;
        color: #FFF;
    }

    .rank-item ul .second em {
        background: #e67225;
        color: #FFF;
    }

    .rank-item ul .three em {
        background: #e6bf25;
        color: #FFF;
    }
</style>
<script>
    export default{
        props:{
            rankTitle:{
                type:String,
                default:'此处为标题'
            },

            isRankFlag:{
                type:Boolean,
                default:false
            },
            dataSource:{
                type:Array,
                default:[]
            }

        },
        data(){
            return{
                rankClass:['first','second','three']
            }
        }
    }
</script>