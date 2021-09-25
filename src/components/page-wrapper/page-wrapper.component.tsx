import { Container } from '@mui/material'
import React, { ReactNode } from 'react'
import { PageWrapperElement } from './page-wrapper.styles'

interface PageWrapperProps {
  children: string | ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => (
  <PageWrapperElement>
    <Container component="main" maxWidth="xs">
      {children}
    </Container>
  </PageWrapperElement>
)

export default PageWrapper
