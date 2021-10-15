import React, { Suspense } from 'react';
import { Router as DomRouter } from 'react-router-dom';
import history from './redux/history';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
import { ThemeProvider } from '@mui/material/styles';
import MainTheme from './themes/main.theme';
import Router from './router';
import PageLoader from './components/shared/page-loader/page-loader.component';
import { useSelector } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { selectLoading } from './redux/utils/utils.slice';

function App() {
  const loading = useSelector(selectLoading);
  return (
    <PersistGate loading={<PageLoader />} persistor={persistor}>
      <CssBaseline />
      <ThemeProvider theme={MainTheme}>
        <Suspense fallback={<PageLoader />}>
          <DomRouter history={history}>
            {loading ? <PageLoader /> : ''}
            <Router />
          </DomRouter>
        </Suspense>
      </ThemeProvider>
    </PersistGate>
  );
}

export default App;
