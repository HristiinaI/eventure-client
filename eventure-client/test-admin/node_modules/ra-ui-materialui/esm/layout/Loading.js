import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useTranslate } from 'ra-core';
var useStyles = makeStyles(function (theme) {
    var _a;
    return ({
        container: (_a = {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            },
            _a[theme.breakpoints.up('md')] = {
                height: '100%',
            },
            _a[theme.breakpoints.down('sm')] = {
                height: '100vh',
                marginTop: '-3em',
            },
            _a),
        icon: {
            width: '9em',
            height: '9em',
        },
        message: {
            textAlign: 'center',
            fontFamily: 'Roboto, sans-serif',
            opacity: 0.5,
            margin: '0 1em',
        },
    });
}, { name: 'RaLoading' });
var Loading = function (_a) {
    var classesOverride = _a.classes, className = _a.className, _b = _a.loadingPrimary, loadingPrimary = _b === void 0 ? 'ra.page.loading' : _b, _c = _a.loadingSecondary, loadingSecondary = _c === void 0 ? 'ra.message.loading' : _c;
    var classes = useStyles({ classes: classesOverride });
    var translate = useTranslate();
    return (React.createElement("div", { className: classnames(classes.container, className) },
        React.createElement("div", { className: classes.message },
            React.createElement(CircularProgress, { className: classes.icon, color: "primary" }),
            React.createElement("h1", null, translate(loadingPrimary)),
            React.createElement("div", null,
                translate(loadingSecondary),
                "."))));
};
Loading.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    loadingPrimary: PropTypes.string,
    loadingSecondary: PropTypes.string,
};
Loading.defaultProps = {
    loadingPrimary: 'ra.page.loading',
    loadingSecondary: 'ra.message.loading',
};
export default Loading;
