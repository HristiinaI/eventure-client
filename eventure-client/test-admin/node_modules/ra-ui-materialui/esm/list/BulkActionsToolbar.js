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
import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import { useTranslate, sanitizeListRestProps } from 'ra-core';
import TopToolbar from '../layout/TopToolbar';
var useStyles = makeStyles(function (theme) { return ({
    toolbar: {
        zIndex: 3,
        color: theme.palette.type === 'light'
            ? theme.palette.primary.main
            : theme.palette.text.primary,
        justifyContent: 'space-between',
        backgroundColor: theme.palette.type === 'light'
            ? lighten(theme.palette.primary.light, 0.85)
            : theme.palette.primary.dark,
        minHeight: theme.spacing(8),
        height: theme.spacing(8),
        transition: theme.transitions.create('height') + ", " + theme.transitions.create('min-height'),
    },
    buttons: {},
    collapsed: {
        minHeight: 0,
        height: 0,
        overflowY: 'hidden',
    },
    title: {
        flex: '0 0 auto',
    },
}); }, { name: 'RaBulkActionsToolbar' });
var BulkActionsToolbar = function (_a) {
    var _b;
    var basePath = _a.basePath, classesOverride = _a.classes, filterValues = _a.filterValues, label = _a.label, resource = _a.resource, selectedIds = _a.selectedIds, children = _a.children, rest = __rest(_a, ["basePath", "classes", "filterValues", "label", "resource", "selectedIds", "children"]);
    var classes = useStyles({ classes: classesOverride });
    var translate = useTranslate();
    return (React.createElement(Toolbar, __assign({ "data-test": "bulk-actions-toolbar", className: classnames(classes.toolbar, (_b = {},
            _b[classes.collapsed] = selectedIds.length === 0,
            _b)) }, sanitizeListRestProps(rest)),
        React.createElement("div", { className: classes.title },
            React.createElement(Typography, { color: "inherit", variant: "subtitle1" }, translate(label, {
                _: label,
                smart_count: selectedIds.length,
            }))),
        React.createElement(TopToolbar, null, Children.map(children, function (child) {
            return cloneElement(Children.only(child), {
                basePath: basePath,
                filterValues: filterValues,
                resource: resource,
                selectedIds: selectedIds,
            });
        }))));
};
BulkActionsToolbar.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    basePath: PropTypes.string,
    filterValues: PropTypes.object,
    label: PropTypes.string,
    resource: PropTypes.string,
    selectedIds: PropTypes.array,
};
BulkActionsToolbar.defaultProps = {
    label: 'ra.action.bulk_actions',
};
export default BulkActionsToolbar;
