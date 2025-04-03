import { useEffect, useState } from "react";

export default function Home() {
  const [catImages, setCatImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
        const result = await response.json();
        setCatImages(result.map(cat => cat.url)); 
      } catch (error) {
        console.error("Error fetching cat images:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-yellow-200 p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-lg">
        Random Cat Images
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {catImages.length > 0 ? (
          catImages.map((image, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <img
                src={image}
                alt={`Random Cat ${index + 1}`}
                className="h-64 w-full object-cover rounded-md"
              />
            </div>
          ))
        ) : (
          <p className="text-black">Loading...</p>
        )}
      </div>
      <button
        onClick={() => window.location.reload()}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Get New Cats
      </button>
    </div>
  );
}
