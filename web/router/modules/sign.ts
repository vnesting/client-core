import { RouteRecordRaw } from "vue-router";
let sign: RouteRecordRaw[] = [
	{
		path: "/login",
		component: () => import("@/core/views/sign/Login.vue"),
	},
	{
		path: "/register",
		component: () => import("@/core/views/sign/Register.vue"),
	},
];
export default sign;
