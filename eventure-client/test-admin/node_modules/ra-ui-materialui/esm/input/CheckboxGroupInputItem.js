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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { useChoices } from 'ra-core';
var useStyles = makeStyles({
    checkbox: {
        height: 32,
    },
}, { name: 'RaCheckboxGroupInputItem' });
var CheckboxGroupInputItem = function (_a) {
    var id = _a.id, choice = _a.choice, onChange = _a.onChange, optionText = _a.optionText, optionValue = _a.optionValue, translateChoice = _a.translateChoice, value = _a.value, rest = __rest(_a, ["id", "choice", "onChange", "optionText", "optionValue", "translateChoice", "value"]);
    var classes = useStyles({});
    var _b = useChoices({
        optionText: optionText,
        optionValue: optionValue,
        translateChoice: translateChoice,
    }), getChoiceText = _b.getChoiceText, getChoiceValue = _b.getChoiceValue;
    var choiceName = getChoiceText(choice);
    return (React.createElement(FormControlLabel, { htmlFor: id + "_" + getChoiceValue(choice), key: getChoiceValue(choice), onChange: onChange, control: React.createElement(Checkbox, __assign({ id: id + "_" + getChoiceValue(choice), color: "primary", className: classes.checkbox, checked: value
                ? value.find(function (v) { return v == getChoiceValue(choice); }) !== // eslint-disable-line eqeqeq
                    undefined
                : false, value: String(getChoiceValue(choice)) }, rest)), label: choiceName }));
};
export default CheckboxGroupInputItem;
