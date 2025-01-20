import * as React from 'react';
import { createRoot } from 'react-dom/client';

// router
import { 
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

// store
import { Provider } from 'react-redux'
import store from './store'

// pages
import Login from './components/pages/auth/login'
import Dashboard from './components/pages/dashboard/index'

// New as of React18
const rootElement = document.getElementById("root");

// New as of React18
createRoot(rootElement!).render(
  <React.StrictMode>
      <Provider store={store}>
          <HashRouter>
            <Routes>
              <Route 
                path="*" 
                element={<Login />}
              />
              {/** Protected Routes */}
              <Route 
                path="dashboard" 
                element={<Dashboard />} 
              />
            </Routes>
          </HashRouter>
      </Provider>
  </React.StrictMode>
);

