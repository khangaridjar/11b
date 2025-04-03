import { useEffect, useState } from "react";
 import { useRouter } from "next/router";
 
 export default function ItemDetail() {
   const [item, setItem] = useState(null);
   const { query, back } = useRouter();
   const { id } = query;
   const router = useRouter();
 
   useEffect(() => {
     if (id) {
       const fetchItem = async () => {
         try {
           const response = await fetch("https://mongol-api-rest.vercel.app/clothes");
           const result = await response.json();
           setItem(result);
         } catch (error) {
           console.error("Error fetching item details:", error);
         }
       };
 
       fetchItem();
     }
   }, [id]);
 
   if (!item) {
     return <div className="min-h-screen bg-gradient-to-r from-indigo-800 via-purple-600 to-blue-500 p-6 text-center">Loading...</div>;
   }
 
   return (
     <div className="min-h-screen bg-gradient-to-r from-indigo-800 via-purple-600 to-blue-500">
       <button
         className="p-4 border-2 border-gray-400 rounded-xl bg-gray-300 font-bold hover:bg-blue-300 mb-6"
         onClick={() => back()}
       >
         Back
       </button>
 
       {item?.clothes.map((item) => (
         router.query.id == item?.id ? (
           <div key={item.id} className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md">
             <div className="w-1/3">
               {item.images && (
                 <img src={item.images} alt={item.name} className="h-96 w-full bg-cover rounded-md" />
               )}
             </div>
             <div className="w-2/3 pl-6">
               <h1 className="text-4xl font-extrabold text-center text-black mb-8">{item.name}</h1>
               <p className="text-black mt-2">{item.description}</p>
               {item.address?.country && <h3 className="text-lg mt-2 font-semibold">{item.address.country}</h3>}
             </div>
           </div>
         ) : <p>Data Oldsongui</p>
       ))}
     </div>
   );
 }