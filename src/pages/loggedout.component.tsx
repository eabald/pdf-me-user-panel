import React, { useEffect } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutStart } from '../redux/auth/auth.slice';
import { Box, Container, Typography, Link } from '@mui/material';
import PageWrapper from '../components/page-wrapper/page-wrapper.component';

interface LoggedOutProps {}

const LoggedOut: React.FC<LoggedOutProps> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(signOutStart());
  });
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
