import React, { createContext, useCallback, useContext, useState } from 'react';
import { listPlaces } from '../services/api';

interface PlacesContextData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loadPlacesFromAPI(): Promise<any>;
}

const PlacesContext = createContext<PlacesContextData>({} as PlacesContextData);

export const PlacesProvider: React.FC = ({ children }) => {
  const [places, setPlaces] = useState([]);

  const loadPlacesFromAPI = useCallback(async () => {
    const response = await listPlaces();

    setPlaces(response.data);
    return response.data;
  }, []);

  return (
    <PlacesContext.Provider value={{ loadPlacesFromAPI }}>
      {children}
    </PlacesContext.Provider>
  );
};

export const usePlaces = (): PlacesContextData => {
  const context = useContext(PlacesContext);

  if (!context) {
    throw new Error('useAuth must be user within an AuthProvider');
  }

  return context;
};
