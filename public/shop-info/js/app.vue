<script type="text/javascript">
    import './components/shopinfo.scss';
    // import { pageInit } from './store/actions';


    export default {
        data(){
            return {
                showShopRated: false
            }
        },
        route: {
            
        },
        created: function(){
            // this.pageInit();
        },
        // store,
        vuex: {
            actions: {
                // pageInit
            }
        }
    }
</script>
<template>
    <div class="shop-info">
        <section class="shopinfo-rating">
            <header>  
                <a v-link="{path:'/shoprated'}">
                <span class="overall">4.8分</span> 
                <span class="compare">高于周边商家67.6%</span> 
                <span class="rating-count weui_cell_ft"> 
                    601条评价 
                </span> 
                </a>
            </header>
            <section>
                <ul class="tag-list"> 
                    <li> 送货快(46) </li>
                    <li> 味道好(37) </li>
                    <li> 服务不错(24) </li>
                    <li> 分量足(21) </li>
                    <li> 干净卫生(17) </li>
                    <li> 食材新鲜(12) </li>
                    <li> 物美价廉(11) </li> 
                </ul>
            </section>
            <section>
                <div class="rate"> 
                    <small class="rate-time">2016-10-09 12:06</small> 
                    <img class="rate-avatar" src="https://fuss10.elemecdn.com/0/0d/ddd77424658a712f6ac59491e9f8ejpeg.jpeg?imageMogr/quality/80/format/webp/"> 
                    <div class="rate-content"> 
                        <h3 class="rate-username">4*******6</h3> 
                        <div> </div> 
                        <span class="rate-rating"></span> 
                        <div class="rate-text">
                            明明是鸡条套餐，给了我薯片，也不电话说明一下。。。懒得换了。。。但是印象不好了
                        </div>   
                        <div>  </div> 
                    </div> 
                </div>
            </section>
            <section class="show-all-ratings weui_cell_ft">
                 查看全部评价 
            </section>
        </section>
        <section> 
            <h3>活动与属性</h3> 
            <div> 
                <div class="activity-wrap activity wrap"> 
                    <i class="activity-icon" style="color: rgb(255, 255, 255); border-color: rgb(240, 115, 115); background-color: rgb(240, 115, 115);"> 减 </i> 
                    <span class="activity-description"> 在线支付满35减4，满68减10 </span> 
                </div>
                <div class="activity-wrap activity wrap"> 
                    <i class="activity-icon" style="color: rgb(255, 255, 255); border-color: rgb(241, 136, 79); background-color: rgb(241, 136, 79);"> 红 </i> 
                    <span class="activity-description"> 汉堡王红火十足双人餐，红到年底！每份订单只享受一份优惠价格 </span>
                </div> 
                <div class="activity-wrap activity wrap"> 
                    <i class="activity-icon" style="color: rgb(255, 255, 255); border-color: rgb(75, 154, 24); background-color: rgb(75, 154, 24);"> 保 </i> 
                    <span class="activity-description"> 已加入“外卖保”计划，食品安全有保障 </span> 
                </div>
                <div class="activity-wrap activity wrap"> 
                    <i class="activity-icon" style="color: rgb(255, 255, 255); border-color: rgb(87, 169, 255); background-color: rgb(87, 169, 255);"> 准 </i> 
                    <span class="activity-description"> 准时必达，超时秒赔 </span> 
                </div> 
            </div> 
        </section>
        <section> 
            <h3>商家信息</h3> 
            <ul class="shop-info-tip"> 
                <li>汉堡王（兆丰店）</li>  
                <li>地址：江苏省昆山市花桥镇花安路99号一楼118、119、145、146号商铺</li> 
                <li>营业时间：11:00-20:30</li> 
                <li><a href="#" v-link="{path:'/licences/营业执照/imgsrc'}"> 营业执照 <span class="weui_cell_ft">&nbsp;</span></a></li> 
                <li><a href="#" v-link="{path:'/licences/餐饮服务许可证/imgsrc'}"> 餐饮服务许可证 <span class="weui_cell_ft">&nbsp;</span></a></li> 
            </ul> 
            <div>  </div> 
        </section>
    </div> 
</template>
