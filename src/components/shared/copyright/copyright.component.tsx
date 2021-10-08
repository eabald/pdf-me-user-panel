import React from 'react';
import { Link, Typography, Box } from '@mui/material';

const Copyright: React.FC<any> = (props) => (
  <Box component="footer" sx={{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  }}>
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Pdf-me
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  </Box>
);

export default Copyright;
