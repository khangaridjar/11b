import { useState } from "react";

export default function Home() {
    const [count, setClick] = useState(0);  

    return (
        <div className="h-screen w-full bg-gray-100">
          <div className="h-16 w-full bg-blue-800 mt-16 flex justify-center items-center">
                <p className="text-white text-xl">
                    Nest High School
                </p>
            </div>
            <div className="h-4/6 w-full flex flex-col items-center">
                <div className="flex justify-center mt-6">
                    <p className="text-3xl">
                        Welcome to Nest School
                    </p>
                </div>
                <div className="flex justify-center mt-6 px-64">
                    <p className="text-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.   
                    </p>
                </div>
                <div className="flex justify-center mt-4">
                    <button
                        className="bg-blue-800 p-4 text-white rounded-md"
                        onClick={() => {
                            setClick(count + 1);
                        }}
                    >
                        Click me
                    </button>
                    <p className="ml-4 text-xl ">Clicked {count} times</p>
                </div>
                <div className="grid-cols-3 gap-8 mx-96 w-full flex justify-center items-center mt-12 ">
                    <div className="w-64 h-64 bg-white rounded-lg flex justify-center items-center grid grid-rows-2 shadow-2xl">  
                        <p className="text-2xl flex justify-center">
                            Why Choose Us?
                        </p>
                        <div className="text-sm">
                            <p>High performance</p>
                            <p>Responsive design</p>
                            <p>Easy to use</p>
                            <p>Scalable solutions</p>
                            <p>24/7 Support</p>
                        </div>
                    </div>
                    <div className="w-64 h-64 bg-white rounded-lg flex justify-center items-center grid grid-rows-2 shadow-2xl">  
                        <p className="text-2xl flex justify-center">
                            Our Features
                        </p>
                        <div className="text-sm">
                            <p>Fast and Lightweight</p>
                            <p>Mobile-First Approach</p>
                            <p>Customizable UI</p>
                            <p>Secure and Reliable</p>
                            <p>Global reach</p>
                        </div>
                    </div>
                    <div className="w-64 h-64 bg-white rounded-lg flex justify-center items-center grid grid-rows-2 shadow-2xl">  
                        <p className="text-2xl flex justify-center">
                            Customer Reviews
                        </p>
                        <div>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                            </p>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-16 bg-black flex justify-center items-center">
                <p className="text-white">
                    2025 Our Company. Nest Education High School
                </p>
            </div>
        </div>
    );
}
