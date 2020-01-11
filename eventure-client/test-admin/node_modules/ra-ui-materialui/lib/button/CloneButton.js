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
var shouldUpdate_1 = __importDefault(require("recompose/shouldUpdate"));
var Queue_1 = __importDefault(require("@material-ui/icons/Queue"));
var react_router_dom_1 = require("react-router-dom");
var query_string_1 = require("query-string");
var Button_1 = __importDefault(require("./Button"));
exports.CloneButton = function (_a) {
    var _b = _a.basePath, basePath = _b === void 0 ? '' : _b, _c = _a.label, label = _c === void 0 ? 'ra.action.clone' : _c, record = _a.record, _d = _a.icon, icon = _d === void 0 ? defaultIcon : _d, rest = __rest(_a, ["basePath", "label", "record", "icon"]);
    return (react_1.default.createElement(Button_1.default, __assign({ component: react_router_dom_1.Link, to: record
            ? {
                pathname: basePath + "/create",
                search: query_string_1.stringify({
                    source: JSON.stringify(omitId(record)),
                }),
            }
            : basePath + "/create", label: label, onClick: stopPropagation }, sanitizeRestProps(rest)), icon));
};
var defaultIcon = react_1.default.createElement(Queue_1.default, null);
// useful to prevent click bubbling in a datagrid with rowClick
var stopPropagation = function (e) { return e.stopPropagation(); };
var omitId = function (_a) {
    var id = _a.id, rest = __rest(_a, ["id"]);
    return rest;
};
var sanitizeRestProps = function (_a) {
    var 
    // the next 6 props are injected by Toolbar
    handleSubmit = _a.handleSubmit, handleSubmitWithRedirect = _a.handleSubmitWithRedirect, invalid = _a.invalid, pristine = _a.pristine, saving = _a.saving, submitOnEnter = _a.submitOnEnter, rest = __rest(_a, ["handleSubmit", "handleSubmitWithRedirect", "invalid", "pristine", "saving", "submitOnEnter"]);
    return rest;
};
exports.CloneButton.propTypes = {
    basePath: prop_types_1.default.string,
    icon: prop_types_1.default.element,
    label: prop_types_1.default.string,
    record: prop_types_1.default.any,
};
var enhance = shouldUpdate_1.default(function (props, nextProps) {
    return (props.record &&
        nextProps.record &&
        props.record !== nextProps.record) ||
        props.basePath !== nextProps.basePath ||
        (props.record == null && nextProps.record != null);
});
exports.default = enhance(exports.CloneButton);
