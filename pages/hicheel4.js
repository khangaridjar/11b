import Image from "next/image";
import localFont from "next/font/local";
import { useState } from "react";
import {useRouter} from "next/router";

 
export default function Home() {
    const router = useRouter();
    const [grid , setGrid] = useState(false);
    const data = [
        {
            id: 1,
            title: "Test 1",
            description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }, 
        {
            id: 2,
            title: "Test 2",
            description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }, 
        {
            id: 3,
            title: "Test 3",
            description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }, 
        {
            id: 4,
            title: "Test 4",
            description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 5,
            title: "Test 5",
            description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }, 
        {
            id: 6,
            title: "Test 6",
            description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },   
    ];
  return (
    <div className="p-6 max-w-4xlmx-auto">
        <div>
        <button className="p-4 border-2 border-gray-400 rounded-xl bg-gray-300 font-bold hover:bg-blue-300"
        onClick={() => {
          router.back();
        }}> 
          back
        </button>
      </div>
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Нийтлэлүүд</h1>
            <button onClick={() => setGrid(!grid)}
                className="px-4 py-2 bg-blue-400 text-white hover:bg-blue-800 transition"
                >
                    {grid ? "жагсаалт харах" : "Grid view"}
                </button>
        </div>

        <div className={grid == true ? "grid grid-cols-1 sm:grid-cols-2 gap-6 " : "space-y-4"
        }
        >
            {data.map((items, index) => (
                <div
                key={items.id}
                className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition p-4"
                >
                <h2 className="text-xl font-semibold mb-2">{items.title}</h2>
                <p className="text-gray-600">{items.description}</p>
                </div>
            ))}
        </div>
    </div>
  );
}