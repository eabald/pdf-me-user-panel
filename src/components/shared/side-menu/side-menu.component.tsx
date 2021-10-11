import React from 'react';
import { Drawer } from '@mui/material';
import { toggleShowMenu, selectShowMenu } from '../../../redux/utils/utils.slice';
import { useDispatch, useSelector } from 'react-redux';

const SideMenu: React.FC = () => {
  const isOpen = useSelector(selectShowMenu);
  const dispatch = useDispatch();
  const closeHandler = () => dispatch(toggleShowMenu())
  return <Drawer anchor="left" open={isOpen} onClose={closeHandler}>side menu content</Drawer>;
};

export default SideMenu;
