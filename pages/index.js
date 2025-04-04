import Link from "next/link";

export default function Home() {
  const pages = [
    { name: "Grid list", path: "hicheel4" },
    { name: "Search bar", path: "search" },
    { name: "Weather app", path: "weatherapp" },
    { name: "Class info", path: "biydaalt" },
    { name: "Nest high school, counter", path: "2_1" },

    { name: "Tooluur", path: "2_5" },
    { name: "Github free API", path: "2_7" },
    { name: "Mongol API Final", path: "mongolapi1" },
  ];

  return (
    <>
      

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 relative overflow-hidden">
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-cyan-400 opacity-20 rounded-full blur-3xl" />
        </div>
     
        <header className="w-full py-12 text-center bg-gray-800 shadow-lg flex justify-center items-center rounded-b-3xl border-b-4 border-cyan-400">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide drop-shadow-xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">
            WELCOME TO MY WEBSITE
          </h1>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 w-full max-w-5xl">
          {pages.map(({ name, path }) => (
            <div key={path} className="relative group">
              <Link href={path} legacyBehavior>
                <a className="block p-8 md:p-12 text-xl md:text-2xl font-semibold bg-gray-900 text-white rounded-2xl shadow-xl border border-gray-600 relative overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-md bg-opacity-60 hover:bg-opacity-80">
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  <span className="relative z-10 group-hover:text-gray-200">{name}</span>
                </a>
              </Link>
            </div>
          ))}
        </div>

        <footer className="mt-14 text-lg md:text-xl font-medium opacity-90 tracking-wide bg-gray-800 py-5 px-10 rounded-full shadow-lg border-2 border-gray-600 hover:bg-gray-700 transition-all duration-300 backdrop-blur-md bg-opacity-50 text-cyan-300">
          Made by Khangarid J
        </footer>
      </div>
    </>
  );
}
