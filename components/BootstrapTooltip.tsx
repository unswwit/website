import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
    '@media (prefers-color-scheme:dark)': {
      color: 'var(--grey)',
    },
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    '@media (prefers-color-scheme:dark)': {
      backgroundColor: 'var(--grey)',
    },
  },
}));

export const BootstrapTooltip = (props: any) => {
  const classes = useStylesBootstrap();
  return <Tooltip arrow classes={classes} {...props} />;
};
