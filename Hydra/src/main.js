import Vue from 'vue'
import Router from 'vue-router'
import app from './app.vue'
import index from './pages/index.vue'

Vue.use(Router);

/**2016/3/28 14:37修改 14-18行
***
***原代码如下
***
***var router = new Router()
**/
var router = new Router({
	//设置了html5模式后，加载完js后不会加上#!这2个类似锚点的字符，实现前后端路由统一如果用户刷新浏览器的话，服务端也能渲染出相应的页面。
    history: true, //html5模式 去掉锚点 
    saveScrollPosition: true //记住页面的滚动位置 html5模式适用
});

router.map({
	"/":{
		component:index
	}
});

router.start(app,'#app');