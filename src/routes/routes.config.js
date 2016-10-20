import Home from '../pages/Home';
// import Shop from '../pages/Shop';
// import ShopLicences from '../pages/ShopLicences';
// import ShopRated from '../pages/ShopRated';

const routes = [
	{path: '/', component: Home},
	{path: '/shop/:shopId', component: resolve => require(['../pages/Shop'], resolve)},
	{path: '/licences/:licTitle/:licSrc', component: resolve => require(['../pages/ShopLicences'], resolve)},
	{path: '/shoprated', component: resolve => require(['../pages/ShopRated'], resolve)},
  {path: '/login', component: resolve => require(['../pages/Login'], resolve)},
  {path: '/register', component: resolve => require(['../pages/Register'], resolve)},
  {path: '/agreement', component: resolve => require(['../pages/Agreement'], resolve)},
  {path: '/confirmorder', component: resolve => require(['../pages/ConfirmOrder'], resolve)}
];

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}

export { routes, scrollBehavior };