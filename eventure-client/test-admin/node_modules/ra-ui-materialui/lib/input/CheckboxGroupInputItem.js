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
var FormControlLabel_1 = __importDefault(require("@material-ui/core/FormControlLabel"));
var Checkbox_1 = __importDefault(require("@material-ui/core/Checkbox"));
var styles_1 = require("@material-ui/core/styles");
var ra_core_1 = require("ra-core");
var useStyles = styles_1.makeStyles({
    checkbox: {
        height: 32,
    },
}, { name: 'RaCheckboxGroupInputItem' });
var CheckboxGroupInputItem = function (_a) {
    var id = _a.id, choice = _a.choice, onChange = _a.onChange, optionText = _a.optionText, optionValue = _a.optionValue, translateChoice = _a.translateChoice, value = _a.value, rest = __rest(_a, ["id", "choice", "onChange", "optionText", "optionValue", "translateChoice", "value"]);
    var classes = useStyles({});
    var _b = ra_core_1.useChoices({
        optionText: optionText,
        optionValue: optionValue,
        translateChoice: translateChoice,
    }), getChoiceText = _b.getChoiceText, getChoiceValue = _b.getChoiceValue;
    var choiceName = getChoiceText(choice);
    return (react_1.default.createElement(FormControlLabel_1.default, { htmlFor: id + "_" + getChoiceValue(choice), key: getChoiceValue(choice), onChange: onChange, control: react_1.default.createElement(Checkbox_1.default, __assign({ id: id + "_" + getChoiceValue(choice), color: "primary", className: classes.checkbox, checked: value
                ? value.find(function (v) { return v == getChoiceValue(choice); }) !== // eslint-disable-line eqeqeq
                    undefined
                : false, value: String(getChoiceValue(choice)) }, rest)), label: choiceName }));
};
exports.default = CheckboxGroupInputItem;
