import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { PlacesProvider } from './places';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <PlacesProvider>{children}</PlacesProvider>
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;
