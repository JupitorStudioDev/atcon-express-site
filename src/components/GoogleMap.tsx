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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');

  // Function to get API key from Supabase Edge Function
  const getApiKey = async (): Promise<string> => {
    try {
      const response = await fetch('/api/get-maps-key');
      if (!response.ok) {
        throw new Error('Failed to get API key');
      }
      const data = await response.json();
      return data.apiKey;
    } catch (err) {
      // Fallback to hardcoded key for development
      return 'AIzaSyDKPrdT4MuCWXj_lNhTYaXMxmj9jp-RTBw';
    }
  };

  // Function to initialize the map
  const initializeMap = async () => {
    if (!mapRef.current) return;

    setIsLoading(true);
    setError('');

    try {
      const apiKey = await getApiKey();
      
      const loader = new Loader({
        apiKey: apiKey,
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
            styles: [
              {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
              }
            ]
          });

          // Add marker
          new google.maps.Marker({
            position: location,
            map: mapInstance,
            title: 'Atcon Decorating Limited',
          });

          setMap(mapInstance);
        } else {
          setError('Unable to load map location.');
        }
        setIsLoading(false);
      });
    } catch (err) {
      setError('Failed to load Google Maps.');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initializeMap();
  }, []);

  if (error) {
    return (
      <div className={`${className} bg-muted rounded-lg border border-border flex items-center justify-center`}>
        <div className="text-center p-6">
          <p className="text-sm text-muted-foreground">{error}</p>
          <p className="text-xs text-muted-foreground mt-2">
            Map location: {address}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className} relative`}>
      <div ref={mapRef} className="w-full h-full rounded-lg" />
      {isLoading && (
        <div className="absolute inset-0 bg-muted/50 rounded-lg flex items-center justify-center">
          <div className="text-sm font-medium">Loading map...</div>
        </div>
      )}
    </div>
  );
};

export default GoogleMap;