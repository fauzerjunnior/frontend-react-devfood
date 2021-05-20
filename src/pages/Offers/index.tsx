import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import AppFooter from '../../components/Footer';
import AppHeader from '../../components/Header';
import PlaceList from '../../components/PlaceList';

import { usePlaces } from '../../hooks/places';

import { Container, Content, PrimaryContent } from './styles';

interface HistoryProps extends RouteComponentProps {
  category: string;
}

const Offers: React.FC = () => {
  const { loadPlacesFromAPI } = usePlaces();

  const history = useHistory<HistoryProps>();
  const {
    location: {
      state: { category },
    },
  } = history;

  const [categorySelected, setCategorySelected] = useState(category);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    loadPlaces();
  }, []);

  const loadPlaces = useCallback(async () => {
    const places = await loadPlacesFromAPI();

    const filteredPlaces =
      categorySelected === 'MARKET'
        ? places[0].category.market
        : places[0].category.restaurant;

    setPlaces(filteredPlaces);
  }, []);

  return (
    <>
      <Container>
        <AppHeader hasBackLink />
        <Content>
          <PrimaryContent>
            <h1>
              {categorySelected === 'MARKET' ? 'Mercados' : 'Restaurantes'}
            </h1>
            <PlaceList places={places} />
          </PrimaryContent>
        </Content>
      </Container>
      <AppFooter />
    </>
  );
};

export default Offers;
