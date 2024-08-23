"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
var virtual_generated_pages_1 = __importDefault(require("virtual:generated-pages"));
var App_vue_1 = __importDefault(require("./App.vue"));
require("./index.css");
require("./styles/main.css");
var app = (0, vue_1.createApp)(App_vue_1["default"]);
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(import.meta.env.BASE_URL),
    routes: virtual_generated_pages_1["default"]
});
app.use(router);
app.mount('#app');
//# sourceMappingURL=main.js.map