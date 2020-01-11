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
var Card_1 = __importDefault(require("@material-ui/core/Card"));
var styles_1 = require("@material-ui/core/styles");
var classnames_1 = __importDefault(require("classnames"));
var ra_core_1 = require("ra-core");
var ShowActions_1 = __importDefault(require("./ShowActions"));
var TitleForRecord_1 = __importDefault(require("../layout/TitleForRecord"));
/**
 * Page component for the Show view
 *
 * The `<Show>` component renders the page title and actions,
 * fetches the record from the data provider.
 * It is not responsible for rendering the actual form -
 * that's the job of its child component (usually `<SimpleShowLayout>`),
 * to which it passes pass the `record` as prop.
 *
 * The <Show> component accepts the following props:
 *
 * - actions
 * - aside
 * - component
 * - title
 *
 * @example
 *
 * // in src/posts.js
 * import React from 'react';
 * import { Show, SimpleShowLayout, TextField } from 'react-admin';
 *
 * export const PostShow = (props) => (
 *     <Show {...props}>
 *         <SimpleShowLayout>
 *             <TextField source="title" />
 *         </SimpleShowLayout>
 *     </Show>
 * );
 *
 * // in src/App.js
 * import React from 'react';
 * import { Admin, Resource } from 'react-admin';
 *
 * import { PostShow } from './posts';
 *
 * const App = () => (
 *     <Admin dataProvider={...}>
 *         <Resource name="posts" show={PostShow} />
 *     </Admin>
 * );
 * export default App;
 */
var Show = function (props) { return react_1.default.createElement(exports.ShowView, __assign({}, props, ra_core_1.useShowController(props))); };
Show.propTypes = {
    actions: prop_types_1.default.element,
    aside: prop_types_1.default.element,
    children: prop_types_1.default.element,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    hasCreate: prop_types_1.default.bool,
    hasEdit: prop_types_1.default.bool,
    hasList: prop_types_1.default.bool,
    hasShow: prop_types_1.default.bool,
    id: prop_types_1.default.any.isRequired,
    resource: prop_types_1.default.string.isRequired,
    title: prop_types_1.default.node,
};
exports.ShowView = function (_a) {
    var _b;
    var actions = _a.actions, aside = _a.aside, basePath = _a.basePath, children = _a.children, classesOverride = _a.classes, className = _a.className, Content = _a.component, defaultTitle = _a.defaultTitle, hasEdit = _a.hasEdit, hasList = _a.hasList, record = _a.record, resource = _a.resource, title = _a.title, version = _a.version, rest = __rest(_a, ["actions", "aside", "basePath", "children", "classes", "className", "component", "defaultTitle", "hasEdit", "hasList", "record", "resource", "title", "version"]);
    var classes = useStyles({ classes: classesOverride });
    if (typeof actions === 'undefined' && hasEdit) {
        actions = react_1.default.createElement(ShowActions_1.default, null);
    }
    if (!children) {
        return null;
    }
    return (react_1.default.createElement("div", __assign({ className: classnames_1.default('show-page', classes.root, className) }, sanitizeRestProps(rest)),
        react_1.default.createElement(TitleForRecord_1.default, { title: title, record: record, defaultTitle: defaultTitle }),
        actions &&
            react_1.cloneElement(actions, __assign({ basePath: basePath, data: record, hasList: hasList,
                hasEdit: hasEdit,
                resource: resource }, actions.props)),
        react_1.default.createElement("div", { className: classnames_1.default(classes.main, (_b = {},
                _b[classes.noActions] = !actions,
                _b)) },
            react_1.default.createElement(Content, { className: classes.card }, record &&
                react_1.cloneElement(react_1.Children.only(children), {
                    resource: resource,
                    basePath: basePath,
                    record: record,
                    version: version,
                })),
            aside &&
                react_1.cloneElement(aside, {
                    resource: resource,
                    basePath: basePath,
                    record: record,
                    version: version,
                }))));
};
exports.ShowView.propTypes = {
    actions: prop_types_1.default.element,
    aside: prop_types_1.default.element,
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.element,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    defaultTitle: prop_types_1.default.any,
    hasEdit: prop_types_1.default.bool,
    hasList: prop_types_1.default.bool,
    loading: prop_types_1.default.bool,
    loaded: prop_types_1.default.bool,
    record: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    title: prop_types_1.default.any,
    version: prop_types_1.default.node,
};
exports.ShowView.defaultProps = {
    classes: {},
    component: Card_1.default,
};
var useStyles = styles_1.makeStyles({
    root: {},
    main: {
        display: 'flex',
    },
    noActions: {
        marginTop: '1em',
    },
    card: {
        flex: '1 1 auto',
    },
}, { name: 'RaShow' });
var sanitizeRestProps = function (_a) {
    var actions = _a.actions, aside = _a.aside, title = _a.title, children = _a.children, className = _a.className, id = _a.id, data = _a.data, loading = _a.loading, loaded = _a.loaded, resource = _a.resource, hasCreate = _a.hasCreate, hasEdit = _a.hasEdit, hasList = _a.hasList, hasShow = _a.hasShow, version = _a.version, match = _a.match, location = _a.location, history = _a.history, options = _a.options, locale = _a.locale, permissions = _a.permissions, translate = _a.translate, rest = __rest(_a, ["actions", "aside", "title", "children", "className", "id", "data", "loading", "loaded", "resource", "hasCreate", "hasEdit", "hasList", "hasShow", "version", "match", "location", "history", "options", "locale", "permissions", "translate"]);
    return rest;
};
exports.default = Show;
