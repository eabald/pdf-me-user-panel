import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from '../../../redux/auth/auth.slice';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const loggedIn = useSelector(selectLoggedIn);
  return (
    <Box sx={{ flexGrow: 1, position: 'fixed', top: 0, right: 0, left: 0, zIndex: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {loggedIn ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            ''
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button component={Link} to="/" color="inherit" sx={{ fontSize: '1.5rem' }}>
                Pdf-me
              </Button>
          </Typography>
          {loggedIn ? (
            <Button component={Link} to="/logout" color="inherit">
              Logout
            </Button>
          ) : (
            <>
              <Button component={Link} to="/register" color="inherit">
                Register
              </Button>
              <Button component={Link} to="/login" color="inherit">
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>{' '}
    </Box>
  );
};

export default Navbar;
