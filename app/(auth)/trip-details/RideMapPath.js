import GoogleMapReact from 'google-map-react';
import { memo } from 'react';

export function Marker({ text }) {
  return (
    <div className="relative z-50 flex flex-row gap-1 text-lg text-primary">
      <img
        src="/images/icons/locationdark.png"
        alt=""
        className="absolute w-4 h-6 -top-10 -left-5"
      />
      <p className="absolute text-sm font-bold left-5 -top-10">{text}</p>
    </div>
  );
}

function RideMapPath({
  origin,
  destination,
  setDistance,
  setDuration,
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
      : [0, 0];
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
    <div className="w-full h-full overflow-hidden rounded-xl">
      {
        destination
          ? (
            <GoogleMapReact
              key={new Date().getTime()}
              bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY }}
              center={center}
              defaultZoom={9}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={async ({ map, maps }) => {
                // if (!destination) return;

                let directionsService;
                let directionsRenderer;

                const getPoint = async (location, title, url) => new maps.Marker({
                  position: location,
                  map,
                  icon: new maps.MarkerImage(
                    // URL
                    url,
                    // 'https://maps.google.com/mapfiles/kml/shapes/schools_maps.png',
                    // (width,height)
                    new maps.Size(20, 24),
                    // The origin point (x,y)
                    new maps.Point(0, 0),
                    // The anchor point (x,y)
                    new maps.Point(10, 24),
                  ),
                  title,
                });

                try {
                  directionsService = new maps.DirectionsService();
                  directionsRenderer = new maps.DirectionsRenderer({
                    suppressMarkers: true,
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
                      destination: new maps.LatLng(
                        destinationLatLngArr[0],
                        destinationLatLngArr[1],
                      ),
                      travelMode: 'DRIVING',
                      waypoints,
                    },
                    (prevRes, status) => {
                      if (status === maps.DirectionsStatus.OK) {
                        directionsRenderer.setDirections(prevRes);
                        const leg = prevRes.routes[0].legs[0];
                        getPoint(leg.start_location, 'start', '/images/icons/location-black.png');
                        getPoint(leg.end_location, 'Destination', '/images/icons/finish.png');
                        setDistance(
                          ((leg.distance.value * 0.621371) / 1000).toFixed(0),
                        );
                        setDuration((leg.duration.value / 60).toFixed(0));
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
              {!destination && (
              <Marker
                lat={Number(origin?.split(',')[0].trim())}
                lng={Number(origin?.split(',')[1].trim())}
                text="pick-up"
              />
              )}
              {viaLocations && viaLocations.filter((viaLocation) => viaLocation && viaLocation.latLng).map((viaLocation) => (
                <Marker
                  key={viaLocation.latLng}
                  lat={Number(viaLocation.latLng?.split(',')[0]?.trim())}
                  lng={Number(viaLocation.latLng?.split(',')[1]?.trim())}
                />
              ))}
            </GoogleMapReact>
          )
          : (
            <GoogleMapReact
              key={new Date().getTime()}
              bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY }}
              defaultCenter={center}
              defaultZoom={9}
            >
              <Marker lat={center[0]} lng={center[1]} />
              {viaLocations && viaLocations.filter((viaLocation) => viaLocation && viaLocation.latLng).map((viaLocation) => (
                <Marker
                  key={viaLocation.latLng}
                  lat={Number(viaLocation.latLng?.split(',')[0]?.trim())}
                  lng={Number(viaLocation.latLng?.split(',')[1]?.trim())}
                />
              ))}
            </GoogleMapReact>
          )
      }

    </div>
  );
}

export default memo(RideMapPath);
