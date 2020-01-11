"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var react_router_dom_1 = require("react-router-dom");
var Tab_1 = __importDefault(require("@material-ui/core/Tab"));
var classnames_1 = __importDefault(require("classnames"));
var ra_core_1 = require("ra-core");
var FormInput_1 = __importDefault(require("./FormInput"));
var sanitizeRestProps = function (_a) {
    var contentClassName = _a.contentClassName, label = _a.label, icon = _a.icon, value = _a.value, translate = _a.translate, rest = __rest(_a, ["contentClassName", "label", "icon", "value", "translate"]);
    return rest;
};
var hiddenStyle = { display: 'none' };
var FormTab = function (_a) {
    var basePath = _a.basePath, className = _a.className, contentClassName = _a.contentClassName, children = _a.children, hidden = _a.hidden, icon = _a.icon, intent = _a.intent, label = _a.label, margin = _a.margin, record = _a.record, resource = _a.resource, variant = _a.variant, value = _a.value, rest = __rest(_a, ["basePath", "className", "contentClassName", "children", "hidden", "icon", "intent", "label", "margin", "record", "resource", "variant", "value"]);
    var translate = ra_core_1.useTranslate();
    var renderHeader = function () { return (react_1.default.createElement(Tab_1.default, __assign({ key: label, label: translate(label, { _: label }), value: value, icon: icon, className: classnames_1.default('form-tab', className), component: react_router_dom_1.Link, to: { pathname: value } }, sanitizeRestProps(rest)))); };
    var renderContent = function () { return (react_1.default.createElement("span", { style: hidden ? hiddenStyle : null, className: contentClassName }, react_1.default.Children.map(children, function (input) {
        return input && (react_1.default.createElement(FormInput_1.default, { basePath: basePath, input: input, record: record, resource: resource, variant: input.props.variant || variant, margin: input.props.margin || margin }));
    }))); };
    return intent === 'header' ? renderHeader() : renderContent();
};
FormTab.propTypes = {
    className: prop_types_1.default.string,
    contentClassName: prop_types_1.default.string,
    children: prop_types_1.default.node,
    intent: prop_types_1.default.oneOf(['header', 'content']),
    hidden: prop_types_1.default.bool,
    icon: prop_types_1.default.element,
    label: prop_types_1.default.string.isRequired,
    path: prop_types_1.default.string,
    value: prop_types_1.default.string,
};
FormTab.displayName = 'FormTab';
exports.default = FormTab;
