import { createApp } from "vue";
import i18n from "@web/../../locale";
import router from "@web/../../router";
import App from "./App.vue";
import store from "./store";

const app = createApp(App);
app.use(store).use(router).use(i18n);
export default app;
