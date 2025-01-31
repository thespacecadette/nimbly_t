import * as React from 'react';
import { createRoot } from 'react-dom/client';

// router
import { 
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

// theming
import { ThemeProvider } from "@mui/material";
import MuiCssBaseline from '@mui/material/CssBaseline'
import theme from './styles/theme';

// store
import { Provider } from 'react-redux'
import { store, persistor } from './store/index'
import { PersistGate } from 'redux-persist/integration/react'

// pages
import Login from './components/pages/auth/login'
import Logout from './components/pages/auth/logout'
import Dashboard from './components/pages/dashboard/index'
import Splash from './components/pages/auth/splash'

// New as of React18
const rootElement = document.getElementById("root");

// New as of React18
createRoot(rootElement!).render(
  <React.StrictMode>
    <MuiCssBaseline>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
            <HashRouter>
              <Routes>
                <Route 
                  path="*" 
                  element={<Splash />}
                />
                <Route 
                  path="logout" 
                  element={<Logout />}
                />
                <Route 
                  path="login" 
                  element={<Login />}
                />
                {/** Protected Routes */}
                <Route 
                  path="dashboard" 
                  element={<Dashboard />} 
                />
              </Routes>
            </HashRouter>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </MuiCssBaseline>
  </React.StrictMode>
);

