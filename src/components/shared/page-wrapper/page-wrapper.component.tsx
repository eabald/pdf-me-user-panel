import { Container } from '@mui/material';
import React, { ReactNode } from 'react';
import { PageWrapperElement } from './page-wrapper.styles';
import Navbar from '../navbar/navbar.component';

interface PageWrapperProps {
  children: string | ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => (
  <>
    <Navbar />
    <PageWrapperElement>
      <Container component="main" maxWidth="xs">
        {children}
      </Container>
    </PageWrapperElement>
  </>
);

export default PageWrapper;
