import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isGrid, setIsGrid] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://mongol-api-rest.vercel.app/clothes");
        const result = await response.json();
        setData(Object.values(result).flat());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-yellow-200 p-6">
      <h1 className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-lg">
        Mongol Clothes
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full md:w-1/2"
        />
        <button 
          onClick={() => setIsGrid(!isGrid)} 
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {isGrid ? "Switch to List View" : "Switch to Grid View"}
        </button>
      </div>

      <div className={`w-full ${isGrid ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col gap-6"}`}>
        {filteredData.length === 0 ? (
          <div className="w-full text-center text-xl font-bold text-red-500">
            No results found
          </div>
        ) : (
          filteredData.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h2 className="text-xl font-bold">{item?.name}</h2>
              <p className="text-black mt-2">{item?.description || "No description available"}</p>
              <Link href={`/clothes/${item.id}`}>
                <img
                  src={Array.isArray(item.images) ? item.images[0] : item.images}
                  alt={item?.name}
                  className="h-64 w-full object-cover rounded-md mt-2 cursor-pointer"
                />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}