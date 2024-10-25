import React, { useState, useCallback } from 'react';
import { LuChevronDown as ChevronDown, LuChevronLeft as ChevronLeft, LuChevronRight as ChevronRight } from 'react-icons/lu';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const officeLocations = [
  {
    country: "Kenya",
    address: "Kalson Towers, 2nd Floor, Crescent Lane",
    coordinates: { lat: -1.2921, lng: 36.8219 }  // Nairobi coordinates
  },
  {
    country: "Ethiopia",
    address: "1st Floor, Lideya Plaza, Wollo Sefer, Ethio-China Road, Off Bole Road",
    coordinates: { lat: 9.0054, lng: 38.7636 }  // Addis Ababa coordinates
  },
  {
    country: "Tanzania",
    address: "Salasala, Dar es Salaam. P.O BOX 34624",
    coordinates: { lat: -6.7924, lng: 39.2083 }  // Dar es Salaam coordinates
  }
];

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const defaultCenter = {
  lat: 2.4,  // Centered roughly between the three locations
  lng: 37.8
};

const Accordion = ({ country, address, isOpen, onClick }) => {
  return (
    <div className={`border ${isOpen ? 'border-indigo' : 'border-gray' } mb-2 overflow-hidden`}>
      <button
        onClick={onClick}
        className="w-full px-4 py-3 flex justify-between items-center hover:bg-slate-50 transition-colors"
      >
        <span className="text-lg font-semibold">{country}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`px-4 text-cyan overflow-hidden transition-all ${
          isOpen ? 'max-h-24 py-3' : 'max-h-0'
        }`}
      >
        {address}
      </div>
    </div>
  );
};

const MapComponent = ({ selectedOffice }) => {
  const [map, setMap] = useState(null);

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback((map) => {
    setMap(null);
  }, []);

  // Pan to new location when selected office changes
  React.useEffect(() => {
    if (map) {
      map.panTo(selectedOffice.coordinates);
      map.setZoom(15);
    }
  }, [map, selectedOffice]);

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={selectedOffice.coordinates}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6c7b93" }],
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#dbe2e6" }],
          },
        ],
        streetViewControl: false,
        mapTypeControl: false,
      }}
    >
      <Marker
        position={selectedOffice.coordinates}
        title={selectedOffice.country}
      />
    </GoogleMap>
  );
};

const Offices = () => {
  const [selectedOffice, setSelectedOffice] = useState(officeLocations[0]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(officeLocations[0].country);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? officeLocations.length - 1 : prev - 1
    );
    setSelectedOffice(officeLocations[
      currentSlide === 0 ? officeLocations.length - 1 : currentSlide - 1
    ]);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => 
      prev === officeLocations.length - 1 ? 0 : prev + 1
    );
    setSelectedOffice(officeLocations[
      currentSlide === officeLocations.length - 1 ? 0 : currentSlide + 1
    ]);
  };

  const handleAccordionClick = (office) => {
    setOpenAccordion(openAccordion === office.country ? null : office.country);
    setSelectedOffice(office);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Desktop View */}
      <div className="hidden md:flex gap-8">
        <div className="w-1/3 space-y-4">
          <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
          <div>
            {officeLocations.map((office) => (
              <Accordion
                key={office.country}
                country={office.country}
                address={office.address}
                isOpen={openAccordion === office.country}
                onClick={() => handleAccordionClick(office)}
              />
            ))}
          </div>
        </div>

        <div className="w-2/3 aspect-square relative border border-indigo shadow-2xl overflow-hidden">
          <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <MapComponent selectedOffice={selectedOffice} />
          </LoadScript>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative">
        <div className="relative aspect-[3/4] overflow-hidden border border-pink-300 border-opacity-75 shadow-2xl">
          <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <MapComponent selectedOffice={selectedOffice} />
          </LoadScript>
          
          {/* Mobile Carousel */}
          <div className="absolute bottom-0 left-0 right-0 mx-auto bg-background bg-opacity-90 w-[95%] p-4 shadow-2xl">
            <div className="relative">
              <button 
                onClick={handlePrevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-background rounded-full shadow-xl border border-indigo"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <div className="px-12">
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-1">
                    {officeLocations[currentSlide].country}
                  </h3>
                  <p className="text-sm">
                    {officeLocations[currentSlide].address}
                  </p>
                </div>
              </div>

              <button 
                onClick={handleNextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-background rounded-full shadow-xl border border-indigo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offices;