import { PRO_OR_NOT } from "./../util/Mode";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import coreRoutes from "./route";
import routes from "@/router/route";

let allRoutes = [...routes, ...coreRoutes];
const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: allRoutes,
});
// 获取页面权限列表

// 路由守卫
router.beforeEach((to, from, next) => {
	// 为路由设置标题 __title 为 i18n 字段
	if (to?.meta?.__title) document.title = String(to.meta.__title);
	if (PRO_OR_NOT) {
		// 生产环境路由守卫
	}
	next();
	// to and from are both route objects. must call `next`.
});
export default router;
