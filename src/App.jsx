import React, { lazy, Suspense } from "react";
import GeoContextProvider from "./context/GeoContextProvider";

const Input = lazy(() => import("./components/Input"));
const MapComponent = lazy(() => import("./components/MapComponent"));

function App() {
  return (
    <main className="mx-auto h-screen w-full max-w-[1440px] ">
      <GeoContextProvider>
        <Suspense
          fallback={
            <div className="mt-[50vh] text-center text-2xl font-medium">
              Loading...
            </div>
          }
        >
          <Input />
          <MapComponent />
        </Suspense>
      </GeoContextProvider>
    </main>
  );
}

export default App;
