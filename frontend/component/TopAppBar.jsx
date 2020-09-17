import React from 'react';
import {
  AppBar, Toolbar, Typography, IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  typo: {
    flexGrow: 1,
    textAlign: 'center',
  },
});
export default function TopAppBar(props) {
  const {
    walletName, balance, currency, date,
  } = props;
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const classes = useStyle();
  return (
    <AppBar>
      <Toolbar>
        <Typography className={classes.typo}>{`${walletName} : ${balance}${currency}`}</Typography>
        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <IconButton>
          <MenuIcon />
        </IconButton>

      </Toolbar>
      <Toolbar>
        <IconButton><ArrowBackIosIcon /></IconButton>
        <Typography className={classes.typo}>{`${monthNames[date.getMonth()]} ${date.getFullYear()}`}</Typography>
        <IconButton><ArrowForwardIosIcon /></IconButton>
      </Toolbar>

    </AppBar>
  );
}
TopAppBar.propTypes = {
  walletName: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};
