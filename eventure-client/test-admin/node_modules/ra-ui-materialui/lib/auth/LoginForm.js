"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var react_final_form_1 = require("react-final-form");
var CardActions_1 = __importDefault(require("@material-ui/core/CardActions"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var CircularProgress_1 = __importDefault(require("@material-ui/core/CircularProgress"));
var styles_1 = require("@material-ui/core/styles");
var ra_core_1 = require("ra-core");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    form: {
        padding: '0 1em 1em 1em',
    },
    input: {
        marginTop: '1em',
    },
    button: {
        width: '100%',
    },
    icon: {
        marginRight: theme.spacing(1),
    },
}); }, { name: 'RaLoginForm' });
var Input = function (_a) {
    var _b = _a.meta, touched = _b.touched, error = _b.error, // eslint-disable-line react/prop-types
    inputProps = _a.input, // eslint-disable-line react/prop-types
    props = __rest(_a, ["meta", "input"]);
    return (react_1.default.createElement(TextField_1.default, __assign({ error: !!(touched && error), helperText: touched && error }, inputProps, props, { fullWidth: true })));
};
var LoginForm = function (_a) {
    var redirectTo = _a.redirectTo;
    var _b = ra_core_1.useSafeSetState(false), loading = _b[0], setLoading = _b[1];
    var login = ra_core_1.useLogin();
    var translate = ra_core_1.useTranslate();
    var notify = ra_core_1.useNotify();
    var classes = useStyles({});
    var validate = function (values) {
        var errors = { username: undefined, password: undefined };
        if (!values.username) {
            errors.username = translate('ra.validation.required');
        }
        if (!values.password) {
            errors.password = translate('ra.validation.required');
        }
        return errors;
    };
    var submit = function (values) {
        setLoading(true);
        login(values, redirectTo)
            .then(function () {
            setLoading(false);
        })
            .catch(function (error) {
            setLoading(false);
            notify(typeof error === 'string'
                ? error
                : typeof error === 'undefined' || !error.message
                    ? 'ra.auth.sign_in_error'
                    : error.message, 'warning');
        });
    };
    return (react_1.default.createElement(react_final_form_1.Form, { onSubmit: submit, validate: validate, render: function (_a) {
            var handleSubmit = _a.handleSubmit;
            return (react_1.default.createElement("form", { onSubmit: handleSubmit, noValidate: true },
                react_1.default.createElement("div", { className: classes.form },
                    react_1.default.createElement("div", { className: classes.input },
                        react_1.default.createElement(react_final_form_1.Field, { autoFocus: true, id: "username", name: "username", component: Input, label: translate('ra.auth.username'), disabled: loading })),
                    react_1.default.createElement("div", { className: classes.input },
                        react_1.default.createElement(react_final_form_1.Field, { id: "password", name: "password", component: Input, label: translate('ra.auth.password'), type: "password", disabled: loading, autoComplete: "current-password" }))),
                react_1.default.createElement(CardActions_1.default, null,
                    react_1.default.createElement(Button_1.default, { variant: "contained", type: "submit", color: "primary", disabled: loading, className: classes.button },
                        loading && (react_1.default.createElement(CircularProgress_1.default, { className: classes.icon, size: 18, thickness: 2 })),
                        translate('ra.auth.sign_in')))));
        } }));
};
LoginForm.propTypes = {
    redirectTo: prop_types_1.default.string,
};
exports.default = LoginForm;
