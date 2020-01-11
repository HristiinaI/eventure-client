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
var Search_1 = __importDefault(require("@material-ui/icons/Search"));
var core_1 = require("@material-ui/core");
var ra_core_1 = require("ra-core");
var TextInput_1 = __importDefault(require("./TextInput"));
var useStyles = core_1.makeStyles({
    input: {
        marginTop: 32,
    },
}, { name: 'RaSearchInput' });
var SearchInput = function (_a) {
    var classesOverride = _a.classes, props = __rest(_a, ["classes"]);
    var translate = ra_core_1.useTranslate();
    var classes = useStyles({ classes: classesOverride });
    return (react_1.default.createElement(TextInput_1.default, __assign({ hiddenLabel: true, label: "", resettable: true, placeholder: translate('ra.action.search'), InputProps: {
            endAdornment: (react_1.default.createElement(core_1.InputAdornment, { position: "end" },
                react_1.default.createElement(Search_1.default, { color: "disabled" }))),
        }, className: classes.input }, props)));
};
SearchInput.propTypes = {
    classes: prop_types_1.default.object,
};
exports.default = SearchInput;
