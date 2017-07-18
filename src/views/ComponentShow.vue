<template>
    <section>
        <auto-move :interval=100 :line-height=40>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
            </ul>
        </auto-move>
        <auto-move :interval=10 :line-height=140>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
            </ul>
        </auto-move>
    </section>
</template>
<script>
    import  AutoMove from '../components/AutoMove';
    export default{
        data(){
         return({marginTop:0})
        },
        mounted(){
            console.log(this);
        },
        components:{
            AutoMove
        }
    }
</script>