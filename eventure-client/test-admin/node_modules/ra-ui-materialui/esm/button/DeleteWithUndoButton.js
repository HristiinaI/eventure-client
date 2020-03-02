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
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import ActionDelete from '@material-ui/icons/Delete';
import classnames from 'classnames';
import { useDelete, useRefresh, useNotify, useRedirect, CRUD_DELETE, } from 'ra-core';
import Button from './Button';
var DeleteWithUndoButton = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'ra.action.delete' : _b, classesOverride = _a.classes, className = _a.className, _c = _a.icon, icon = _c === void 0 ? defaultIcon : _c, onClick = _a.onClick, resource = _a.resource, record = _a.record, basePath = _a.basePath, _d = _a.redirect, redirectTo = _d === void 0 ? 'list' : _d, rest = __rest(_a, ["label", "classes", "className", "icon", "onClick", "resource", "record", "basePath", "redirect"]);
    var classes = useStyles({ classes: classesOverride });
    var notify = useNotify();
    var redirect = useRedirect();
    var refresh = useRefresh();
    var _e = useDelete(resource, record && record.id, record, {
        action: CRUD_DELETE,
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
    var handleDelete = useCallback(function (event) {
        event.stopPropagation();
        deleteOne();
        if (typeof onClick === 'function') {
            onClick(event);
        }
    }, [deleteOne, onClick]);
    return (React.createElement(Button, __assign({ onClick: handleDelete, disabled: loading, label: label, className: classnames('ra-delete-button', classes.deleteButton, className), key: "button" }, sanitizeRestProps(rest)), icon));
};
export var sanitizeRestProps = function (_a) {
    var classes = _a.classes, handleSubmit = _a.handleSubmit, handleSubmitWithRedirect = _a.handleSubmitWithRedirect, invalid = _a.invalid, label = _a.label, pristine = _a.pristine, resource = _a.resource, saving = _a.saving, undoable = _a.undoable, redirect = _a.redirect, submitOnEnter = _a.submitOnEnter, rest = __rest(_a, ["classes", "handleSubmit", "handleSubmitWithRedirect", "invalid", "label", "pristine", "resource", "saving", "undoable", "redirect", "submitOnEnter"]);
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
}); }, { name: 'RaDeleteWithUndoButton' });
var defaultIcon = React.createElement(ActionDelete, null);
DeleteWithUndoButton.propTypes = {
    basePath: PropTypes.string,
    classes: PropTypes.object,
    className: PropTypes.string,
    label: PropTypes.string,
    record: PropTypes.any,
    redirect: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.func,
    ]),
    resource: PropTypes.string,
    icon: PropTypes.element,
};
export default DeleteWithUndoButton;
