import React from "react";

const LocationsList = ({ locations }) => (
  <ul>
    {locations.map(location => (
      <li key={location.ChargeDeviceId}>{location.ChargeDeviceRef}</li>
    ))}
  </ul>
);

export default LocationsList;
