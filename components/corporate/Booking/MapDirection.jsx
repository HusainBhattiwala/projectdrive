import GoogleMapReact from 'google-map-react';
import { memo } from 'react';

export function Marker({ text }) {
  return (
    <div className="relative z-50 flex flex-row gap-1 text-lg text-primary">
      <img
        src="/images/icons/locationdark.png"
        alt=""
        className="absolute w-5 h-6 -top-5 -left-3"
      />
      <p className="absolute text-sm font-bold left-5 -top-10">{text}</p>
    </div>
  );
}

function MapDirection({
  origin,
  destination,
  viaLocations,
}) {
  let center;
  let originLatLngArr;
  let destinationLatLngArr;
  if (destination) {
    originLatLngArr = origin
      ? [
        Number(origin?.split(',')[0].trim()),
        Number(origin?.split(',')[1].trim()),
      ]
      : [51.509865, -0.118092];
    destinationLatLngArr = destination
      ? [
        Number(destination?.split(',')[0].trim()),
        Number(destination?.split(',')[1].trim()),
      ]
      : [0, 0];

    center = {
      lat: (originLatLngArr[0] + destinationLatLngArr[0]) / 2,
      lng: (originLatLngArr[1] + destinationLatLngArr[1]) / 2,
    };
  } else {
    center = origin
      ? [
        Number(origin?.split(',')[0].trim()),
        Number(origin?.split(',')[1].trim()),
      ]
      : [51.509865, -0.118092];
  }

  return (
    <div className="w-full h-full overflow-hidden rounded-b-md">
      {
     origin && destination
       ? (
         <GoogleMapReact
           key={new Date().getTime()}
           bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY }}
           center={center}
           defaultZoom={14}
           yesIWantToUseGoogleMapApiInternals

              // eslint-disable-next-line react/jsx-props-no-multi-spaces
           onGoogleApiLoaded={async ({ map, maps }) => {
             let directionsService;
             let directionsRenderer;

             try {
               directionsService = new maps.DirectionsService({
                 suppressMarkers: false,
               });
               directionsRenderer = new maps.DirectionsRenderer({
                 suppressMarkers: false,
               });
               await directionsRenderer.setMap(map);
               const waypoints = viaLocations && viaLocations.filter((viaLocation) => viaLocation && viaLocation.latLng).map((viaLocation) => ({
                 location: new maps.LatLng(
                   Number(viaLocation.latLng?.split(',')[0]?.trim()),
                   Number(viaLocation.latLng?.split(',')[1]?.trim()),
                 ),
                 stopover: true, // Indicates that this is a stopping point
               }));

               const response = await directionsService.route(
                 {
                   origin: new maps.LatLng(originLatLngArr[0], originLatLngArr[1]),
                   waypoints,
                   destination: new maps.LatLng(
                     destinationLatLngArr[0],
                     destinationLatLngArr[1],
                   ),
                   travelMode: 'DRIVING',

                 },
                 (prevRes, status) => {
                   if (status === maps.DirectionsStatus.OK) {
                     directionsRenderer.setDirections(prevRes);
                   }
                 },
               );
               const res2 = await directionsRenderer.setDirections(response);
               console.log('res2', res2);
             } catch (error) {
               console.log('error2', error);
             }
           }}
         >
           {/* Markers for pick-up and destination */}
         </GoogleMapReact>

       )
       : (
         <GoogleMapReact
           key={new Date().getTime()}
           bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY }}
           defaultCenter={center}
           defaultZoom={12}
         >
           <Marker lat={center[0]} lng={center[1]} />
         </GoogleMapReact>
       )
      }

    </div>
  );
}

export default memo(MapDirection);
