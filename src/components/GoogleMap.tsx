import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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
  const [apiKey, setApiKey] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  // Function to initialize the map
  const initializeMap = async (key: string) => {
    if (!mapRef.current || !key.trim()) return;

    setIsLoading(true);
    setError('');

    try {
      const loader = new Loader({
        apiKey: key,
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

  // Try to get API key from localStorage on mount
  useEffect(() => {
    const savedKey = localStorage.getItem('google-maps-api-key');
    if (savedKey) {
      setApiKey(savedKey);
      initializeMap(savedKey);
    }
  }, []);

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      localStorage.setItem('google-maps-api-key', apiKey);
      initializeMap(apiKey);
    }
  };

  // If no API key is available, show input form
  if (!apiKey || (!map && !isLoading)) {
    return (
      <div className={`${className} bg-muted rounded-lg border border-border flex flex-col items-center justify-center p-6`}>
        <div className="text-center mb-4">
          <h3 className="font-semibold mb-2">Google Maps Integration</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Enter your Google Maps API key to display the map
          </p>
        </div>
        
        <form onSubmit={handleApiKeySubmit} className="w-full max-w-sm space-y-3">
          <div>
            <Label htmlFor="api-key" className="text-sm">Google Maps API Key</Label>
            <Input
              id="api-key"
              type="text"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your API key"
              className="mt-1"
            />
          </div>
          <Button type="submit" variant="outline" size="sm" className="w-full">
            Load Map
          </Button>
        </form>

        {error && (
          <p className="text-sm text-red-500 mt-2 text-center">{error}</p>
        )}

        <div className="mt-4 text-xs text-muted-foreground text-center">
          <p>Get your free API key at:</p>
          <a 
            href="https://developers.google.com/maps/documentation/javascript/get-api-key" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent-warm hover:underline"
          >
            Google Maps Platform
          </a>
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