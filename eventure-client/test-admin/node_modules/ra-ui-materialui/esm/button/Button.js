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
import { Button as MuiButton, Tooltip, IconButton, useMediaQuery, makeStyles, } from '@material-ui/core';
import classnames from 'classnames';
import { useTranslate } from 'ra-core';
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
    var translate = useTranslate();
    var classes = useStyles({ classes: classesOverride });
    var isXSmall = useMediaQuery(function (theme) {
        return theme.breakpoints.down('xs');
    });
    return isXSmall ? (label && !disabled ? (React.createElement(Tooltip, { title: translate(label, { _: label }) },
        React.createElement(IconButton, __assign({ "aria-label": translate(label, { _: label }), className: className, color: color }, rest), children))) : (React.createElement(IconButton, __assign({ className: className, color: color, disabled: disabled }, rest), children))) : (React.createElement(MuiButton, __assign({ className: classnames(classes.button, className), color: color, size: size, "aria-label": label ? translate(label, { _: label }) : undefined, disabled: disabled }, rest),
        alignIcon === 'left' &&
            children &&
            React.cloneElement(children, {
                className: classes[size + "Icon"],
            }),
        label && (React.createElement("span", { className: classnames((_b = {},
                _b[classes.label] = alignIcon === 'left',
                _b[classes.labelRightIcon] = alignIcon !== 'left',
                _b)) }, translate(label, { _: label }))),
        alignIcon === 'right' &&
            children &&
            React.cloneElement(children, {
                className: classes[size + "Icon"],
            })));
};
var useStyles = makeStyles({
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
    alignIcon: PropTypes.oneOf(['left', 'right']),
    children: PropTypes.element,
    classes: PropTypes.object,
    className: PropTypes.string,
    color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
    disabled: PropTypes.bool,
    label: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};
Button.defaultProps = {
    color: 'primary',
    size: 'small',
};
export default Button;
