'use client';

/* eslint-disable jsx-a11y/label-has-associated-control */

import { useState } from 'react';
import Button from 'components/ui/Button';

function PassengerForm() {
  const [formData, setFormData] = useState({
    passengerFname: '',
    passengerLname: '',
    passengerMobileCntrycd: '',
    passengerEmail: '',
    passengerMobile: '',
    passengerAddressType: '',
    passengerAddress: '',
    passengerPostalCode: '',
    placeId: '',
    coordinates: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Bearer token
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwZDFhYTRhMS0zNzJjLTQyOWYtYWY3OS01YjcwODA2OGNmNjMiLCJ1c2VydHlwZSI6IkNPUlBPUkFURV9NQVNURVIiLCJpYXQiOjE2OTU2NTUxNjh9.3J74zinT1Z4Aot1n9pARdK761CVvhcvijPUExDxBW5A';

    // Perform API call to create passenger using formData
    try {
      const response = await fetch('https://api-dev.roldrive.com/api/v1/corporate/passengers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Include the Bearer token here
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        console.log('Passenger created successfully');
      } else {
        // Handle error
        console.error('Failed to create passenger');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="passengerFname" value={formData.passengerFname} onChange={handleChange} />
      </label>

      <label>
        Last Name:
        <input type="text" name="passengerLname" value={formData.passengerLname} onChange={handleChange} />
      </label>

      <label>
        Mobile Country Code:
        <input type="text" name="passengerMobileCntrycd" value={formData.passengerMobileCntrycd} onChange={handleChange} />
      </label>

      <label>
        Email:
        <input type="email" name="passengerEmail" value={formData.passengerEmail} onChange={handleChange} />
      </label>

      <label>
        Mobile Number:
        <input type="tel" name="passengerMobile" value={formData.passengerMobile} onChange={handleChange} />
      </label>

      <label>
        Address Type:
        <input type="text" name="passengerAddressType" value={formData.passengerAddressType} onChange={handleChange} />
      </label>

      <label>
        Address:
        <input type="text" name="passengerAddress" value={formData.passengerAddress} onChange={handleChange} />
      </label>

      <label>
        Postal Code:
        <input type="text" name="passengerPostalCode" value={formData.passengerPostalCode} onChange={handleChange} />
      </label>

      <label>
        Place ID:
        {' '}
        {/* Add Place ID input */}
        <input type="text" name="placeId" value={formData.placeId} onChange={handleChange} />
      </label>

      <label>
        Coordinates:
        {' '}
        {/* Add Coordinates input */}
        <input type="text" name="coordinates" value={formData.coordinates} onChange={handleChange} />
      </label>

      <Button className="bg-primary w-auto" type="submit">Create Passenger</Button>
    </form>
  );
}

export default PassengerForm;
