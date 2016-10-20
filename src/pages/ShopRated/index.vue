<script type="text/javascript">
    import './shoprated.scss';

    export default {
        data(){
            return {
            }
        },
        methods: {
            
        }
    }
</script>
<template>
    <page-view title="评价">
        <div class="page-content shop-rate">
            <section class="shop-rate-overview">
                <div class="col1"> 
                    <strong class="overall-score">4.8</strong> 
                    <div>综合评价</div> 
                    <small class="compare-rating">高于周边商家67.6%</small> 
                </div>
                <div class="col2">
                    <div class="score-block">
                        <span class="score-title">服务态度</span>
                        <span class="score-content">
                            <span class="score-value">4.8</span>
                        </span>
                    </div>
                    <div class="score-block">
                        <span class="score-title">菜品评价</span>
                        <span class="score-content">
                            <span class="score-value">4.8</span>
                        </span>
                    </div>
                    <div class="score-block"> 
                        <span class="score-title">送达时间</span> 
                        <small class="score-content"> <span>23分钟</span> </small> 
                    </div>
                </div>
            </section>
            <section class="rate-section">
                <div class="rate-tags"> 
                    <ul class="tag-list"> 
                        <li class="active"> 全部(601) </li>
                        <li> 满意(577) </li>
                        <li class="unsatisfied"> 不满意(24) </li>
                        <li> 送货快(46) </li>
                        <li> 味道好(37) </li>
                        <li> 服务不错(24) </li>
                        <li> 分量足(21) </li>
                        <li> 干净卫生(17) </li>
                        <li> 食材新鲜(12) </li>
                        <li> 物美价廉(11) </li> 
                    </ul> 

                </div>
                <ul class="rate-list-new">
                    <li v-for="n in 20">
                        <div class="rate">
                            <small class="rate-time">2016-10-10 20:19</small>
                            <img class="rate-avatar" src="https://fuss10.elemecdn.com/9/09/112c8dd9d0ac191a84f9288da497fjpeg.jpeg?imageMogr/quality/80/format/webp/">
                            <div class="rate-content">
                                <h3 class="rate-username">3*******5</h3>
                                <div></div>
                                <span class="rate-rating"></span>
                                <div class="rate-text" v-if="n%7 === 3">
                                    明明是鸡条套餐，给了我薯片，也不电话说明一下。。。懒得换了。。。但是印象不好了
                                </div>
                                <div v-if="n%6 === 4">  
                                    <ul class="item-list"> 
                                        <li>意式荤劲十足很牛堡套餐</li>
                                        <li>嫩香鸡块</li> 
                                    </ul>    
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    </page-view>
</template>
