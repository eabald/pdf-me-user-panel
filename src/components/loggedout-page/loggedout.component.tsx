import React, { useEffect } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOutStart, selectLoggedIn } from '../../redux/auth/auth.slice';
import { Box, Container, Typography, Link } from '@mui/material';
import PageWrapper from '../shared/page-wrapper/page-wrapper.component';
import { useHistory } from 'react-router-dom';

interface LoggedOutProps {}

const LoggedOut: React.FC<LoggedOutProps> = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectLoggedIn);
  const history = useHistory();

  useEffect(() => {
    if (loggedIn) {
      dispatch(signOutStart());
    } else {
      setTimeout(() => {
        history.push('/login');
      }, 5000);
    }
  }, [dispatch, loggedIn, history]);
  return (
    <PageWrapper>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Container component="main" sx={{ mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            Logged out.
          </Typography>
          <Link to="/login" component={ReactLink}>
            <Typography variant="body1">Go back to login</Typography>
          </Link>
        </Container>
      </Box>
    </PageWrapper>
  );
};

export default LoggedOut;
