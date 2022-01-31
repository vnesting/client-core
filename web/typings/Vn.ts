declare namespace Vn {
	interface MsgOptions {
		countdown?: number | "off";
		closable?: boolean;
	}
	interface Msg {
		error(msg: string): void;
		success(msg: string): void;
		warn(msg: string): void;
		info(msg: string): void;
	}
	interface Alert {
		error(msg: string): void;
		success(msg: string): void;
		warn(msg: string): void;
		info(msg: string): void;
	}
}
