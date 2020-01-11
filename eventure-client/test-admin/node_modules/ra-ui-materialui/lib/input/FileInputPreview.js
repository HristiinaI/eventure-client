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
var prop_types_1 = __importDefault(require("prop-types"));
var core_1 = require("@material-ui/core");
var RemoveCircle_1 = __importDefault(require("@material-ui/icons/RemoveCircle"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var ra_core_1 = require("ra-core");
var useStyles = core_1.makeStyles(function (theme) { return ({
    removeButton: {},
    removeIcon: {
        color: theme.palette.error.main,
    },
}); }, { name: 'RaFileInputPreview' });
var FileInputPreview = function (_a) {
    var children = _a.children, className = _a.className, onRemove = _a.onRemove, file = _a.file, rest = __rest(_a, ["children", "className", "onRemove", "file"]);
    var classes = useStyles(rest);
    var translate = ra_core_1.useTranslate();
    react_1.useEffect(function () {
        return function () {
            var preview = file.rawFile ? file.rawFile.preview : file.preview;
            if (preview) {
                window.URL.revokeObjectURL(preview);
            }
        };
    }, [file]);
    return (react_1.default.createElement("div", __assign({ className: className }, rest),
        react_1.default.createElement(IconButton_1.default, { className: classes.removeButton, onClick: onRemove, "aria-label": translate('ra.action.delete'), title: translate('ra.action.delete') },
            react_1.default.createElement(RemoveCircle_1.default, { className: classes.removeIcon })),
        children));
};
FileInputPreview.propTypes = {
    children: prop_types_1.default.element.isRequired,
    className: prop_types_1.default.string,
    file: prop_types_1.default.object,
    onRemove: prop_types_1.default.func.isRequired,
};
FileInputPreview.defaultProps = {
    file: undefined,
};
exports.default = FileInputPreview;
