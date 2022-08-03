import { MapMarker } from 'react-kakao-maps-sdk';

export default function MapMarkers({ marker, setCurrentMarker }) {
  let img = '';

  if (marker.category_code === 'AT4') {
    img = 'https://cdn-icons-png.flaticon.com/512/3069/3069318.png';
  } else if (marker.category_code === 'AD5') {
    img = 'https://cdn-icons-png.flaticon.com/512/3480/3480508.png';
  } else if (marker.category_code === 'FD6') {
    img = 'https://cdn-icons-png.flaticon.com/512/4107/4107983.png';
  } else if (marker.category_code === 'CE7') {
    img = 'https://cdn-icons-png.flaticon.com/512/4108/4108831.png';
  }

  return (
    <MapMarker
      position={{
        lat: marker.y,
        lng: marker.x,
      }}
      image={{
        src: img,
        size: {
          width: 45,
          height: 45,
        },
      }}
      onClick={() => {
        setCurrentMarker(marker);
      }}
    ></MapMarker>
  );
}
