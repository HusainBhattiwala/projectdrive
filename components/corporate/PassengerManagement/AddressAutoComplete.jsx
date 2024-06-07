'use client';

import { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import Head from 'next/head';

function AddressAutocomplete({ onUpdate }) {
  const [address, setAddress] = useState('');
  const [setPlaceId] = useState('');
  const [setPostalCode] = useState('');
  const [setAddressType] = useState('');

  const handleSelect = async (selectedAddress) => {
    try {
      const results = await geocodeByAddress(selectedAddress);
      const latLng = await getLatLng(results[0]);

      setAddress(selectedAddress);
      setPlaceId(results[0].place_id);
      setPostalCode(results[0].postal_code || '');
      setAddressType(results[0].types[0] || '');

      // Pass the updated data back to the parent component
      onUpdate({
        passengerAddress: selectedAddress,
        placeId: results[0].place_id,
        passengerPostalCode: results[0].postal_code || '',
        passengerAddressType: results[0].types[0] || '',
        coordinates: `${latLng.lat},${latLng.lng}`,
      });
    } catch (error) {
      console.error('Error selecting address:', error);
    }
  };

  return (
    <>
      <Head>
        {/* // eslint-disable-next-line @next/next/no-sync-scripts
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        /> */}
      </Head>

      <PlacesAutocomplete
        value={address}
        onChange={(newAddress) => setAddress(newAddress)}
        onSelect={handleSelect}
      >
        {({
          getInputProps, suggestions, getSuggestionItemProps, loading,
        }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Enter your address',
                className: 'w-full p-2 border rounded',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </>

  );
}

export default AddressAutocomplete;
