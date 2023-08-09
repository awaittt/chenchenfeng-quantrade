import { createApp } from "vue";
import App from "./App.vue";
import "@/styles/reset.scss";
import Tradetop from "@/components/trade-top/index.vue";
import TradeBottom from "@/components/trade-bottom/index.vue";
import { router } from "./router";
import ElementPlus from "element-plus";
//@ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import "element-plus/dist/index.css";
//pinia
import pinia from "@/store";

const app = createApp(App);
app.component("trade-top", Tradetop);
app.component("trade-bottom", TradeBottom);
app.use(router);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(pinia);
app.mount("#app");
