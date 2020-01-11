"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var styles_1 = require("@material-ui/core/styles");
var classnames_1 = __importDefault(require("classnames"));
var CircularProgress_1 = __importDefault(require("@material-ui/core/CircularProgress"));
var ra_core_1 = require("ra-core");
var useStyles = styles_1.makeStyles(function (theme) {
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
    var translate = ra_core_1.useTranslate();
    return (react_1.default.createElement("div", { className: classnames_1.default(classes.container, className) },
        react_1.default.createElement("div", { className: classes.message },
            react_1.default.createElement(CircularProgress_1.default, { className: classes.icon, color: "primary" }),
            react_1.default.createElement("h1", null, translate(loadingPrimary)),
            react_1.default.createElement("div", null,
                translate(loadingSecondary),
                "."))));
};
Loading.propTypes = {
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    loadingPrimary: prop_types_1.default.string,
    loadingSecondary: prop_types_1.default.string,
};
Loading.defaultProps = {
    loadingPrimary: 'ra.page.loading',
    loadingSecondary: 'ra.message.loading',
};
exports.default = Loading;
