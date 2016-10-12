import Vue from 'vue';
import { sync } from 'vuex-router-sync'
import store from '../store'

export function configRouter(router){
	router.map({
		'/': {
			// component: Index
			component: function(resolve){
				require(['../../../../home/js/app.vue'], resolve);
			},
			subRoutes: {
				
			}
		},
		'/shop/:shopId': {
			component: function(resolve){
				require(['../../../../shop/js/app.vue'], resolve)
			},
			subRoutes: {
			}
		},
		//商店评价路由
		'/shoprated': {
			component: function(resolve){
				require(['../../../../shop-rated/js/app.vue'], resolve);
			}
		},
		'/licences/:title/:imgsrc': {
			component: function(resolve){
				require(['../../../../shop-licences/js/app.vue'], resolve);
			}
		}
		
	});


	let history = window.sessionStorage
	history.clear()
	let historyCount = history.getItem('count') * 1 || 0
	history.setItem('/', 0)

	/**
	* sync router loading status
	*/
	const commit = store.commit || store.dispatch
	router.beforeEach(({ to, from, next }) => {
	  const toIndex = history.getItem(to.path)
	  const fromIndex = history.getItem(from.path)
	  if (toIndex) {
	    if (toIndex > fromIndex) {
	      commit('UPDATE_DIRECTION', 'forward')
	    } else {
	      commit('UPDATE_DIRECTION', 'reverse');
	    }
	  } else {
	    ++historyCount
	    history.setItem('count', historyCount)
	    to.path !== '/' && history.setItem(to.path, historyCount)
	    commit('UPDATE_DIRECTION', 'forward')
	  }
	  commit('UPDATE_LOADING', true)
	  setTimeout(next, 50)
	})
	router.afterEach(() => {
	  commit('UPDATE_LOADING', false);

	})

	sync(store, router)

}
