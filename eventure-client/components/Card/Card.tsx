import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';

import cardStyle from '../../styles/cardStyle';
function Card({ ...props }: any) {
  const {
    classes,
    className,
    children,
    plain,
    profile,
    chart,
    ...rest
  } = props;
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardChart]: chart,
    [className]: className !== undefined
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}



export default withStyles(cardStyle)(Card);