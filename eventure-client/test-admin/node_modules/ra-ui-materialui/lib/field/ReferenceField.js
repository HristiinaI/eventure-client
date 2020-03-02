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
var classnames_1 = __importDefault(require("classnames"));
var get_1 = __importDefault(require("lodash/get"));
var styles_1 = require("@material-ui/core/styles");
var Error_1 = __importDefault(require("@material-ui/icons/Error"));
var ra_core_1 = require("ra-core");
var LinearProgress_1 = __importDefault(require("../layout/LinearProgress"));
var Link_1 = __importDefault(require("../Link"));
var sanitizeRestProps_1 = __importDefault(require("./sanitizeRestProps"));
/**
 * Fetch reference record, and delegate rendering to child component.
 *
 * The reference prop sould be the name of one of the <Resource> components
 * added as <Admin> child.
 *
 * @example
 * <ReferenceField label="User" source="userId" reference="users">
 *     <TextField source="name" />
 * </ReferenceField>
 *
 * @default
 * By default, includes a link to the <Edit> page of the related record
 * (`/users/:userId` in the previous example).
 *
 * Set the `link` prop to "show" to link to the <Show> page instead.
 *
 * @example
 * <ReferenceField label="User" source="userId" reference="users" link="show">
 *     <TextField source="name" />
 * </ReferenceField>
 *
 * @default
 * You can also prevent `<ReferenceField>` from adding link to children by setting
 * `link` to false.
 *
 * @example
 * <ReferenceField label="User" source="userId" reference="users" link={false}>
 *     <TextField source="name" />
 * </ReferenceField>
 *
 * @default
 * Alternatively, you can also pass a custom function to `link`. It must take reference and record
 * as arguments and return a string
 *
 * @example
 * <ReferenceField label="User" source="userId" reference="users" link={(reference, record) => "/path/to/${reference}/${record}"}>
 *     <TextField source="name" />
 * </ReferenceField>
 *
 * @default
 * In previous versions of React-Admin, the prop `linkType` was used. It is now deprecated and replaced with `link`. However
 * backward-compatibility is still kept
 */
var ReferenceField = function (_a) {
    var children = _a.children, record = _a.record, source = _a.source, props = __rest(_a, ["children", "record", "source"]);
    if (react_1.default.Children.count(children) !== 1) {
        throw new Error('<ReferenceField> only accepts a single child');
    }
    var _b = ra_core_1.useReference({
        reference: props.reference,
        id: get_1.default(record, source),
    }), loaded = _b.loaded, error = _b.error, referenceRecord = _b.referenceRecord;
    var resourceLinkPath = ra_core_1.getResourceLinkPath(__assign({ record: record, source: source }, props));
    return (react_1.default.createElement(PureReferenceFieldView, __assign({}, props, { loaded: loaded, error: error, referenceRecord: referenceRecord, resourceLinkPath: resourceLinkPath }), children));
};
ReferenceField.propTypes = {
    addLabel: prop_types_1.default.bool,
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.element.isRequired,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    cellClassName: prop_types_1.default.string,
    headerClassName: prop_types_1.default.string,
    label: prop_types_1.default.string,
    record: prop_types_1.default.object,
    reference: prop_types_1.default.string.isRequired,
    resource: prop_types_1.default.string,
    sortBy: prop_types_1.default.string,
    source: prop_types_1.default.string.isRequired,
    translateChoice: prop_types_1.default.func,
    linkType: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]),
    link: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]).isRequired,
};
ReferenceField.defaultProps = {
    addLabel: true,
    classes: {},
    link: 'edit',
};
var useStyles = styles_1.makeStyles(function (theme) { return ({
    link: {
        color: theme.palette.primary.main,
    },
}); }, { name: 'RaReferenceField' });
// useful to prevent click bubbling in a datagrid with rowClick
var stopPropagation = function (e) { return e.stopPropagation(); };
exports.ReferenceFieldView = function (_a) {
    var basePath = _a.basePath, children = _a.children, className = _a.className, classesOverride = _a.classes, error = _a.error, loaded = _a.loaded, record = _a.record, reference = _a.reference, referenceRecord = _a.referenceRecord, resource = _a.resource, resourceLinkPath = _a.resourceLinkPath, source = _a.source, _b = _a.translateChoice, translateChoice = _b === void 0 ? false : _b, rest = __rest(_a, ["basePath", "children", "className", "classes", "error", "loaded", "record", "reference", "referenceRecord", "resource", "resourceLinkPath", "source", "translateChoice"]);
    var classes = useStyles({ classes: classesOverride });
    if (!loaded) {
        return react_1.default.createElement(LinearProgress_1.default, null);
    }
    if (error) {
        return (react_1.default.createElement(Error_1.default, { "aria-errormessage": error.message ? error.message : error, color: "error", fontSize: "small" }));
    }
    if (!referenceRecord) {
        return null;
    }
    if (resourceLinkPath) {
        return (react_1.default.createElement(Link_1.default, { to: resourceLinkPath, className: className, onClick: stopPropagation }, react_1.cloneElement(react_1.Children.only(children), __assign({ className: classnames_1.default(children.props.className, classes.link // force color override for Typography components
            ), record: referenceRecord, resource: reference, basePath: basePath,
            translateChoice: translateChoice }, sanitizeRestProps_1.default(rest)))));
    }
    return react_1.cloneElement(react_1.Children.only(children), __assign({ record: referenceRecord, resource: reference, basePath: basePath,
        translateChoice: translateChoice }, sanitizeRestProps_1.default(rest)));
};
exports.ReferenceFieldView.propTypes = {
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.element,
    className: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    loading: prop_types_1.default.bool,
    record: prop_types_1.default.object,
    reference: prop_types_1.default.string,
    referenceRecord: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    resourceLinkPath: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    source: prop_types_1.default.string,
    translateChoice: prop_types_1.default.bool,
};
var PureReferenceFieldView = react_1.memo(exports.ReferenceFieldView);
exports.default = ReferenceField;
