import {useRef, useEffect} from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/use-map';
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
    const markers: Marker<unknown>[] = [];
    if (map) {
      const { latitude, longitude, zoom } = city.location;
      map.setView([latitude, longitude], zoom);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });
        markers.push(marker);
        marker
          .setIcon(
            activeOffer !== undefined && offer.id === activeOffer.id
              ? CurrentCustomIcon
              : DefaultCustomIcon
          )
          .addTo(map);
      });
    }
    return () => {
      if (map) {
        markers.forEach((marker) => map.removeLayer(marker));
      }
    };
  }, [map, offers, activeOffer, city.location]);

  return <div className={`map ${className}`} ref={mapRef} />;

}

export default Map;
