import React, { useState } from "react"; 
import {useRouter} from "next/router";

const useStateTask = () => {
    const router = useRouter();
    const [color, setColor] = useState("");
    return (
        
        <div className={`flex space-x-4 w-full h-screen p-4 bg-${color}-800`} >
            <div>
        <button className="p-4 border-2 border-gray-400 rounded-xl bg-gray-300 font-bold hover:bg-blue-300"
        onClick={() => {
          router.back();
        }}> 
          back
        </button>
      </div>
        <p>Ungu Solih</p>
        <button className="border bg-red-800 py-4 px-6" onClick={() => {setColor("red")}}>
            Ulaan
        </button>
        <button className="border bg-blue-800 py-4 px-6" onClick={() => {setColor("blue")}}>
            Tsenher
        </button>
        <button className="border bg-green-800 py-4 px-6" onClick={() => {setColor("green")}}>
            Nogoon
        </button>
        </div>
        
    );
};


export default useStateTask;