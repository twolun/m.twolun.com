<script type="text/javascript">
    import './components/shopactivity.scss';
    export default {
        data(){
            return {
            }
        },
        methods: {
            handleCloseShopActivity: function(){
                this.$dispatch('close-shop-activity', 'close')
            }
        }
    }
</script>
<template>
    <div class="vue-wrapper">  
        <div class="content"> 
            <div class="shopheader-noticemodal"> 
                <h2 class="shopheader-noticemodal-name">汉堡王（兆丰店）</h2> 
                <h2> 
                    <div class="shopheader-noticemodal-rating"> 

                    </div> 
                </h2> 
                <h3>
                    <span>优惠信息</span></h3> 
                    <ul class="shopheader-activity"> 
                        <li> 
                            <div class="activity-wrap wrap"> 
                                <i class="activity-icon" style="color: rgb(255, 255, 255); border-color: rgb(240, 115, 115); background-color: rgb(240, 115, 115);"> 减 </i> 
                                <span class="activity-description"> 在线支付满35减4，满68减10 </span> 
                            </div> 
                        </li>
                        <li> 
                            <div class="activity-wrap wrap"> 
                                <i class="activity-icon" style="color: rgb(255, 255, 255); border-color: rgb(241, 136, 79); background-color: rgb(241, 136, 79);"> 红 </i> 
                                <span class="activity-description">         
                                    汉堡王红火十足双人餐，红到年底！每份订单只享受一份优惠价格 
                                </span> 
                            </div> 
                        </li> 
                    </ul> 
                    <h3>
                        <span>商家公告</span>
                    </h3> 
                    <div class="shopheader-noticemodal-notice"> 汉堡王（兆丰店）</div> 
                </div> 
                <div class="shopheader-noticemodal-close"
                    v-touch:tap="handleCloseShopActivity"
                > 
                    X
                </div> 
            </div>
        </div>
    </div>
</template>
