import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

/// <reference types="google.maps" />

interface GoogleMapProps {
  address?: string;
  className?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ 
  address = "813 Old Lillooet Rd, North Vancouver, BC V7J 2H6", 
  className = "w-full h-64" 
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  // Google Maps API Key
  const GOOGLE_MAPS_API_KEY = 'AIzaSyDKPrdT4MuCWXj_lNhTYaXMxmj9jp-RTBw';

  // Function to initialize the map
  const initializeMap = async () => {
    if (!mapRef.current) return;

    setIsLoading(true);
    setError('');

    try {
      const loader = new Loader({
        apiKey: GOOGLE_MAPS_API_KEY,
        version: 'weekly',
        libraries: ['places']
      });

      const { Map } = await loader.importLibrary('maps');
      const { Geocoder } = await loader.importLibrary('geocoding');

      // Create geocoder
      const geocoder = new Geocoder();

      // Geocode the address
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK' && results && results[0]) {
          const location = results[0].geometry.location;
          
          // Create map
          const mapInstance = new Map(mapRef.current!, {
            center: location,
            zoom: 15,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
          });

          // Add marker
          new google.maps.Marker({
            position: location,
            map: mapInstance,
            title: 'Atcon Decorating Limited',
          });

          setMap(mapInstance);
        } else {
          setError('Unable to load map location. Please check your API key.');
        }
        setIsLoading(false);
      });
    } catch (err) {
      setError('Failed to load Google Maps. Please check your API key.');
      setIsLoading(false);
    }
  };

  // Initialize map on mount
  useEffect(() => {
    initializeMap();
  }, []);

  return (
    <div className={`${className} relative`}>
      <div ref={mapRef} className="w-full h-full rounded-lg" />
      {isLoading && (
        <div className="absolute inset-0 bg-muted/50 rounded-lg flex items-center justify-center">
          <div className="text-sm font-medium">Loading map...</div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 bg-muted rounded-lg flex items-center justify-center">
          <p className="text-sm text-red-500 text-center">{error}</p>
        </div>
      )}
    </div>
  );
};

export default GoogleMap;