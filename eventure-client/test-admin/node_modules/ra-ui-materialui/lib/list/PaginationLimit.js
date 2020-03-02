"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var pure_1 = __importDefault(require("recompose/pure"));
var CardContent_1 = __importDefault(require("@material-ui/core/CardContent"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var ra_core_1 = require("ra-core");
var PaginationLimit = function () {
    var translate = ra_core_1.useTranslate();
    return (react_1.default.createElement(CardContent_1.default, null,
        react_1.default.createElement(Typography_1.default, { variant: "body2" }, translate('ra.navigation.no_results'))));
};
exports.default = pure_1.default(PaginationLimit);
