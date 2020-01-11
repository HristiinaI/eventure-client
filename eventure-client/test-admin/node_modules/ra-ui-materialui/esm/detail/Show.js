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
import React, { cloneElement, Children } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { useShowController } from 'ra-core';
import DefaultActions from './ShowActions';
import TitleForRecord from '../layout/TitleForRecord';
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
var Show = function (props) { return React.createElement(ShowView, __assign({}, props, useShowController(props))); };
Show.propTypes = {
    actions: PropTypes.element,
    aside: PropTypes.element,
    children: PropTypes.element,
    classes: PropTypes.object,
    className: PropTypes.string,
    hasCreate: PropTypes.bool,
    hasEdit: PropTypes.bool,
    hasList: PropTypes.bool,
    hasShow: PropTypes.bool,
    id: PropTypes.any.isRequired,
    resource: PropTypes.string.isRequired,
    title: PropTypes.node,
};
export var ShowView = function (_a) {
    var _b;
    var actions = _a.actions, aside = _a.aside, basePath = _a.basePath, children = _a.children, classesOverride = _a.classes, className = _a.className, Content = _a.component, defaultTitle = _a.defaultTitle, hasEdit = _a.hasEdit, hasList = _a.hasList, record = _a.record, resource = _a.resource, title = _a.title, version = _a.version, rest = __rest(_a, ["actions", "aside", "basePath", "children", "classes", "className", "component", "defaultTitle", "hasEdit", "hasList", "record", "resource", "title", "version"]);
    var classes = useStyles({ classes: classesOverride });
    if (typeof actions === 'undefined' && hasEdit) {
        actions = React.createElement(DefaultActions, null);
    }
    if (!children) {
        return null;
    }
    return (React.createElement("div", __assign({ className: classnames('show-page', classes.root, className) }, sanitizeRestProps(rest)),
        React.createElement(TitleForRecord, { title: title, record: record, defaultTitle: defaultTitle }),
        actions &&
            cloneElement(actions, __assign({ basePath: basePath, data: record, hasList: hasList,
                hasEdit: hasEdit,
                resource: resource }, actions.props)),
        React.createElement("div", { className: classnames(classes.main, (_b = {},
                _b[classes.noActions] = !actions,
                _b)) },
            React.createElement(Content, { className: classes.card }, record &&
                cloneElement(Children.only(children), {
                    resource: resource,
                    basePath: basePath,
                    record: record,
                    version: version,
                })),
            aside &&
                cloneElement(aside, {
                    resource: resource,
                    basePath: basePath,
                    record: record,
                    version: version,
                }))));
};
ShowView.propTypes = {
    actions: PropTypes.element,
    aside: PropTypes.element,
    basePath: PropTypes.string,
    children: PropTypes.element,
    classes: PropTypes.object,
    className: PropTypes.string,
    defaultTitle: PropTypes.any,
    hasEdit: PropTypes.bool,
    hasList: PropTypes.bool,
    loading: PropTypes.bool,
    loaded: PropTypes.bool,
    record: PropTypes.object,
    resource: PropTypes.string,
    title: PropTypes.any,
    version: PropTypes.node,
};
ShowView.defaultProps = {
    classes: {},
    component: Card,
};
var useStyles = makeStyles({
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
export default Show;
