import { useRouter } from "next/router";
export default function Task2() {
    const router = useRouter();
    return (
        <div className="w-full h-screen flex items-center justify-center bg-black">
    <div className="w-[98%] h-[96%] flex justify-between items-end">
      
        <div  className="w-24 h-full bg-slate-900 rounded-3xl flex flex-col items-center">
        <div className="flex justify-center">
                <p className="p-4 border-2 border-gray-400 rounded-xl bg-gray-300 font-bold hover:bg-blue-300" onClick={() => router.back()}>Back</p>
                </div>
            <div  className="w-12 h-12 rounded-full bg-slate-800 mt-4 flex items-center justify-center">
                <img src="https://cdn-icons-png.flaticon.com/512/3944/3944594.png"  className="w-8"/>
            </div>
            <div  className="w-full h-1/2 mt-8 flex flex-col items-center">
                <div className="w-24 h-24 flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="w-12">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                    </svg>
                    <h1 className="text-white text-md">Weather</h1>
                </div>
                <div className="w-24 h-24 flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        claclassName="w-12 fill-slate-600">
                        <path fill-rule="evenodd"
                            d="M6 4.75A.75.75 0 0 1 6.75 4h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 4.75ZM6 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 10Zm0 5.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75ZM1.99 4.75a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1v-.01ZM1.99 15.25a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1v-.01ZM1.99 10a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1V10Z"
                            clip-rule="evenodd" />
                    </svg>
                    <h1 className="text-slate-600 text-md">Cities</h1>
                </div>
                <div className="w-24 h-24 flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        className="w-12 fill-slate-600">
                        <path fill-rule="evenodd"
                            d="M8.157 2.176a1.5 1.5 0 0 0-1.147 0l-4.084 1.69A1.5 1.5 0 0 0 2 5.25v10.877a1.5 1.5 0 0 0 2.074 1.386l3.51-1.452 4.26 1.762a1.5 1.5 0 0 0 1.146 0l4.083-1.69A1.5 1.5 0 0 0 18 14.75V3.872a1.5 1.5 0 0 0-2.073-1.386l-3.51 1.452-4.26-1.762ZM7.58 5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 7.58 5Zm5.59 2.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Z"
                            clip-rule="evenodd" />
                    </svg>

                    <h1 className="text-slate-600 text-md">Map</h1>
                </div>
                <div className="w-24 h-24 flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        className="w-12 fill-slate-600">
                        <path
                            d="M10 3.75a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM17.25 4.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM5 3.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75ZM4.25 17a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM17.25 17a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM9 10a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1 0-1.5h5.5A.75.75 0 0 1 9 10ZM17.25 10.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM10 16.25a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
                    </svg>

                    <h1 className="text-slate-600 text-md">Settings</h1>
                </div>
                
            </div>
        </div>
        <div className="w-2/3 h-full rounded-3xl">
            <div className="w-full h-16 bg-slate-900 rounded-3xl flex items-center">
                <h1 className="text-white text-md ml-6">Search for cities</h1>
            </div>
            <div className="w-full h-80 flex items-center justify-end relative">
                <h1 className="absolute top-16 left-16 text-center"><span
                        className="text-4xl text-white font-semibold">Ulaanbaatar</span><span
                        className="text-slate-400">Chance of rain: 0%</span></h1>
                <img src="https://cdn-icons-png.flaticon.com/512/979/979585.png"
                    className="h-2/3 mr-16"/>
                <h1 className="text-6xl absolute left-16 bottom-16 font-bold text-white">16°</h1>
            </div>
            <div className="w-full h-64 bg-slate-900 rounded-3xl flex items-end justify-center relative">
                <h1 className="text-slate-400 absolute left-8 font-semibold top-4">TODAYS FORECAST</h1>
                <div className="w-11/12 h-2/3 mb-8 grid grid-cols-6">
                    <div className="flex flex-col items-center">
                        <h1 className="text-slate-400 font-semibold">6:00 AM</h1>
                        <img src="https://freesvg.org/img/weather-overcast.png" className="mt-4 w-2/3"/>
                        <h1 className="text-white font-bold text-3xl">2°</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-slate-400 font-semibold">9:00 AM</h1>
                        <img src="https://freesvg.org/img/weather-overcast.png" className="mt-4 w-2/3"/>
                        <h1 className="text-white font-bold text-3xl">10°</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-slate-400 font-semibold">12:00 PM</h1>
                        <img src="https://freesvg.org/img/weather-overcast.png"
                            className="mb-2 mt-2 w-2/3"/>
                        <h1 className="text-white font-bold text-3xl">14°</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-slate-400 font-semibold">3:00 PM</h1>
                        <img src="https://freesvg.org/img/weather-overcast.png"
                            className="mt-2 mb-2 w-2/3"/>
                        <h1 className="text-white font-bold text-3xl">16°</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-slate-400 font-semibold">6:00 PM</h1>
                        <img src="https://freesvg.org/img/weather-overcast.png"
                            className="mt-2 mb-2 w-2/3"/>
                        <h1 className="text-white font-bold text-3xl">12°</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-slate-400 font-semibold">9:00 PM</h1>
                        <img src="https://freesvg.org/img/weather-overcast.png" className="mt-4 w-2/3"/>
                        <h1 className="text-white font-bold text-3xl">6°</h1>
                    </div>
                </div>
            </div>
            <div className="w-full h-60 bg-slate-900 rounded-3xl mt-4 relative flex flex-col justify-end">
                <h1 className="text-slate-400 absolute left-8 font-semibold top-4">AIR CONDITIONS</h1>
                <div
                    className="bg-blue-500 text-white rounded-full h-8 w-24 items-center flex justify-center absolute top-4 right-8">
                    See More</div>
                <div className="w-full h-2/3 grid grid-cols-4">
                    <div className="relative flex flex-col items-center justify-center">
                        <h1 className="text-slate-400 left-8 font-semibold top-4 text-md">Real Feel</h1>
                        <h1 className="text-white font-bold text-3xl mb-8">6°</h1>
                    </div>
                    <div className="relative flex flex-col items-center justify-center">
                        <h1 className="text-slate-400 left-8 font-semibold top-4 text-md">Wind</h1>
                        <h1 className="text-white font-bold text-3xl mb-8">5.4 km/h</h1>
                    </div>
                    <div className="relative flex flex-col items-center justify-center">
                        <h1 className="text-slate-400 left-8 font-semibold top-4 text-md">Chance of Rain</h1>
                        <h1 className="text-white font-bold text-3xl mb-8">0%</h1>
                    </div>
                    <div className="relative flex flex-col items-center justify-center">
                        <h1 className="text-slate-400 left-8 font-semibold top-4 text-md">UV Index</h1>
                        <h1 className="text-white font-bold text-3xl mb-8">3</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-1/4 h-[93%] bg-slate-900 rounded-3xl relative flex items-end">
            <h1 className="absolute left-8 top-4 text-slate-400 font-semibold">7-DAY FORECAST</h1>
            <div className="w-full h-[90%]">
                <div className="w-full h-[12.8%] flex items-center justify-evenly">
                    <h1 className="text-slate-400 font-semibold">Today</h1>
                    <div className="w-1/3 h-full flex items-center justify-evenly">
                        <img  src="https://cdn-icons-png.flaticon.com/512/979/979585.png"
                            className="w-12"/>
                        <h1 className="font-bold text-white ">Sunny</h1>
                    </div>
                    <h1 className="font-bold text-slate-400"><span className="text-white">16</span>/2</h1>
                </div>
                <div className="w-full h-[12.8%] flex items-center justify-evenly">
                    <h1 className="text-slate-400 font-semibold">Tue</h1>
                    <div className="w-1/3 h-full flex items-center justify-evenly">
                        <img src="https://cdn-icons-png.flaticon.com/512/979/979585.png"
                            className="w-12"/>
                        <h1 className="font-bold text-white ">Sunny</h1>
                    </div>
                    <h1 className="font-bold text-slate-400"><span className="text-white">24</span>/4</h1>
                </div>
                <div className="w-full h-[12.8%] flex items-center justify-evenly">
                    <h1 className="text-slate-400 font-semibold">Wed</h1>
                    <div className="w-1/3 h-full flex items-center justify-evenly">
                        <img src="https://cdn-icons-png.flaticon.com/512/979/979585.png"
                            className="w-12"/>
                        <h1 className="font-bold text-white ">Sunny</h1>
                    </div>
                    <h1 className="font-bold text-slate-400"><span className="text-white">14</span>/5</h1>
                </div>
                <div className="w-full h-[12.8%] flex items-center justify-evenly">
                    <h1 className="text-slate-400 font-semibold">Thu</h1>
                    <div className="w-1/3 h-full flex items-center justify-evenly">
                        <img src="https://cdn-icons-png.flaticon.com/512/4834/4834559.png" className="w-12"/>
                        <h1 className="font-bold text-white ">Cloudy</h1>
                    </div>
                    <h1 className="font-bold text-slate-400"><span className="text-white">20</span>/1</h1>
                </div>
                <div className="w-full h-[12.8%] flex items-center justify-evenly">
                    <h1 className="text-slate-400 font-semibold">Fri</h1>
                    <div className="w-1/3 h-full flex items-center justify-evenly">
                        <img src="https://cdn-icons-png.flaticon.com/512/4834/4834559.png" className="w-12"/>
                        <h1 className="font-bold text-white ">Cloudy</h1>
                    </div>
                    <h1 className="font-bold text-slate-400"><span className="text-white">22</span>/7</h1>
                </div>
                <div className="w-full h-[12.8%] flex items-center justify-evenly">
                    <h1 className="text-slate-400 font-semibold">Sat</h1>
                    <div className="w-1/3 h-full flex items-center justify-evenly">
                        <img src="https://cdn-icons-png.flaticon.com/512/4834/4834559.png" className="w-12"/>
                        <h1 className="font-bold text-white ">Cloudy</h1>
                    </div>
                    <h1 className="font-bold text-slate-400"><span className="text-white">25</span>/6</h1>
                </div>
                <div className="w-full h-[12.8%] flex items-center justify-evenly">
                    <h1 className="text-slate-400 font-semibold">Sun</h1>
                    <div className="w-1/3 h-full flex items-center justify-evenly">
                        <img src="https://cdn-icons-png.flaticon.com/512/1566/1566424.png" className="w-12"/>
                        <h1 className="font-bold text-white ">Stormy</h1>
                    </div>
                    <h1 className="font-bold text-slate-400"><span className="text-white">12</span>/-2</h1>
                </div>
            </div>
        </div>
    </div>
</div>
    );
    
  }