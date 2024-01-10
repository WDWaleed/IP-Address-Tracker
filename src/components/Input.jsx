import React, { useContext, useEffect, useRef } from "react";
import { GeoContext } from "../context/GeoContext";
import DataDisplay from "./DataDisplay";

const Input = () => {
  const { ipAddress, setIpAddress, fetchGeoData, fetchUserGeoData } =
    useContext(GeoContext);
  useEffect(() => {
    fetchUserGeoData();
    inputRef.current.focus();
  }, []);

  const inputRef = useRef();

  // useEffect(() => {
  //   fetchGeoData();
  // }, [ipAddress]);
  return (
    <section className="relative h-[280px] bg-DesktopPattern bg-center px-6 py-2">
      <h1 className="my-4 text-center text-2xl font-medium text-TxtColor md:text-4xl">
        IP Address Tracker
      </h1>
      <form className="mx-auto w-full max-w-[560px]">
        <div className="flex h-[48px] items-center">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for any IP Address or domain"
            onChange={(e) => setIpAddress(e.target.value)}
            className=" h-full grow rounded-bl-xl rounded-tl-xl px-4 py-2 text-lg text-VeryDarkGray"
          />
          <button
            className="flex h-full w-[48px] items-center justify-center rounded-br-xl rounded-tr-xl bg-black"
            onClick={(e) => {
              e.preventDefault();
              fetchGeoData();
            }}
          >
            <img
              src="assets/icon-arrow.svg"
              alt=">"
              className="text-xl font-bold text-TxtColor "
            />
          </button>
        </div>
      </form>
      <DataDisplay />
    </section>
  );
};
export default Input;
