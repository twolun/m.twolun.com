import Vue from 'vue';
// import Index from '../../../../home/dev/js/app.vue';
export function configRouter(router){
	router.map({
		'/': {
			// component: Index
			component: function(resolve){
				require(['../../../../home/dev/js/App.vue'], resolve);
			},
		},
		'/shop/:shopId': {
			component: function(resolve){
				require(['../../../../shop/dev/js/App.vue'], resolve)
			}
		}
		
	});

}
