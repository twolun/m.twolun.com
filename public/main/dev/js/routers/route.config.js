import Vue from 'vue';
export function configRouter(router){
	router.map({
		'/': {
			// component: Index
			component: function(resolve){
				require(['../../../../home/js/app.vue'], resolve);
			},
		},
		'/shop/:shopId': {
			component: function(resolve){
				require(['../../../../shop/js/app.vue'], resolve)
			},
			subRoutes: {
				// '/foodsList': {
				// 	component: function(resolve){
				// 		require(['../../../../foods-list/js/app.vue'], resolve)
				// 	}
				// },
				// '/shopInfo': {
				// 	component: function(resolve){
						
				// 	}
				// }
			}
		}
		
	});

}
