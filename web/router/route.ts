import error from "./modules/error";
import sign from "./modules/sign";
import system from "./modules/system";
import { RouteRecordRaw } from "vue-router";
let routes: RouteRecordRaw[] = [
	{
		path: "/",
		meta: {
			__title: "welcome",
			keepAlive: true,
		},
		component: () => import("@web/views/home/Home.vue"),
	},
	// 错误页面
	{
		path: "/error",
		meta: {
			__title: "error",
		},
		redirect: "/",
		children: error,
	},
	// 系统功能
	{
		path: "/system",
		name: "System",
		meta: {
			__title: "system",
		},
		component: () => import("@web/views/system/index.vue"),
		children: system,
	},
	// 登录相关
	{
		path: "/sign",
		component: () => import("@web/views/system/index.vue"),
		children: sign,
	},
	{
		path: "/reflash",
		component: () => import("@web/views/Reflash.vue"),
	},
	{
		path: "/:pathMatch(.*)*",
		redirect: {
			path: "404",
		},
	},
];
export default routes;
