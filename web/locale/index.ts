import { createI18n } from "vue-i18n";
import enLocale from "./lang/en";
import zhLocale from "./lang/zh";
import messages from "@web/../../../locale/lang";
import merge from "utils-merge";
let coreMessages = {
	en: {
		...enLocale,
	},
	zh: {
		...zhLocale,
	},
	tw: {},
};
coreMessages = merge(messages, coreMessages);
export default createI18n({
	locale: "zh",
	coreMessages,
});
