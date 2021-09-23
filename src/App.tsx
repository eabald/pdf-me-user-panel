import React, { Suspense } from 'react';
import { Router as DomRouter } from 'react-router-dom';
import history from './redux/history';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
import { ThemeProvider } from '@mui/material/styles';
import MainTheme from './themes/main.theme';
import Router from './router';

function App() {
  return (
    <PersistGate loading={'Loading...'} persistor={persistor}>
      <ThemeProvider theme={MainTheme}>
        <Suspense fallback={'Loading...'}>
          <DomRouter history={history}>
            <Router />
          </DomRouter>
        </Suspense>
      </ThemeProvider>
    </PersistGate>
  );
}

export default App;
