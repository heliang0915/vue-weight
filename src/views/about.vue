<template>
    <section>
        about
        <i></i>
        <img src="../../assets/images/banner1.jpg" alt="">

        <div  class="scroll">
            <ul v-scroll :style="{marginTop:marginTop+'px'}">
                <li>1111</li>
                <li>333</li>
                <li>333</li>
                <li>33</li>
                <li>4555</li>
                <li>666</li>
                <li>333</li>
                <li>333</li>
            </ul>
        </div>
    </section>
</template>

<style>
    .scroll{
        overflow: hidden;
        height:200px;
        width:400px;
        border:1px solid #ccc;
    }
    .scroll li{
        line-height: 24px;
    }
    i{
        background: url("../../assets/images/banner1.jpg") no-repeat;
        display: block;
    }
    i:after{
        width: 100px;
        height:100px;
        display: block;
        font-family: 'iconfont';
        content: "\e742";
        font-size:10px;
    }
</style>
<script>

    export default{
        data(){
         return({marginTop:0})
        },
        mounted(){
            console.log(this);
        },
        directives:{
            scroll:{
                bind:function(el,binding,vnode){

                     var item=el;
                     var lis= el.children;
                     var vm=vnode.context;

                     setInterval(()=>{
                         vm.marginTop-=1;
                     },100)
                }
            }
        }
    }
</script>