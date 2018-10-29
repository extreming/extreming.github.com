import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import study1 from '../view/study1.vue';
import layout from '../view/layout.vue';
import main from '../view/main.vue';

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/main'
		},
		{
			path: '/main',
			name: 'main',
			component: main
		},
		{
			path: '/study1',
			name: 'study1',
			component: study1
		},
		{
			path: '/layout',
			name: 'layout',
			component: layout
        }
	]
})