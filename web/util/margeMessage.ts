/**
 * author :xiaolang
 * @param messageArr messageArr
 * 简单两层拷贝合并
 */
export default function margeMessage(...messageArr: Array<any>): any {
	if (messageArr.length == 0) return [];
	if (messageArr.length == 1) return messageArr[0];
	let messages = messageArr[0];
	for (let i = 1; i < messageArr.length; i++) {
		for (const zh in messageArr[i]) {
			if (Object.prototype.hasOwnProperty.call(messageArr[i], zh)) {
				for (const key in messageArr[i][zh]) {
					if (Object.prototype.hasOwnProperty.call(messageArr[i], key)) {
						const el = messageArr[i][key];
						messages[zh][key] = el;
					}
				}
			}
		}
	}
	return messages;
}
