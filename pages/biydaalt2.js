import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const pages = [
    { name: "Nest high school, counter", path: "2_1" },
    { name: "Color changer", path: "2_2" },
    { name: "Mongol API 1", path: "2_3" },
    { name: "Tooluur", path: "2_5" },
    { name: "Mongol API 2", path: "2_6" },
    { name: "Github free API", path: "2_7" },
    { name: "Mongol API final", path: "mongolapi" },
  ];

  return (
    <div className="h-screen w-full bg-gradient-to-r from-indigo-800 via-purple-600 to-blue-500 text-white flex flex-col items-center font-sans">
    
      <header className="w-full py-8 text-center bg-gray-900 shadow-xl flex justify-center items-center">
        <h1 className="text-6xl font-extrabold tracking-widest drop-shadow-lg">Welcome Home</h1>
      </header>

  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 p-8 w-full max-w-5xl">
        {pages.map(({ name, path }) => (
          <button
            key={path}
            className="p-8 text-2xl font-bold bg-white text-gray-900 rounded-3xl shadow-xl transform transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r from-pink-400 to-yellow-300 hover:text-white border-2 border-gray-300"
            onClick={() => router.push(path)}
          >
            {name}
          </button>
        ))}
      </div>

 
      <footer className="mt-12 text-lg font-semibold opacity-80">Khangarid J</footer>
    </div>
  );
}
