import vn from "@/util/xl";
declare module "@vue/runtime-core" {
	interface ComponentCustomProperties {
		$vn: typeof vn;
	}
}
