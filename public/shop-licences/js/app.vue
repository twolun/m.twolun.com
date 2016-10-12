<script type="text/javascript">
    import './components/shoplicences.scss';
    import PageView from '../../page-view';

    export default {
        data(){
            return {
            }
        },
        ready: function(){
            
        },
        components: {
            PageView
        }
    }
</script>
<template>
    <div class="page">
        <page-view :title="$route.params.title">
            <div slot="content" class="page-content lic-table">
                <div class="lic-cell">
                    
                <img class="lic-img" src="https://fuss10.elemecdn.com/6/9b/3be7190fa0004d10e508bd15005a5jpeg.jpeg?imageMogr/quality/80/format/webp/">
                </div>
            </div>
        </page-view>        
    </div>
</template>
