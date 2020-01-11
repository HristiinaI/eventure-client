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
var core_1 = require("@material-ui/core");
var classnames_1 = __importDefault(require("classnames"));
var ra_core_1 = require("ra-core");
/**
 * A generic Button with side icon. Only the icon is displayed on small screens.
 *
 * The component translates the label. Pass the icon as child.
 * The icon displays on the left side of the button by default. Set alignIcon prop to 'right' to inverse.
 *
 * @example
 *
 * <Button label="Edit" color="secondary" onClick={doEdit}>
 *   <ContentCreate />
 * </Button>
 *
 */
var Button = function (_a) {
    var _b;
    var _c = _a.alignIcon, alignIcon = _c === void 0 ? 'left' : _c, children = _a.children, classesOverride = _a.classes, className = _a.className, color = _a.color, disabled = _a.disabled, label = _a.label, size = _a.size, rest = __rest(_a, ["alignIcon", "children", "classes", "className", "color", "disabled", "label", "size"]);
    var translate = ra_core_1.useTranslate();
    var classes = useStyles({ classes: classesOverride });
    var isXSmall = core_1.useMediaQuery(function (theme) {
        return theme.breakpoints.down('xs');
    });
    return isXSmall ? (label && !disabled ? (react_1.default.createElement(core_1.Tooltip, { title: translate(label, { _: label }) },
        react_1.default.createElement(core_1.IconButton, __assign({ "aria-label": translate(label, { _: label }), className: className, color: color }, rest), children))) : (react_1.default.createElement(core_1.IconButton, __assign({ className: className, color: color, disabled: disabled }, rest), children))) : (react_1.default.createElement(core_1.Button, __assign({ className: classnames_1.default(classes.button, className), color: color, size: size, "aria-label": label ? translate(label, { _: label }) : undefined, disabled: disabled }, rest),
        alignIcon === 'left' &&
            children &&
            react_1.default.cloneElement(children, {
                className: classes[size + "Icon"],
            }),
        label && (react_1.default.createElement("span", { className: classnames_1.default((_b = {},
                _b[classes.label] = alignIcon === 'left',
                _b[classes.labelRightIcon] = alignIcon !== 'left',
                _b)) }, translate(label, { _: label }))),
        alignIcon === 'right' &&
            children &&
            react_1.default.cloneElement(children, {
                className: classes[size + "Icon"],
            })));
};
var useStyles = core_1.makeStyles({
    button: {
        display: 'inline-flex',
        alignItems: 'center',
    },
    label: {
        paddingLeft: '0.5em',
    },
    labelRightIcon: {
        paddingRight: '0.5em',
    },
    smallIcon: {
        fontSize: 20,
    },
    mediumIcon: {
        fontSize: 22,
    },
    largeIcon: {
        fontSize: 24,
    },
}, { name: 'RaButton' });
Button.propTypes = {
    alignIcon: prop_types_1.default.oneOf(['left', 'right']),
    children: prop_types_1.default.element,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    color: prop_types_1.default.oneOf(['default', 'inherit', 'primary', 'secondary']),
    disabled: prop_types_1.default.bool,
    label: prop_types_1.default.string,
    size: prop_types_1.default.oneOf(['small', 'medium', 'large']),
};
Button.defaultProps = {
    color: 'primary',
    size: 'small',
};
exports.default = Button;
