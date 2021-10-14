import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Link as ReactLink } from 'react-router-dom';
import {
  toggleShowMenu,
  selectShowMenu,
} from '../../../redux/utils/utils.slice';
import { useDispatch, useSelector } from 'react-redux';

const SideMenu: React.FC = () => {
  const isOpen = useSelector(selectShowMenu);
  const dispatch = useDispatch();
  const closeHandler = () => dispatch(toggleShowMenu());
  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={closeHandler}
      sx={{ top: '64px' }}
      hideBackdrop={true}
      classes={{ modal: 'drawer' }}
    >
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={ReactLink} to="/" onClick={closeHandler}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={ReactLink}
              to="/limits"
              onClick={closeHandler}
            >
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary="Limits" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={ReactLink}
              to="/templates"
              onClick={closeHandler}
            >
              <ListItemIcon>
                <AutoStoriesIcon />
              </ListItemIcon>
              <ListItemText primary="Templates" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default SideMenu;
