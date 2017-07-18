<!--
  动态滚动插件
  @params width:宽度 height：高度 lineHeight ：每一行的高度 interval：  间隔时间
-->
<template>
    <div class="move-container" :style="{width:width+'px',height:height+'px'}">
        <div ref="moveInner" :style="{marginTop:marginTop+'px'}">
            <slot></slot>
        </div>
    </div>
</template>
<style>
    .move-container{
        overflow: hidden;
        border: 1px solid #ccc;
    }
</style>
<script>
    export default{
        name:"auto-move",
        props:{
            width:{
                type:Number,
                default:200
            },
            height:{
                type:Number,
                default:200
            },
            lineHeight:{
                type:Number,
                default:24
            },
            interval:{
                type:Number,
                default:40
            }
        },
        data(){
            return {
                marginTop:0,
                timer:null
            }
        },
        mounted(){
            this.init();
        },
        methods:{
            init(){
                this.move();
                this.initEvent();
            },
            initEvent(){
                var _this=this;
                var container=_this.$refs.moveInner.children[0];
                var list= container.children;
                for(var i=0;i<list.length;i++){
                    var item=list[i];
                    item.style.lineHeight=_this.lineHeight+'px';
                }
                container.onmouseenter=function(){
                    clearInterval(_this.timer);
                }
                container.onmouseleave=function(){
                    _this.move();
                }
            },
            move(){
                var _this=this;
                var container=_this.$refs.moveInner.children[0];
                var list=  container.children;
                _this.timer=setInterval(function(){
                    _this.marginTop-=1;
                    var absVal=Math.abs(_this.marginTop);
                    if(_this.lineHeight<=absVal){
                        container.appendChild(list[0]);
                        _this.marginTop=0;
                    }
                },_this.interval);
            }
        }
    }
</script>