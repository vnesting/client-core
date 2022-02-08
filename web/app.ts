import { createApp } from "vue";
import i18n from "@web/locale";
import router from "@web/router";
import App from "@web/App.vue";
import store from "@web/store";
import http from "@web/util/http";
import vn from "@web/util/VnSystemUtil";
const app = createApp(App);
app.use(store).use(router).use(i18n).use(http).use(vn);
export default app;
