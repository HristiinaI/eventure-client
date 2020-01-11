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
var onlyUpdateForKeys_1 = __importDefault(require("recompose/onlyUpdateForKeys"));
var core_1 = require("@material-ui/core");
var Add_1 = __importDefault(require("@material-ui/icons/Add"));
var classnames_1 = __importDefault(require("classnames"));
var react_router_dom_1 = require("react-router-dom");
var ra_core_1 = require("ra-core");
var Button_1 = __importDefault(require("./Button"));
var CreateButton = function (_a) {
    var _b = _a.basePath, basePath = _b === void 0 ? '' : _b, className = _a.className, classesOverride = _a.classes, _c = _a.label, label = _c === void 0 ? 'ra.action.create' : _c, _d = _a.icon, icon = _d === void 0 ? defaultIcon : _d, rest = __rest(_a, ["basePath", "className", "classes", "label", "icon"]);
    var classes = useStyles({ classes: classesOverride });
    var translate = ra_core_1.useTranslate();
    var isSmall = core_1.useMediaQuery(function (theme) {
        return theme.breakpoints.down('sm');
    });
    return isSmall ? (react_1.default.createElement(core_1.Fab, __assign({ component: react_router_dom_1.Link, color: "primary", className: classnames_1.default(classes.floating, className), to: basePath + "/create", "aria-label": label && translate(label) }, rest), icon)) : (react_1.default.createElement(Button_1.default, __assign({ component: react_router_dom_1.Link, to: basePath + "/create", className: className, label: label }, rest), icon));
};
var defaultIcon = react_1.default.createElement(Add_1.default, null);
var useStyles = core_1.makeStyles(function (theme) { return ({
    floating: {
        color: theme.palette.getContrastText(theme.palette.primary.main),
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 60,
        left: 'auto',
        position: 'fixed',
        zIndex: 1000,
    },
    floatingLink: {
        color: 'inherit',
    },
}); }, { name: 'RaCreateButton' });
CreateButton.propTypes = {
    basePath: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    icon: prop_types_1.default.element,
    label: prop_types_1.default.string,
};
var enhance = onlyUpdateForKeys_1.default(['basePath', 'label', 'translate']);
exports.default = enhance(CreateButton);
