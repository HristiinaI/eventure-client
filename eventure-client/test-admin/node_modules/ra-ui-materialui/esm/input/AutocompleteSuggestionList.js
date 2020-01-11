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
import React from 'react';
import { makeStyles, Paper, Popper } from '@material-ui/core';
var useStyles = makeStyles({
    suggestionsContainer: {
        zIndex: 2,
    },
    suggestionsPaper: {
        maxHeight: '50vh',
        overflowY: 'auto',
    },
}, { name: 'RaAutocompleteSuggestionList' });
var AutocompleteSuggestionList = function (_a) {
    var children = _a.children, isOpen = _a.isOpen, menuProps = _a.menuProps, inputEl = _a.inputEl, _b = _a.classes, classesOverride = _b === void 0 ? undefined : _b, suggestionsContainerProps = _a.suggestionsContainerProps;
    var classes = useStyles({ classes: classesOverride });
    return (React.createElement(Popper, __assign({ open: isOpen, anchorEl: inputEl, className: classes.suggestionsContainer, modifiers: {} }, suggestionsContainerProps),
        React.createElement("div", __assign({}, (isOpen ? menuProps : {})),
            React.createElement(Paper, { square: true, style: {
                    marginTop: 8,
                    minWidth: inputEl ? inputEl.clientWidth : null,
                }, className: classes.suggestionsPaper }, children))));
};
export default AutocompleteSuggestionList;
