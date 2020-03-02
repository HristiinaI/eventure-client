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
import React from 'react';
import PropTypes from 'prop-types';
import ActionDelete from '@material-ui/icons/Delete';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core/styles';
import { useDeleteMany, useRefresh, useNotify, useUnselectAll, CRUD_DELETE_MANY, } from 'ra-core';
import Button from './Button';
var sanitizeRestProps = function (_a) {
    var basePath = _a.basePath, classes = _a.classes, dispatchCrudDeleteMany = _a.dispatchCrudDeleteMany, filterValues = _a.filterValues, label = _a.label, resource = _a.resource, selectedIds = _a.selectedIds, startUndoable = _a.startUndoable, undoable = _a.undoable, rest = __rest(_a, ["basePath", "classes", "dispatchCrudDeleteMany", "filterValues", "label", "resource", "selectedIds", "startUndoable", "undoable"]);
    return rest;
};
var useStyles = makeStyles(function (theme) { return ({
    deleteButton: {
        color: theme.palette.error.main,
        '&:hover': {
            backgroundColor: fade(theme.palette.error.main, 0.12),
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
    var notify = useNotify();
    var unselectAll = useUnselectAll();
    var refresh = useRefresh();
    var _b = useDeleteMany(resource, selectedIds, {
        action: CRUD_DELETE_MANY,
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
    return (React.createElement(Button, __assign({ onClick: handleClick, label: label, className: classes.deleteButton, disabled: loading }, sanitizeRestProps(rest)), icon));
};
BulkDeleteWithUndoButton.propTypes = {
    basePath: PropTypes.string,
    classes: PropTypes.object,
    label: PropTypes.string,
    resource: PropTypes.string.isRequired,
    startUndoable: PropTypes.func,
    selectedIds: PropTypes.arrayOf(PropTypes.any).isRequired,
    icon: PropTypes.element,
};
BulkDeleteWithUndoButton.defaultProps = {
    label: 'ra.action.delete',
    undoable: true,
    icon: React.createElement(ActionDelete, null),
};
export default BulkDeleteWithUndoButton;
