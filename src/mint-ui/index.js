import Vue from 'vue';

import PageView from '../components/PageView.vue';

import Header from 'mint-ui/lib/header';
import 'mint-ui/lib/header/style.css';

import Swipe from 'mint-ui/lib/swipe';
import 'mint-ui/lib/swipe/style.css';

import SwipeItem from 'mint-ui/lib/swipe-item';
import 'mint-ui/lib/swipe-item/style.css';

import Field from 'mint-ui/lib/field';
import 'mint-ui/lib/field/style.css';

import Button from 'mint-ui/lib/button';
import 'mint-ui/lib/button/style.css';

import Switch from 'mint-ui/lib/switch';
import 'mint-ui/lib/switch/style.css';

import Lazyload from 'mint-ui/lib/lazyload';
import 'mint-ui/lib/lazyload/style.css';

import Spinner from 'mint-ui/lib/spinner';
import 'mint-ui/lib/spinner/style.css';

import Cell from 'mint-ui/lib/cell';
import 'mint-ui/lib/cell/style.css';


Vue.component('page-view', PageView);
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Field.name, Field);
Vue.component(Button.name, Button);
Vue.component(Switch.name, Switch);
Vue.component(Lazyload.name, Lazyload);
Vue.component(Spinner.name, Spinner);
Vue.component(Cell.name, Cell);
