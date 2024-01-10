import React, { useContext } from "react";
import { GeoContext } from "../context/GeoContext";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { icon } from "leaflet";
import markerIconSvg from "../../public/assets/icon-location.svg";

const MapComponent = () => {
  const { position } = useContext(GeoContext);

  const ChangeView = ({ center }) => {
    const map = useMap();
    map.flyTo(center, map.getZoom());
    return null;
  };

  const customMarkerIcon = icon({
    iconUrl: markerIconSvg,
    iconSize: [46, 56],
    iconAnchor: [1, 1],
    popupAnchor: [0 - 56],
  });

  return (
    <section className="relative z-[1]">
      <MapContainer
        center={position}
        zoom={19}
        scrollWheelZoom={true}
        style={{ height: "calc(100vh - 280px)" }}
      >
        <ChangeView center={position} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customMarkerIcon}>
          {/* <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup> */}
        </Marker>
      </MapContainer>
    </section>
  );
};
export default MapComponent;
