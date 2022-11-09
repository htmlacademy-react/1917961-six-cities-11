import {useRef, useEffect} from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import {City, Offer} from '../../types/data-types/offer-type';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  offers: Offer[];
  activeOffer: Offer | undefined;
  className: string;
};

const CurrentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const DefaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

function Map({city, offers, activeOffer, className}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            activeOffer !== undefined && offer.id === activeOffer.id
              ? CurrentCustomIcon
              : DefaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers, activeOffer]);

  return <div className={`map ${className}`} ref={mapRef} />;

}

export default Map;
