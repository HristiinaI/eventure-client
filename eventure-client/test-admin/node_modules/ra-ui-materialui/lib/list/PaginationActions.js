"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var styles_1 = require("@material-ui/core/styles");
var ChevronLeft_1 = __importDefault(require("@material-ui/icons/ChevronLeft"));
var ChevronRight_1 = __importDefault(require("@material-ui/icons/ChevronRight"));
var ra_core_1 = require("ra-core");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    actions: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: 20,
    },
    hellip: { padding: '1.2em' },
}); }, { name: 'RaPaginationActions' });
function PaginationActions(_a) {
    var classesOverride = _a.classes, page = _a.page, rowsPerPage = _a.rowsPerPage, count = _a.count, onChangePage = _a.onChangePage, color = _a.color, size = _a.size;
    var classes = useStyles({ classes: classesOverride });
    var translate = ra_core_1.useTranslate();
    /**
     * Warning: material-ui's page is 0-based
     */
    var range = function () {
        var nbPages = Math.ceil(count / rowsPerPage) || 1;
        if (isNaN(page) || nbPages === 1) {
            return [];
        }
        var input = [];
        // display page links around the current page
        if (page > 1) {
            input.push(1);
        }
        if (page === 3) {
            input.push(2);
        }
        if (page > 3) {
            input.push('.');
        }
        if (page > 0) {
            input.push(page);
        }
        input.push(page + 1);
        if (page < nbPages - 1) {
            input.push(page + 2);
        }
        if (page === nbPages - 4) {
            input.push(nbPages - 1);
        }
        if (page < nbPages - 4) {
            input.push('.');
        }
        if (page < nbPages - 2) {
            input.push(nbPages);
        }
        return input;
    };
    var getNbPages = function () { return Math.ceil(count / rowsPerPage) || 1; };
    var prevPage = function (event) {
        if (page === 0) {
            throw new Error(translate('ra.navigation.page_out_from_begin'));
        }
        onChangePage(event, page - 1);
    };
    var nextPage = function (event) {
        if (page > getNbPages() - 1) {
            throw new Error(translate('ra.navigation.page_out_from_end'));
        }
        onChangePage(event, page + 1);
    };
    var gotoPage = function (event) {
        var page = parseInt(event.currentTarget.dataset.page, 10);
        if (page < 0 || page > getNbPages() - 1) {
            throw new Error(translate('ra.navigation.page_out_of_boundaries', {
                page: page + 1,
            }));
        }
        onChangePage(event, page);
    };
    var renderPageNums = function () {
        return range().map(function (pageNum, index) {
            return pageNum === '.' ? (react_1.default.createElement("span", { key: "hyphen_" + index, className: classes.hellip }, "\u2026")) : (react_1.default.createElement(Button_1.default, { size: size, className: "page-number", color: pageNum === page + 1 ? 'default' : color, key: pageNum, "data-page": pageNum - 1, onClick: gotoPage }, pageNum));
        });
    };
    var nbPages = getNbPages();
    if (nbPages === 1) {
        return react_1.default.createElement("div", { className: classes.actions });
    }
    return (react_1.default.createElement("div", { className: classes.actions },
        page > 0 && (react_1.default.createElement(Button_1.default, { color: color, size: size, key: "prev", onClick: prevPage, className: "previous-page" },
            react_1.default.createElement(ChevronLeft_1.default, null),
            translate('ra.navigation.prev'))),
        renderPageNums(),
        page !== nbPages - 1 && (react_1.default.createElement(Button_1.default, { color: color, size: size, key: "next", onClick: nextPage, className: "next-page" },
            translate('ra.navigation.next'),
            react_1.default.createElement(ChevronRight_1.default, null)))));
}
/**
 * PaginationActions propTypes are copied over from material-ui’s
 * TablePaginationActions propTypes. See
 * https://github.com/mui-org/material-ui/blob/869692ecf3812bc4577ed4dde81a9911c5949695/packages/material-ui/src/TablePaginationActions/TablePaginationActions.js#L53-L85
 * for reference.
 */
PaginationActions.propTypes = {
    backIconButtonProps: prop_types_1.default.object,
    count: prop_types_1.default.number.isRequired,
    classes: prop_types_1.default.object,
    nextIconButtonProps: prop_types_1.default.object,
    onChangePage: prop_types_1.default.func.isRequired,
    page: prop_types_1.default.number.isRequired,
    rowsPerPage: prop_types_1.default.number.isRequired,
    color: prop_types_1.default.oneOf(['primary', 'secondary']),
    size: prop_types_1.default.oneOf(['small', 'medium', 'large']),
};
PaginationActions.defaultProps = {
    color: 'primary',
    size: 'small',
};
exports.default = react_1.default.memo(PaginationActions);
