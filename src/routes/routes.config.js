import Home from '../pages/Home';

const routes = [
	{path: '/', component: Home},
	{path: '/shop/:shopId', component: resolve => require(['../pages/Shop'], resolve)},
	{path: '/licences/:licTitle/:licSrc', component: resolve => require(['../pages/ShopLicences'], resolve)},
	{path: '/shoprated', component: resolve => require(['../pages/ShopRated'], resolve)},
  {path: '/login', component: resolve => require(['../pages/Login'], resolve)},
  {path: '/register', component: resolve => require(['../pages/Register'], resolve)},
  {path: '/agreement', component: resolve => require(['../pages/Agreement'], resolve)},
  {path: '/confirmorder', component: resolve => require(['../pages/ConfirmOrder'], resolve)},
  {path: '/discount', component: resolve => require(['../pages/Discount'], resolve)},
  {path: '/me', component: resolve => require(['../pages/Me'], resolve)}
];

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    const position = {}
    if (to.hash) {
      position.selector = to.hash
    }
    if (to.matched.some(m => m.meta.scrollToTop)) {
      position.x = 0
      position.y = 0
    }
    return position
  }
}

export { routes, scrollBehavior };