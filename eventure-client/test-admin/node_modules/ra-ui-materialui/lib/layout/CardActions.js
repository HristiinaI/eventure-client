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
var ra_core_1 = require("ra-core");
var styles_1 = require("@material-ui/core/styles");
var classnames_1 = __importDefault(require("classnames"));
var useStyles = styles_1.makeStyles({
    cardActions: {
        zIndex: 2,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        padding: 0,
    },
}, { name: 'RaCardActions' });
var CardActions = function (_a) {
    var className = _a.className, children = _a.children, rest = __rest(_a, ["className", "children"]);
    ra_core_1.warning(true, '<CardActions> is deprecated. Please use the <TopToolbar> component instead to wrap your action buttons');
    var classes = useStyles({}); // the empty {} is a temp fix for https://github.com/mui-org/material-ui/issues/15942
    return (react_1.default.createElement("div", __assign({ className: classnames_1.default(classes.cardActions, className) }, rest), children));
};
CardActions.propTypes = {
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
};
exports.default = CardActions;
