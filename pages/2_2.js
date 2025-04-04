import React, {useEffect, useState } from "react"; 
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    const useStateTask = () => {
    
    const [color, setColor] = useState("");
    useEffect(() => {
        setColor("red")
    }, [])
    console.log(color);
    return (
        
        <div className={`flex space-x-4 w-full h-screen p-4 bg-${color}-800`} >
            <button 
      onClick={() => router.back()} 
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
    >
      ← Back
    </button>
            <div>

        
      </div>
        
        <button className="border bg-red-800 h-32 py-4 px-6" onClick={() => {setColor("red")}}>
            Ulaan
        </button>
        <button className="border bg-blue-800 h-32 py-4 px-6" onClick={() => {setColor("blue")}}>
            Tsenher
        </button>
        <button className="border bg-green-800 h-32 py-4 px-6" onClick={() => {setColor("green")}}>
            Nogoon
        </button>
        <button className="border bg-green-800 h-32 py-4 px-6" onClick={() => {setColor()}}>
            clear
        </button>
        </div>
        
    );
};

}
