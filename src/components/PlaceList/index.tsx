import React, { useEffect, useState } from 'react';
import { PlaceListContainer, Item, Info } from './styles';

interface PlaceItemProps {
  id: number;
  type: string;
  name: string;
  distance: string;
  time_delivery: string;
  cost_delivery: string;
  image: string;
}

interface PlaceProps {
  places?: PlaceItemProps[];
}

const PlaceList: React.FC<PlaceProps> = (places) => {
  const [listPlaces, setListPlaces] = useState([]);

  useEffect(() => {
    setListPlaces(places.places);
  }, [places]);

  return (
    <PlaceListContainer>
      {listPlaces &&
        listPlaces.map((place: PlaceItemProps) => (
          <Item>
            <img src={place.image} alt={place.name} />
            <Info>
              <h3>{place.name}</h3>
              <span>
                {place.type} • {place.distance}km
              </span>
              <p>
                {place.time_delivery} min • R$ {place.cost_delivery}
              </p>
            </Info>
          </Item>
        ))}
    </PlaceListContainer>
  );
};

export default PlaceList;
