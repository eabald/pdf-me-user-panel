import { Container } from '@mui/material';
import React, { ReactNode } from 'react';
import { PageWrapperElement } from './page-wrapper.styles';
import Navbar from '../navbar/navbar.component';
import SideMenu from '../side-menu/side-menu.component';
interface PageWrapperProps {
  children: string | ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => (
  <>
    <Navbar />
    <SideMenu />
    <PageWrapperElement>
      <Container component="main" maxWidth="lg">
        {children}
      </Container>
    </PageWrapperElement>
  </>
);

export default PageWrapper;
