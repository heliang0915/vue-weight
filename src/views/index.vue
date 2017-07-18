<template>
    <section>
        <p>{{data.list}}</p>
        <button @click="fetchIndexList">点击</button>
    </section>
</template>

<script>
    import {mapActions,mapGetters} from 'vuex';


//    import titleMixin from '../../mixin/title-mixin';
    export default{
//        mixins: [titleMixin],
//        title(){
//            return "哈哈";
//        },
        computed:{
            ...mapGetters({
                data:'getIndexList'
            })
        },
        //给服务器端使用的方法
        asyncData(store){
            console.log('asyncData...');
            store.dispatch('fetchIndexList')
        },
        mounted(){
            console.log('mounted....');
            this.fetchIndexList();
        },
        methods:{
            ...mapActions(['fetchIndexList'])
        },
        components:{
            WebContainer,
            Banner,
            HotStory,
            LimitFree,
            HotRank
        }
    }
</script>
