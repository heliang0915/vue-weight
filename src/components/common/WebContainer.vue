<template>
    <div class="wrap">
        <StHeader></StHeader>
        <div class="main">
            <div class="main-inner">
                <slot></slot>
            </div>
        </div>
        <StFooter></StFooter>
    </div>
</template>
<script>
    import StHeader from './StHeader';
    import StFooter from './StFooter';
    export default{
        components: {
            StHeader,
            StFooter
        }
    }
</script>