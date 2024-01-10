import Input from "./components/Input";
import MapComponent from "./components/MapComponent";
import GeoContextProvider from "./context/GeoContextProvider";

function App() {
  return (
    <main className="mx-auto h-screen w-full max-w-[1440px] ">
      <GeoContextProvider>
        <Input />
        <MapComponent />
      </GeoContextProvider>
    </main>
  );
}

export default App;
