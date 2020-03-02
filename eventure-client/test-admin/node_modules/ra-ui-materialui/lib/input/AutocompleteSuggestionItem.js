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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var parse_1 = __importDefault(require("autosuggest-highlight/parse"));
var match_1 = __importDefault(require("autosuggest-highlight/match"));
var core_1 = require("@material-ui/core");
var classnames_1 = __importDefault(require("classnames"));
var useStyles = core_1.makeStyles(function (theme) { return ({
    root: {
        fontWeight: 400,
    },
    selected: {
        fontWeight: 500,
    },
    suggestion: {
        display: 'block',
        fontFamily: theme.typography.fontFamily,
    },
    suggestionText: { fontWeight: 300 },
    highlightedSuggestionText: { fontWeight: 500 },
}); }, { name: 'RaAutocompleteSuggestionItem' });
var AutocompleteSuggestionItem = function (_a) {
    var _b;
    var suggestion = _a.suggestion, index = _a.index, highlightedIndex = _a.highlightedIndex, isSelected = _a.isSelected, filterValue = _a.filterValue, classesOverride = _a.classes, getSuggestionText = _a.getSuggestionText, rest = __rest(_a, ["suggestion", "index", "highlightedIndex", "isSelected", "filterValue", "classes", "getSuggestionText"]);
    var classes = useStyles({ classes: classesOverride });
    var isHighlighted = highlightedIndex === index;
    var suggestionText = getSuggestionText(suggestion);
    var matches;
    var parts;
    if (!react_1.isValidElement(suggestionText)) {
        matches = match_1.default(suggestionText, filterValue);
        parts = parse_1.default(suggestionText, matches);
    }
    return (react_1.default.createElement(core_1.MenuItem, __assign({ key: suggestionText, selected: isHighlighted, className: classnames_1.default(classes.root, (_b = {},
            _b[classes.selected] = isSelected,
            _b)) }, rest), react_1.isValidElement(suggestionText) ? (react_1.cloneElement(suggestionText, { filterValue: filterValue })) : (react_1.default.createElement("div", { className: classes.suggestion }, parts.map(function (part, index) {
        return part.highlight ? (react_1.default.createElement("span", { key: index, className: classes.highlightedSuggestionText }, part.text)) : (react_1.default.createElement("strong", { key: index, className: classes.suggestionText }, part.text));
    })))));
};
exports.default = AutocompleteSuggestionItem;
