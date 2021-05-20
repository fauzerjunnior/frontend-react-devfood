import React, { useCallback, useEffect, useState } from 'react';

import { FiChevronRight } from 'react-icons/fi';
import { useHistory } from 'react-router';
import AppHeader from '../../components/Header';
import AppFooter from '../../components/Footer';

import { usePlaces } from '../../hooks/places';

import {
  Container,
  Content,
  PrimaryContent,
  SecondaryContent,
  CardItem,
  ActionCard,
  ThirdContent,
  TopBarContainer,
  ViewMoreLink,
} from './styles';

import restaurantImg from '../../assets/restaurant.png';
import marketImg from '../../assets/market.png';
import PlaceList from '../../components/PlaceList';

const Dashboard: React.FC = () => {
  const { loadPlacesFromAPI } = usePlaces();
  const history = useHistory();

  const [places, setPlaces] = useState([]);
  const [categorySelected, setCategorySelected] = useState('RESTAURANT');

  const handleNavigateToOffers = (category: string) => {
    history.push('/offers', { category });
  };

  const loadPlaces = useCallback(async () => {
    const places = await loadPlacesFromAPI();

    const filteredPlaces =
      categorySelected === 'MARKET'
        ? places[0].category.market
        : places[0].category.restaurant;

    setPlaces(filteredPlaces);
  }, []);

  useEffect(() => {
    loadPlaces();
  }, []);

  return (
    <>
      <Container>
        <AppHeader />
        <Content>
          <PrimaryContent>
            <h1>Tudo para facilitar o seu dia a dia</h1>
            <h3>O que você precisa está aqui. Peça e receba onde estiver.</h3>
          </PrimaryContent>

          <SecondaryContent>
            <CardItem onClick={() => handleNavigateToOffers('RESTAURANT')}>
              <h1>Restaurante</h1>

              <ActionCard backgroundColor="#ea1d2c">
                Ver Opções
                <FiChevronRight size={15} />
              </ActionCard>
              <img src={restaurantImg} alt="restaurant" />
            </CardItem>

            <CardItem onClick={() => handleNavigateToOffers('MARKET')}>
              <h1>Mercado</h1>
              <ActionCard backgroundColor="#b6d048">
                Buscar lojas
                <FiChevronRight size={15} />
              </ActionCard>
              <img src={marketImg} alt="market" />
            </CardItem>
          </SecondaryContent>

          <ThirdContent>
            <div>
              <TopBarContainer>
                <h1>Famosos no devFood</h1>
                <ViewMoreLink
                  onClick={() => handleNavigateToOffers('RESTAURANT')}>
                  Ver mais
                </ViewMoreLink>
              </TopBarContainer>
              <PlaceList places={places} />
            </div>
          </ThirdContent>
        </Content>
      </Container>
      <AppFooter />
    </>
  );
};

export default Dashboard;
