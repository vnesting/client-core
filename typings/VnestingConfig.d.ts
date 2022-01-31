import { UserConfigExport } from "vite";
export global {
	interface VnestingConfig {
		/**
		 * client dev server and build config
		 */
		vite?: UserConfigExport;
		/**
		 * dev server config
		 */
		devServer;
		/**
		 * production server config
		 */
		server;
	}
}
export {};
