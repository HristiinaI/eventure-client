import React from 'react';
import pure from 'recompose/pure';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useTranslate } from 'ra-core';
var PaginationLimit = function () {
    var translate = useTranslate();
    return (React.createElement(CardContent, null,
        React.createElement(Typography, { variant: "body2" }, translate('ra.navigation.no_results'))));
};
export default pure(PaginationLimit);
