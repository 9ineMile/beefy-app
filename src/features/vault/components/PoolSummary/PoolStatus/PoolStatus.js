import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const PoolStatus = ({ message }) => {
  const classes = useStyles();
  if(!message) return null;
  return (
      <div className={classes.container}>
        <div className={classes.texts}>{message}</div>
      </div>
  );
};

export default memo(PoolStatus);
