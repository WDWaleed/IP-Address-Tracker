import React, { useState } from "react";
import axios from "axios";
import { GeoContext } from "./GeoContext";

const GeoContextProvider = ({ children }) => {
  const [ipAddress, setIpAddress] = useState("");
  const [validIpAddress, setValidIpAddress] = useState(null);
  const [ipData, setIpData] = useState({});
  const ipRegex = new RegExp(
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
  );

  const domainRegex = new RegExp(
    /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/,
  );

  const [position, setPosition] = useState([0, 0]); // [lat, lng]

  const fetchUserGeoData = async () => {
    try {
      const { data } = await axios.get(
        "https://geo.ipify.org/api/v2/country,city?apiKey=at_KytuHVK0Ck81MamC7QulthtTa2wvW",
      );
      setIpAddress(data.ip)
      setIpData(data);
      const { lat, lng } = await data.location;
      console.log(lat, lng);
      setPosition([lat, lng]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchGeoData = async () => {
    const trimmedIpAddress = ipAddress.trim();
    const validIP = ipRegex.test(trimmedIpAddress);
    const validDomain = domainRegex.test(trimmedIpAddress);
    if (validIP || validDomain) setValidIpAddress(true);
    else setValidIpAddress(false);

    try {
      console.log(ipAddress, validIpAddress);
      if (trimmedIpAddress && (validIP || validDomain)) {
        const URL = `https://geo.ipify.org/api/v2/country,city?apiKey=at_KytuHVK0Ck81MamC7QulthtTa2wvW&ipAddress=${trimmedIpAddress}`;
        const { data } = await axios.get(URL);
        setIpData(data);
        const { lat, lng } = await data.location;
        console.log(lat, lng);
        //log ip address that is fetched
        console.log(data.ip);
        setPosition([lat, lng]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GeoContext.Provider
      value={{
        ipAddress,
        setIpAddress,
        validIpAddress,
        setValidIpAddress,
        ipData,
        setIpData,
        ipRegex,
        domainRegex,
        position,
        setPosition,
        fetchGeoData,
        fetchUserGeoData,
      }}
    >
      {children}
    </GeoContext.Provider>
  );
};
export default GeoContextProvider;
