import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ItemPage() {
  const router = useRouter();
  const { id } = router.query; // Get ID from URL
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const response = await fetch("https://mongol-api-rest.vercel.app/clothes");
        const result = await response.json();
        const clothes = Object.values(result).flat();
        
        console.log("Fetched data:", clothes); // Debugging log
        const foundItem = clothes.find((clothing) => clothing.id.toString() === id);
        
        if (foundItem) {
          setItem(foundItem);
        } else {
          console.warn("Item not found with ID:", id);
        }
      } catch (error) {
        console.error("Error fetching item data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Loading or item not found...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-yellow-200 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-lg">
        {item.name}
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 w-full max-w-2xl">
        <img
          src={Array.isArray(item.images) ? item.images[0] : item.images}
          alt={item.name}
          className="h-80 w-full object-cover rounded-md"
        />
        <p className="text-black mt-4">{item.description || "No description available"}</p>
      </div>

      <Link href="/">
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Back to Home
        </button>
      </Link>
    </div>
  );
}