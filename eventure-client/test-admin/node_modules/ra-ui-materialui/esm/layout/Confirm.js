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
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import ActionCheck from '@material-ui/icons/CheckCircle';
import AlertError from '@material-ui/icons/ErrorOutline';
import classnames from 'classnames';
import { useTranslate } from 'ra-core';
var useStyles = makeStyles(function (theme) { return ({
    contentText: {
        minWidth: 400,
    },
    confirmPrimary: {
        color: theme.palette.primary.main,
    },
    confirmWarning: {
        color: theme.palette.error.main,
        '&:hover': {
            backgroundColor: fade(theme.palette.error.main, 0.12),
            // Reset on mouse devices
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
    },
    iconPaddingStyle: {
        paddingRight: '0.5em',
    },
}); }, { name: 'RaConfirm' });
/**
 * Confirmation dialog
 *
 * @example
 * <Confirm
 *     isOpen={true}
 *     title="Delete Item"
 *     content="Are you sure you want to delete this item?"
 *     confirm="Yes"
 *     confirmColor="primary"
 *     ConfirmIcon=ActionCheck
 *     CancelIcon=AlertError
 *     cancel="Cancel"
 *     onConfirm={() => { // do something }}
 *     onClose={() => { // do something }}
 * />
 */
var Confirm = function (_a) {
    var _b;
    var isOpen = _a.isOpen, loading = _a.loading, title = _a.title, content = _a.content, confirm = _a.confirm, cancel = _a.cancel, confirmColor = _a.confirmColor, ConfirmIcon = _a.ConfirmIcon, CancelIcon = _a.CancelIcon, onClose = _a.onClose, onConfirm = _a.onConfirm, classesOverride = _a.classes, _c = _a.translateOptions, translateOptions = _c === void 0 ? {} : _c;
    var classes = useStyles({ classes: classesOverride });
    var translate = useTranslate();
    var handleConfirm = useCallback(function (e) {
        e.stopPropagation();
        onConfirm();
    }, [onConfirm]);
    var handleClick = useCallback(function (e) {
        e.stopPropagation();
    }, []);
    return (React.createElement(Dialog, { open: isOpen, onClose: onClose, onClick: handleClick, "aria-labelledby": "alert-dialog-title" },
        React.createElement(DialogTitle, { id: "alert-dialog-title" }, translate(title, __assign({ _: title }, translateOptions))),
        React.createElement(DialogContent, null,
            React.createElement(DialogContentText, { className: classes.contentText }, translate(content, __assign({ _: content }, translateOptions)))),
        React.createElement(DialogActions, null,
            React.createElement(Button, { disabled: loading, onClick: onClose },
                React.createElement(CancelIcon, { className: classes.iconPaddingStyle }),
                translate(cancel, { _: cancel })),
            React.createElement(Button, { disabled: loading, onClick: handleConfirm, className: classnames('ra-confirm', (_b = {},
                    _b[classes.confirmWarning] = confirmColor === 'warning',
                    _b[classes.confirmPrimary] = confirmColor === 'primary',
                    _b)), autoFocus: true },
                React.createElement(ConfirmIcon, { className: classes.iconPaddingStyle }),
                translate(confirm, { _: confirm })))));
};
Confirm.propTypes = {
    cancel: PropTypes.string.isRequired,
    classes: PropTypes.object,
    confirm: PropTypes.string.isRequired,
    confirmColor: PropTypes.string.isRequired,
    ConfirmIcon: PropTypes.elementType.isRequired,
    CancelIcon: PropTypes.elementType.isRequired,
    content: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
    loading: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};
Confirm.defaultProps = {
    cancel: 'ra.action.cancel',
    classes: {},
    confirm: 'ra.action.confirm',
    confirmColor: 'primary',
    ConfirmIcon: ActionCheck,
    CancelIcon: AlertError,
    isOpen: false,
};
export default Confirm;
