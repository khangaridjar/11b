import React from "react";
import {useRouter} from "next/router";

export default function IdCard() {
  const router = useRouter();
  const user = {
    name: "Khangarid Jargalsaikhan",
    class: "11b",
    contact: "+976 75555555",
    email: "tugserdene@gmail.com",
    school: "Nest IT",
    pfp: "/khangarid.jpg"
  };

  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div>
      <button className="p-4 border-2 border-gray-400 rounded-xl bg-gray-300 font-bold hover:bg-blue-300"
      onClick={() => {
        router.back();
      }}> 
        back
      </button>
    </div>
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">

      <div className="bg-white w-[30%] p-6 rounded-xl shadow-lg border border-gray-200">
        <div className="text-center mb-4">
          <div className="w-64 h-64  mx-auto bg-blue-100 rounded-full mb-2 overflow-hidden border-4 border-purple-500">
            {}
            <img
              src="https//:khangarid.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-bold text-gray-800">{user.name}</h1>
          <h2 className="text-sm font-medium text-purple-600">{user.class}</h2>
        </div>
        <div className="text-sm">
          <div className="mb-3">
            <p className="text-gray-700 font-semibold">School:</p>
            <p className="text-gray-500">{user.school}</p>
          </div>
          <div className="mb-3">
            <p className="text-gray-700 font-semibold">Contact:</p>
            <p className="text-gray-500">{user.contact}</p>
          </div>
          <div>
            <p className="text-gray-700 font-semibold">Email:</p>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}