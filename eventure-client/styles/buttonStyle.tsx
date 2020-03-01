import {
    grayColor,
    primaryColor,
    whiteColor,
    blackColor,
    hexToRgb
  } from './material-dashboard-react';
  import { createStyles } from '@material-ui/core';
  
  const buttonStyle = createStyles({
    button: {
      minHeight: 'auto',
      minWidth: 'auto',
      backgroundColor: grayColor[0],
      color: whiteColor,
      boxShadow:
        '0 2px 2px 0 rgba(' +
        hexToRgb(grayColor[0]) +
        ', 0.14), 0 3px 1px -2px rgba(' +
        hexToRgb(grayColor[0]) +
        ', 0.2), 0 1px 5px 0 rgba(' +
        hexToRgb(grayColor[0]) +
        ', 0.12)',
      border: 'none',
      borderRadius: '3px',
      position: 'relative',
      padding: '12px 30px',
      margin: '.3125rem 1px',
      fontSize: '12px',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0',
      willChange: 'box-shadow, transform',
      transition:
        'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      lineHeight: '1.42857143',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      touchAction: 'manipulation',
      cursor: 'pointer',
      '&:hover,&:focus': {
        color: whiteColor,
        backgroundColor: grayColor[0],
        boxShadow:
          '0 14px 26px -12px rgba(' +
          hexToRgb(grayColor[0]) +
          ', 0.42), 0 4px 23px 0px rgba(' +
          hexToRgb(blackColor) +
          ', 0.12), 0 8px 10px -5px rgba(' +
          hexToRgb(grayColor[0]) +
          ', 0.2)'
      },
      '& .fab,& .fas,& .far,& .fal, &.material-icons': {
        position: 'relative',
        display: 'inline-block',
        top: '0',
        marginTop: '-1em',
        marginBottom: '-1em',
        fontSize: '1.1rem',
        marginRight: '4px',
        verticalAlign: 'middle'
      },
      '& svg': {
        position: 'relative',
        display: 'inline-block',
        top: '0',
        width: '18px',
        height: '18px',
        marginRight: '4px',
        verticalAlign: 'middle'
      },
      '&$justIcon': {
        '& .fab,& .fas,& .far,& .fal,& .material-icons': {
          marginTop: '0px',
          position: 'absolute',
          width: '100%',
          transform: 'none',
          left: '0px',
          top: '0px',
          height: '100%',
          lineHeight: '41px',
          fontSize: '20px'
        }
      }
    },
    white: {
      '&,&:focus,&:hover': {
        backgroundColor: whiteColor,
        color: grayColor[0]
      }
    },
    primary: {
      backgroundColor: primaryColor[0],
      boxShadow:
        '0 2px 2px 0 rgba(' +
        hexToRgb(primaryColor[0]) +
        ', 0.14), 0 3px 1px -2px rgba(' +
        hexToRgb(primaryColor[0]) +
        ', 0.2), 0 1px 5px 0 rgba(' +
        hexToRgb(primaryColor[0]) +
        ', 0.12)',
      '&:hover,&:focus': {
        backgroundColor: primaryColor[0],
        boxShadow:
          '0 14px 26px -12px rgba(' +
          hexToRgb(primaryColor[0]) +
          ', 0.42), 0 4px 23px 0px rgba(' +
          hexToRgb(blackColor) +
          ', 0.12), 0 8px 10px -5px rgba(' +
          hexToRgb(primaryColor[0]) +
          ', 0.2)'
      }
    },
  });
  
  export default buttonStyle;
  