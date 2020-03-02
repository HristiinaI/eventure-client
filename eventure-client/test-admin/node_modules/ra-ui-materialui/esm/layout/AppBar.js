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
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { toggleSidebar } from 'ra-core';
import LoadingIndicator from './LoadingIndicator';
import DefaultUserMenu from './UserMenu';
import HideOnScroll from './HideOnScroll';
var useStyles = makeStyles(function (theme) { return ({
    toolbar: {
        paddingRight: 24,
    },
    menuButton: {
        marginLeft: '0.5em',
        marginRight: '0.5em',
    },
    menuButtonIconClosed: {
        transition: theme.transitions.create(['transform'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        transform: 'rotate(0deg)',
    },
    menuButtonIconOpen: {
        transition: theme.transitions.create(['transform'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        transform: 'rotate(180deg)',
    },
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
}); }, { name: 'RaAppBar' });
var AppBar = function (_a) {
    var children = _a.children, classesOverride = _a.classes, className = _a.className, logo = _a.logo, logout = _a.logout, open = _a.open, title = _a.title, userMenu = _a.userMenu, rest = __rest(_a, ["children", "classes", "className", "logo", "logout", "open", "title", "userMenu"]);
    var classes = useStyles({ classes: classesOverride });
    var dispatch = useDispatch();
    var isXSmall = useMediaQuery(function (theme) { return theme.breakpoints.down('xs'); });
    return (React.createElement(HideOnScroll, null,
        React.createElement(MuiAppBar, __assign({ className: className, color: "secondary" }, rest),
            React.createElement(Toolbar, { disableGutters: true, variant: isXSmall ? 'regular' : 'dense', className: classes.toolbar },
                React.createElement(IconButton, { color: "inherit", "aria-label": "open drawer", onClick: function () { return dispatch(toggleSidebar()); }, className: classNames(classes.menuButton) },
                    React.createElement(MenuIcon, { classes: {
                            root: open
                                ? classes.menuButtonIconOpen
                                : classes.menuButtonIconClosed,
                        } })),
                Children.count(children) === 0 ? (React.createElement(Typography, { variant: "h6", color: "inherit", className: classes.title, id: "react-admin-title" })) : (children),
                React.createElement(LoadingIndicator, null),
                cloneElement(userMenu, { logout: logout })))));
};
AppBar.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    logout: PropTypes.element,
    open: PropTypes.bool,
    userMenu: PropTypes.element,
};
AppBar.defaultProps = {
    userMenu: React.createElement(DefaultUserMenu, null),
};
export default AppBar;
