import { useState } from "react";
import {useRouter} from "next/router";

export default function Task2() {
    const router = useRouter();
    const [search, setSearch] = useState("");

    console.log("search utga --->", search);

    return (
        <div className="h-screen p-4">
            <div>
        <button className="p-4 border-2 border-gray-400 rounded-xl bg-gray-300 font-bold hover:bg-blue-300"
        onClick={() => {
          router.back();
        }}> 
          back
        </button>
      </div>
        <div className="flex items-center justify-center h-screen flex-col">
            
            <input 
            type="search"
            onChange={(test) => setSearch(test.target.value)}
            className="border-2 border-black rounded"/>
            <p>search: {search}</p>
            
        </div>
        </div>
    );
}