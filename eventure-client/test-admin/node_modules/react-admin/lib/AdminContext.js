"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ra_core_1 = require("ra-core");
var defaultI18nProvider_1 = __importDefault(require("./defaultI18nProvider"));
var AdminContext = ra_core_1.CoreAdminContext;
AdminContext.defaultProps = {
    i18nProvider: defaultI18nProvider_1.default,
};
AdminContext.displayName = 'AdminContext';
exports.default = AdminContext;
