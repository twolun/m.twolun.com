<script type="text/javascript">
    import './components/shopnodata.scss';
    import nofood from '../htmlImg/no-food.png';
    export default {
        data(){
            return {
                nofood: metadata.host + nofood
            }
        }
    }
</script>
<template>
    <div class="menuview-nodata">
        <img :src="nofood">
        <p>没有商品</p>
        <p>该商家还未上传商品</p>
    </div>
</template>
