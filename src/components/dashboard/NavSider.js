import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <GroupAddIcon />
      </ListItemIcon>
      <ListItemText primary="Employee Management" />
    </ListItem>
    
    <ListItem button>
      <ListItemIcon>
        <WorkOutlineIcon/>
      </ListItemIcon>
      <ListItemText primary="Work Management" />
    </ListItem>



    <ListItem button>
      <ListItemIcon>
        <EventAvailableIcon />
      </ListItemIcon>
      <ListItemText primary="Leave Management" />
    </ListItem>




    <ListItem button>
      <ListItemIcon>
        <AttachMoneyIcon />
      </ListItemIcon>
      <ListItemText primary="Payroll Management" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CalendarTodayIcon />
      </ListItemIcon>
      <ListItemText primary="Work Calender" />
    </ListItem>
  </div>
);

