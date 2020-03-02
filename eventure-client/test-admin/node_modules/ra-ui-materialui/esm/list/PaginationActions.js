import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { useTranslate } from 'ra-core';
var useStyles = makeStyles(function (theme) { return ({
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
    var translate = useTranslate();
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
            return pageNum === '.' ? (React.createElement("span", { key: "hyphen_" + index, className: classes.hellip }, "\u2026")) : (React.createElement(Button, { size: size, className: "page-number", color: pageNum === page + 1 ? 'default' : color, key: pageNum, "data-page": pageNum - 1, onClick: gotoPage }, pageNum));
        });
    };
    var nbPages = getNbPages();
    if (nbPages === 1) {
        return React.createElement("div", { className: classes.actions });
    }
    return (React.createElement("div", { className: classes.actions },
        page > 0 && (React.createElement(Button, { color: color, size: size, key: "prev", onClick: prevPage, className: "previous-page" },
            React.createElement(ChevronLeft, null),
            translate('ra.navigation.prev'))),
        renderPageNums(),
        page !== nbPages - 1 && (React.createElement(Button, { color: color, size: size, key: "next", onClick: nextPage, className: "next-page" },
            translate('ra.navigation.next'),
            React.createElement(ChevronRight, null)))));
}
/**
 * PaginationActions propTypes are copied over from material-ui’s
 * TablePaginationActions propTypes. See
 * https://github.com/mui-org/material-ui/blob/869692ecf3812bc4577ed4dde81a9911c5949695/packages/material-ui/src/TablePaginationActions/TablePaginationActions.js#L53-L85
 * for reference.
 */
PaginationActions.propTypes = {
    backIconButtonProps: PropTypes.object,
    count: PropTypes.number.isRequired,
    classes: PropTypes.object,
    nextIconButtonProps: PropTypes.object,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    color: PropTypes.oneOf(['primary', 'secondary']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};
PaginationActions.defaultProps = {
    color: 'primary',
    size: 'small',
};
export default React.memo(PaginationActions);
