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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var CircularProgress_1 = __importDefault(require("@material-ui/core/CircularProgress"));
var styles_1 = require("@material-ui/core/styles");
var Save_1 = __importDefault(require("@material-ui/icons/Save"));
var classnames_1 = __importDefault(require("classnames"));
var ra_core_1 = require("ra-core");
var SaveButton = function (_a) {
    var className = _a.className, _b = _a.classes, classesOverride = _b === void 0 ? {} : _b, invalid = _a.invalid, _c = _a.label, label = _c === void 0 ? 'ra.action.save' : _c, pristine = _a.pristine, redirect = _a.redirect, saving = _a.saving, submitOnEnter = _a.submitOnEnter, _d = _a.variant, variant = _d === void 0 ? 'contained' : _d, _e = _a.icon, icon = _e === void 0 ? defaultIcon : _e, onClick = _a.onClick, handleSubmitWithRedirect = _a.handleSubmitWithRedirect, rest = __rest(_a, ["className", "classes", "invalid", "label", "pristine", "redirect", "saving", "submitOnEnter", "variant", "icon", "onClick", "handleSubmitWithRedirect"]);
    var classes = useStyles({ classes: classesOverride });
    var notify = ra_core_1.useNotify();
    var translate = ra_core_1.useTranslate();
    // We handle the click event through mousedown because of an issue when
    // the button is not as the same place when mouseup occurs, preventing the click
    // event to fire.
    // It can happen when some errors appear under inputs, pushing the button
    // towards the window bottom.
    var handleMouseDown = function (event) {
        if (saving) {
            // prevent double submission
            event.preventDefault();
        }
        else {
            if (invalid) {
                notify('ra.message.invalid_form', 'warning');
            }
            // always submit form explicitly regardless of button type
            if (event) {
                event.preventDefault();
            }
            handleSubmitWithRedirect(redirect);
        }
        if (typeof onClick === 'function') {
            onClick(event);
        }
    };
    // As we handle the "click" through the mousedown event, we have to make sure we cancel
    // the default click in case the issue mentionned above does not occur.
    // Otherwise, this would trigger a standard HTML submit, not the final-form one.
    var handleClick = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    var type = submitOnEnter ? 'submit' : 'button';
    var displayedLabel = label && translate(label, { _: label });
    return (react_1.default.createElement(Button_1.default, __assign({ className: classnames_1.default(classes.button, className), variant: variant, type: type, onMouseDown: handleMouseDown, onClick: handleClick, color: saving ? 'default' : 'primary', "aria-label": displayedLabel }, sanitizeRestProps(rest)),
        saving ? (react_1.default.createElement(CircularProgress_1.default, { size: 18, thickness: 2, className: classes.leftIcon })) : (react_1.cloneElement(icon, {
            className: classnames_1.default(classes.leftIcon, classes.icon),
        })),
        displayedLabel));
};
var defaultIcon = react_1.default.createElement(Save_1.default, null);
var useStyles = styles_1.makeStyles(function (theme) { return ({
    button: {
        position: 'relative',
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    icon: {
        fontSize: 18,
    },
}); }, { name: 'RaSaveButton' });
var sanitizeRestProps = function (_a) {
    var basePath = _a.basePath, handleSubmit = _a.handleSubmit, record = _a.record, resource = _a.resource, undoable = _a.undoable, rest = __rest(_a, ["basePath", "handleSubmit", "record", "resource", "undoable"]);
    return rest;
};
SaveButton.propTypes = {
    className: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    handleSubmitWithRedirect: prop_types_1.default.func,
    invalid: prop_types_1.default.bool,
    label: prop_types_1.default.string,
    pristine: prop_types_1.default.bool,
    redirect: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]),
    saving: prop_types_1.default.bool,
    submitOnEnter: prop_types_1.default.bool,
    variant: prop_types_1.default.oneOf(['text', 'outlined', 'contained']),
    icon: prop_types_1.default.element,
};
exports.default = SaveButton;
