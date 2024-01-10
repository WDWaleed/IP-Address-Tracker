import { useContext } from "react";
import { GeoContext } from "../context/GeoContext";

const DataDisplay = () => {
  const { ipAddress, ipData } = useContext(GeoContext);
  const displayData = [
    {
      id: 1,
      title: "IP Address",
      content: ipAddress,
    },
    {
      id: 2,
      title: "Location",
      content: `${ipData?.location?.city ?? ""}, ${
        ipData?.location?.region ?? ""
      } ${ipData?.location?.postalCode ?? ""}`,
    },
    {
      id: 3,
      title: "Timezone",
      content: `UTC ${ipData?.location?.timezone ?? ""}`,
    },
    {
      id: 4,
      title: "ISP",
      content: ipData?.isp ?? "",
    },
  ];
  return (
    <div className="absolute inset-x-8 bottom-0 translate-y-1/2 transform z-[100] flex justify-center">
      <div className="flex min-h-[160px] w-full max-w-[1110px] flex-col flex-wrap items-center justify-between gap-6 rounded-2xl bg-white p-4 drop-shadow-2xl  sm:flex-row sm:items-start sm:gap-0 sm:p-8">
        {displayData.map((item) => (
          <div
            key={item.id}
            className="grow px-4 text-center sm:basis-1/4 sm:text-left"
          >
            <h2 className="text-[12px] font-bold uppercase tracking-widest text-DarkGray sm:text-sm  ">
              {item.title}
            </h2>
            <p className="text-xl font-medium text-VeryDarkGray sm:mt-4 sm:text-2xl">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DataDisplay;
