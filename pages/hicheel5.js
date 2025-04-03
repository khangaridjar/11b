import { useState } from "react";
import { useRouter } from "next/router";

const data = [
  { id: 1, title: "Blitz", mail: "Blitz@example.com" },
  { id: 2, title: "Blitz", mail: "Blitz@example.com" },
  { id: 3, title: "Blitz", mail: "Blitz@example.com" },
  { id: 4, title: "Techno4k", mail: "Techno4k@example.com" },
  { id: 5, title: "Senzu", mail: "Senzu@example.com" },
  { id: 6, title: "Mzinhio", mail: "Mzinhio@example.com" },
  { id: 7, title: "910", mail: "910@example.com" },
  { id: 8, title: "Maaraa", mail: "Maaraa@example.com" }
];

export default function Home() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filteredUsers = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  
  console.log("setSearch", search);
  console.log("filtered", filteredUsers);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-300">
      <div>
        <button
          className="p-4 border-2 border-gray-400 rounded-xl bg-gray-300 font-bold hover:bg-blue-300"
          onClick={() => {
            router.back();
          }}
        >
          back
        </button>
      </div>
      <div className="flex items-center justify-center mb-6">
        <h1 className="text-3xl font-bold">Хэрэглэгчийн жагсаалт</h1>
      </div>
      <div className="grid gap-6">
        <div className="flex items-center justify-center h-2 flex-col">
          <input
            type="search"
            onChange={(test) => setSearch(test.target.value)}
            placeholder="хэрэглэгчийг нэрээр хайна уу..."
            className="border-2 border-black w-full p-2 rounded"
          />
        </div>
        <div className="grid gap-4">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div key={user.id} className="bg-white shadow-md rounded-lg focus:outlined-none">
                <div>
                  <p className="text-lg font-medium">{user.title}</p>
                  <p className="text-sm text-gray-500">{user.mail}</p>
                </div>
              </div>
            ))
          ) : (
            <div>hereglegch oldohgui bn</div>
          )}
        </div>
      </div>
    </div>
  );
}
