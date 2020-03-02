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
import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import ContentSave from '@material-ui/icons/Save';
import classnames from 'classnames';
import { useTranslate, useNotify, } from 'ra-core';
var SaveButton = function (_a) {
    var className = _a.className, _b = _a.classes, classesOverride = _b === void 0 ? {} : _b, invalid = _a.invalid, _c = _a.label, label = _c === void 0 ? 'ra.action.save' : _c, pristine = _a.pristine, redirect = _a.redirect, saving = _a.saving, submitOnEnter = _a.submitOnEnter, _d = _a.variant, variant = _d === void 0 ? 'contained' : _d, _e = _a.icon, icon = _e === void 0 ? defaultIcon : _e, onClick = _a.onClick, handleSubmitWithRedirect = _a.handleSubmitWithRedirect, rest = __rest(_a, ["className", "classes", "invalid", "label", "pristine", "redirect", "saving", "submitOnEnter", "variant", "icon", "onClick", "handleSubmitWithRedirect"]);
    var classes = useStyles({ classes: classesOverride });
    var notify = useNotify();
    var translate = useTranslate();
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
    return (React.createElement(Button, __assign({ className: classnames(classes.button, className), variant: variant, type: type, onMouseDown: handleMouseDown, onClick: handleClick, color: saving ? 'default' : 'primary', "aria-label": displayedLabel }, sanitizeRestProps(rest)),
        saving ? (React.createElement(CircularProgress, { size: 18, thickness: 2, className: classes.leftIcon })) : (cloneElement(icon, {
            className: classnames(classes.leftIcon, classes.icon),
        })),
        displayedLabel));
};
var defaultIcon = React.createElement(ContentSave, null);
var useStyles = makeStyles(function (theme) { return ({
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
    className: PropTypes.string,
    classes: PropTypes.object,
    handleSubmitWithRedirect: PropTypes.func,
    invalid: PropTypes.bool,
    label: PropTypes.string,
    pristine: PropTypes.bool,
    redirect: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.func,
    ]),
    saving: PropTypes.bool,
    submitOnEnter: PropTypes.bool,
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
    icon: PropTypes.element,
};
export default SaveButton;
