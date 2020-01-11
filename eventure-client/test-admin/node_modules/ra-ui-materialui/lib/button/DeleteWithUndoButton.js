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
var styles_1 = require("@material-ui/core/styles");
var colorManipulator_1 = require("@material-ui/core/styles/colorManipulator");
var Delete_1 = __importDefault(require("@material-ui/icons/Delete"));
var classnames_1 = __importDefault(require("classnames"));
var ra_core_1 = require("ra-core");
var Button_1 = __importDefault(require("./Button"));
var DeleteWithUndoButton = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'ra.action.delete' : _b, classesOverride = _a.classes, className = _a.className, _c = _a.icon, icon = _c === void 0 ? defaultIcon : _c, onClick = _a.onClick, resource = _a.resource, record = _a.record, basePath = _a.basePath, _d = _a.redirect, redirectTo = _d === void 0 ? 'list' : _d, rest = __rest(_a, ["label", "classes", "className", "icon", "onClick", "resource", "record", "basePath", "redirect"]);
    var classes = useStyles({ classes: classesOverride });
    var notify = ra_core_1.useNotify();
    var redirect = ra_core_1.useRedirect();
    var refresh = ra_core_1.useRefresh();
    var _e = ra_core_1.useDelete(resource, record && record.id, record, {
        action: ra_core_1.CRUD_DELETE,
        onSuccess: function () {
            notify('ra.notification.deleted', 'info', { smart_count: 1 }, true);
            redirect(redirectTo, basePath);
            refresh();
        },
        onFailure: function (error) {
            return notify(typeof error === 'string'
                ? error
                : error.message || 'ra.notification.http_error', 'warning');
        },
        undoable: true,
    }), deleteOne = _e[0], loading = _e[1].loading;
    var handleDelete = react_1.useCallback(function (event) {
        event.stopPropagation();
        deleteOne();
        if (typeof onClick === 'function') {
            onClick(event);
        }
    }, [deleteOne, onClick]);
    return (react_1.default.createElement(Button_1.default, __assign({ onClick: handleDelete, disabled: loading, label: label, className: classnames_1.default('ra-delete-button', classes.deleteButton, className), key: "button" }, exports.sanitizeRestProps(rest)), icon));
};
exports.sanitizeRestProps = function (_a) {
    var classes = _a.classes, handleSubmit = _a.handleSubmit, handleSubmitWithRedirect = _a.handleSubmitWithRedirect, invalid = _a.invalid, label = _a.label, pristine = _a.pristine, resource = _a.resource, saving = _a.saving, undoable = _a.undoable, redirect = _a.redirect, submitOnEnter = _a.submitOnEnter, rest = __rest(_a, ["classes", "handleSubmit", "handleSubmitWithRedirect", "invalid", "label", "pristine", "resource", "saving", "undoable", "redirect", "submitOnEnter"]);
    return rest;
};
var useStyles = styles_1.makeStyles(function (theme) { return ({
    deleteButton: {
        color: theme.palette.error.main,
        '&:hover': {
            backgroundColor: colorManipulator_1.fade(theme.palette.error.main, 0.12),
            // Reset on mouse devices
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
    },
}); }, { name: 'RaDeleteWithUndoButton' });
var defaultIcon = react_1.default.createElement(Delete_1.default, null);
DeleteWithUndoButton.propTypes = {
    basePath: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    label: prop_types_1.default.string,
    record: prop_types_1.default.any,
    redirect: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]),
    resource: prop_types_1.default.string,
    icon: prop_types_1.default.element,
};
exports.default = DeleteWithUndoButton;
