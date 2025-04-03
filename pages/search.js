import { useState } from "react";
import {useRouter} from "next/router";

export default function Task2() {
    const router = useRouter();
    const [search, setSearch] = useState("");

    console.log("search utga --->", search);

    return (
        <div className="h-screen p-4 bg-gradient-to-r from-blue-200 to-blue-500">
            <div>
        <button className="p-4 border-2 border-gray-400 rounded-xl bg-gray-300 font-bold hover:bg-blue-300"
        onClick={() => {
          router.back();
        }}> 
          back
        </button>
      </div>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-500">
            
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">
                    Search
                </h1>
                <input 
                    type="search"
                    onChange={(e) => setSearch(e.target.value)} 
                    className="w-full p-3 border-2 border-indigo-500 rounded-lg text-black focus:outline-none focus:border-indigo-700 mb-6"
                    
                    value={search}  
                />
                <div className="text-center text-lg text-gray-800">
                    <div className="font-medium text-indigo-600">Search:</div> 
                    <div className="font-semibold text-indigo-800">{search}</div>
                </div>
                <div className="mt-6 text-center">
                    <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200">
                        Clear
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
}