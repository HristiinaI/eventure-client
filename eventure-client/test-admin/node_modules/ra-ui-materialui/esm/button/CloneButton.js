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
import shouldUpdate from 'recompose/shouldUpdate';
import Queue from '@material-ui/icons/Queue';
import { Link } from 'react-router-dom';
import { stringify } from 'query-string';
import Button from './Button';
export var CloneButton = function (_a) {
    var _b = _a.basePath, basePath = _b === void 0 ? '' : _b, _c = _a.label, label = _c === void 0 ? 'ra.action.clone' : _c, record = _a.record, _d = _a.icon, icon = _d === void 0 ? defaultIcon : _d, rest = __rest(_a, ["basePath", "label", "record", "icon"]);
    return (React.createElement(Button, __assign({ component: Link, to: record
            ? {
                pathname: basePath + "/create",
                search: stringify({
                    source: JSON.stringify(omitId(record)),
                }),
            }
            : basePath + "/create", label: label, onClick: stopPropagation }, sanitizeRestProps(rest)), icon));
};
var defaultIcon = React.createElement(Queue, null);
// useful to prevent click bubbling in a datagrid with rowClick
var stopPropagation = function (e) { return e.stopPropagation(); };
var omitId = function (_a) {
    var id = _a.id, rest = __rest(_a, ["id"]);
    return rest;
};
var sanitizeRestProps = function (_a) {
    var 
    // the next 6 props are injected by Toolbar
    handleSubmit = _a.handleSubmit, handleSubmitWithRedirect = _a.handleSubmitWithRedirect, invalid = _a.invalid, pristine = _a.pristine, saving = _a.saving, submitOnEnter = _a.submitOnEnter, rest = __rest(_a, ["handleSubmit", "handleSubmitWithRedirect", "invalid", "pristine", "saving", "submitOnEnter"]);
    return rest;
};
CloneButton.propTypes = {
    basePath: PropTypes.string,
    icon: PropTypes.element,
    label: PropTypes.string,
    record: PropTypes.any,
};
var enhance = shouldUpdate(function (props, nextProps) {
    return (props.record &&
        nextProps.record &&
        props.record !== nextProps.record) ||
        props.basePath !== nextProps.basePath ||
        (props.record == null && nextProps.record != null);
});
export default enhance(CloneButton);
