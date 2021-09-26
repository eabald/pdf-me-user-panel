import React, { Suspense } from 'react';
import { Router as DomRouter } from 'react-router-dom';
import history from './redux/history';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
import { ThemeProvider } from '@mui/material/styles';
import MainTheme from './themes/main.theme';
import Router from './router';
import PageLoader from './components/page-loader/page-loader.component';

function App() {
  return (
    <PersistGate loading={<PageLoader />} persistor={persistor}>
      <ThemeProvider theme={MainTheme}>
        <Suspense fallback={<PageLoader />}>
          <DomRouter history={history}>
            <Router />
          </DomRouter>
        </Suspense>
      </ThemeProvider>
    </PersistGate>
  );
}

export default App;
