"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var useScrollTrigger_1 = __importDefault(require("@material-ui/core/useScrollTrigger"));
var Slide_1 = __importDefault(require("@material-ui/core/Slide"));
function HideOnScroll(props) {
    var children = props.children;
    var trigger = useScrollTrigger_1.default();
    return (react_1.default.createElement(Slide_1.default, { appear: false, direction: "down", in: !trigger }, children));
}
HideOnScroll.propTypes = {
    children: prop_types_1.default.node.isRequired,
};
exports.default = HideOnScroll;
