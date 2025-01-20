// src/components/GoogleMap.jsx
import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 28.6448,  // Latitude for New Delhi, change it according to your location
  lng: 77.216721, // Longitude for New Delhi
};

const GoogleMapComponent = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <div className="w-full bg-softGray p-4 rounded-lg shadow-md">
      <h2 className="text-center text-xl font-calligraphy text-gold mb-4">
        Find Our Venue
      </h2>
      <LoadScript
        googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" // Replace with your API key
        onLoad={() => setMapLoaded(true)}
      >
        {mapLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        )}
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;
