"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

const position: [number, number] = [24.7136, 46.6753];

const createIcon = (iconUrl: string) =>
  new L.Icon({
    iconUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  });

export default function OpenStreetMap() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <p>جارٍ تحميل الخريطة...</p>;

  return (
    <MapContainer
      center={position}
      zoom={17}
      className="rounded-md w-full h-[500px] overflow-hidden"
    >
      {/* خريطة الخلفية */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* إضافة مؤشر الموقع */}
      <Marker
        position={position}
        icon={createIcon(
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
        )}
      >
        <Popup>موقع شركة تو ستارز</Popup>
      </Marker>
    </MapContainer>
  );
}
