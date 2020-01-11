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
var Delete_1 = __importDefault(require("@material-ui/icons/Delete"));
var colorManipulator_1 = require("@material-ui/core/styles/colorManipulator");
var styles_1 = require("@material-ui/core/styles");
var ra_core_1 = require("ra-core");
var Button_1 = __importDefault(require("./Button"));
var sanitizeRestProps = function (_a) {
    var basePath = _a.basePath, classes = _a.classes, dispatchCrudDeleteMany = _a.dispatchCrudDeleteMany, filterValues = _a.filterValues, label = _a.label, resource = _a.resource, selectedIds = _a.selectedIds, startUndoable = _a.startUndoable, undoable = _a.undoable, rest = __rest(_a, ["basePath", "classes", "dispatchCrudDeleteMany", "filterValues", "label", "resource", "selectedIds", "startUndoable", "undoable"]);
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
}); }, { name: 'RaBulkDeleteWithUndoButton' });
var BulkDeleteWithUndoButton = function (_a) {
    var basePath = _a.basePath, classesOverride = _a.classes, icon = _a.icon, label = _a.label, onClick = _a.onClick, resource = _a.resource, selectedIds = _a.selectedIds, startUndoable = _a.startUndoable, rest = __rest(_a, ["basePath", "classes", "icon", "label", "onClick", "resource", "selectedIds", "startUndoable"]);
    var classes = useStyles({ classes: classesOverride });
    var notify = ra_core_1.useNotify();
    var unselectAll = ra_core_1.useUnselectAll();
    var refresh = ra_core_1.useRefresh();
    var _b = ra_core_1.useDeleteMany(resource, selectedIds, {
        action: ra_core_1.CRUD_DELETE_MANY,
        onSuccess: function () {
            notify('ra.notification.deleted', 'info', { smart_count: selectedIds.length }, true);
            unselectAll(resource);
            refresh();
        },
        onFailure: function (error) {
            return notify(typeof error === 'string'
                ? error
                : error.message || 'ra.notification.http_error', 'warning');
        },
        undoable: true,
    }), deleteMany = _b[0], loading = _b[1].loading;
    var handleClick = function () {
        deleteMany();
        if (typeof onClick === 'function') {
            onClick();
        }
    };
    return (react_1.default.createElement(Button_1.default, __assign({ onClick: handleClick, label: label, className: classes.deleteButton, disabled: loading }, sanitizeRestProps(rest)), icon));
};
BulkDeleteWithUndoButton.propTypes = {
    basePath: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    label: prop_types_1.default.string,
    resource: prop_types_1.default.string.isRequired,
    startUndoable: prop_types_1.default.func,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any).isRequired,
    icon: prop_types_1.default.element,
};
BulkDeleteWithUndoButton.defaultProps = {
    label: 'ra.action.delete',
    undoable: true,
    icon: react_1.default.createElement(Delete_1.default, null),
};
exports.default = BulkDeleteWithUndoButton;
