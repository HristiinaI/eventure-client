"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
var CardContent_1 = __importDefault(require("@material-ui/core/CardContent"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function (theme) {
    var _a;
    return ({
        root: {
            paddingTop: 0,
            paddingBottom: 0,
            '&:first-child': {
                paddingTop: 16,
            },
            '&:last-child': (_a = {
                    paddingBottom: 16
                },
                _a[theme.breakpoints.only('xs')] = {
                    paddingBottom: 70,
                },
                _a),
        },
    });
}, { name: 'RaCardContentInner' });
/**
 * Overrides material-ui CardContent to allow inner content
 *
 * When using several CardContent inside the same Card, the top and bottom
 * padding double the spacing between each CardContent, leading to too much
 * wasted space. Use this component as a CardContent alternative.
 */
var CardContentInner = function (_a) {
    var classesOverride = _a.classes, className = _a.className, children = _a.children;
    var classes = useStyles({ classes: classesOverride });
    return (react_1.default.createElement(CardContent_1.default, { className: classnames_1.default(classes.root, className) }, children));
};
CardContentInner.propTypes = {
    className: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    children: prop_types_1.default.node,
};
exports.default = CardContentInner;
