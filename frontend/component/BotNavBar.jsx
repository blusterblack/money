import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BarChartIcon from '@material-ui/icons/BarChart';
import EventNoteIcon from '@material-ui/icons/EventNote';

export default function BotNavBar() {
  return (
    <BottomNavigation showLabels>
      <BottomNavigationAction label="Transaction" icon={<AccountBalanceWalletIcon />} />
      <BottomNavigationAction label="Report" icon={<BarChartIcon />} />
      <BottomNavigationAction label="Add" icon={<AddCircleIcon />} />
      <BottomNavigationAction label="Planning" icon={<EventNoteIcon />} />
      <BottomNavigationAction label="Account" icon={<AccountCircleIcon />} />

    </BottomNavigation>
  );
}
