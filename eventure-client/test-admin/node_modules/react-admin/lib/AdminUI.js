"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ra_core_1 = require("ra-core");
var ra_ui_materialui_1 = require("ra-ui-materialui");
var AdminUI = ra_core_1.CoreAdminUI;
AdminUI.defaultProps = {
    layout: ra_ui_materialui_1.Layout,
    catchAll: ra_ui_materialui_1.NotFound,
    loading: ra_ui_materialui_1.Loading,
    loginPage: ra_ui_materialui_1.Login,
    logout: ra_ui_materialui_1.Logout,
};
AdminUI.displayName = 'AdminUI';
exports.default = AdminUI;
