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
import React, { Children, cloneElement, memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import get from 'lodash/get';
import { makeStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';
import { useReference, getResourceLinkPath } from 'ra-core';
import LinearProgress from '../layout/LinearProgress';
import Link from '../Link';
import sanitizeRestProps from './sanitizeRestProps';
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
    if (React.Children.count(children) !== 1) {
        throw new Error('<ReferenceField> only accepts a single child');
    }
    var _b = useReference({
        reference: props.reference,
        id: get(record, source),
    }), loaded = _b.loaded, error = _b.error, referenceRecord = _b.referenceRecord;
    var resourceLinkPath = getResourceLinkPath(__assign({ record: record, source: source }, props));
    return (React.createElement(PureReferenceFieldView, __assign({}, props, { loaded: loaded, error: error, referenceRecord: referenceRecord, resourceLinkPath: resourceLinkPath }), children));
};
ReferenceField.propTypes = {
    addLabel: PropTypes.bool,
    basePath: PropTypes.string,
    children: PropTypes.element.isRequired,
    classes: PropTypes.object,
    className: PropTypes.string,
    cellClassName: PropTypes.string,
    headerClassName: PropTypes.string,
    label: PropTypes.string,
    record: PropTypes.object,
    reference: PropTypes.string.isRequired,
    resource: PropTypes.string,
    sortBy: PropTypes.string,
    source: PropTypes.string.isRequired,
    translateChoice: PropTypes.func,
    linkType: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.func,
    ]),
    link: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.func,
    ]).isRequired,
};
ReferenceField.defaultProps = {
    addLabel: true,
    classes: {},
    link: 'edit',
};
var useStyles = makeStyles(function (theme) { return ({
    link: {
        color: theme.palette.primary.main,
    },
}); }, { name: 'RaReferenceField' });
// useful to prevent click bubbling in a datagrid with rowClick
var stopPropagation = function (e) { return e.stopPropagation(); };
export var ReferenceFieldView = function (_a) {
    var basePath = _a.basePath, children = _a.children, className = _a.className, classesOverride = _a.classes, error = _a.error, loaded = _a.loaded, record = _a.record, reference = _a.reference, referenceRecord = _a.referenceRecord, resource = _a.resource, resourceLinkPath = _a.resourceLinkPath, source = _a.source, _b = _a.translateChoice, translateChoice = _b === void 0 ? false : _b, rest = __rest(_a, ["basePath", "children", "className", "classes", "error", "loaded", "record", "reference", "referenceRecord", "resource", "resourceLinkPath", "source", "translateChoice"]);
    var classes = useStyles({ classes: classesOverride });
    if (!loaded) {
        return React.createElement(LinearProgress, null);
    }
    if (error) {
        return (React.createElement(ErrorIcon, { "aria-errormessage": error.message ? error.message : error, color: "error", fontSize: "small" }));
    }
    if (!referenceRecord) {
        return null;
    }
    if (resourceLinkPath) {
        return (React.createElement(Link, { to: resourceLinkPath, className: className, onClick: stopPropagation }, cloneElement(Children.only(children), __assign({ className: classnames(children.props.className, classes.link // force color override for Typography components
            ), record: referenceRecord, resource: reference, basePath: basePath,
            translateChoice: translateChoice }, sanitizeRestProps(rest)))));
    }
    return cloneElement(Children.only(children), __assign({ record: referenceRecord, resource: reference, basePath: basePath,
        translateChoice: translateChoice }, sanitizeRestProps(rest)));
};
ReferenceFieldView.propTypes = {
    basePath: PropTypes.string,
    children: PropTypes.element,
    className: PropTypes.string,
    classes: PropTypes.object,
    loading: PropTypes.bool,
    record: PropTypes.object,
    reference: PropTypes.string,
    referenceRecord: PropTypes.object,
    resource: PropTypes.string,
    resourceLinkPath: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    source: PropTypes.string,
    translateChoice: PropTypes.bool,
};
var PureReferenceFieldView = memo(ReferenceFieldView);
export default ReferenceField;
