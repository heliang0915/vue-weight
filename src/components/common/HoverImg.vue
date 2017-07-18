<template>
    <div class="div-img">
        <a :href="link">
            <img :src="pic" alt="图片">
        </a>
    </div>
</template>
<script>
    export default{
      props:{
          pic:{
              type:String,
              required:true
          },
          link:{
              type:String,
              required:true
          }
      }
    }
</script>
<style>
    .div-img {
        width: 105px;
        height: 138px;
        border: 1px solid #ccc;
        overflow: hidden;
    }

    .div-img a {
        height: 100%;
        width: 100%;
        display: inline-block;
    }

    .div-img a img {
        position: relative;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        transform: scale(1);
        transition: transform .3s ease-out;
    }

    .div-img a img:hover {
        transform: scale(1.05);
    }
</style>