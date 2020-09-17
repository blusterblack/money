import React from 'react';
import {
  AppBar, Toolbar, Typography, IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  typo: {
    flexGrow: 1,
  },
});
export default function TopAppBar(props) {
  const { walletName, balance, currency } = props;
  const classes = useStyle();
  return (
    <AppBar>
      <Toolbar>
        <Typography className={classes.typo}>{walletName + balance + currency}</Typography>
        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <IconButton>
          <MenuIcon />
        </IconButton>

      </Toolbar>
    </AppBar>
  );
}
TopAppBar.propTypes = {
  walletName: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
