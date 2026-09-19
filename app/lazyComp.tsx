export default async function LazyComp(){

     const res=await fetch("https://techaltum.com/node/api",{cache:"no-cache"});
     const cars=await res.json();   
     
     return (
         <table className="table-auto border w-100">
                    <thead>
                         <tr>
                              <th className="border p-1">S No</th>
                              <th className="border p-1">Name</th>
                              <th className="border p-1">Body Type</th>
                              <th className="border p-1">Price</th>
                         </tr>
                    </thead>
                    <tbody>
                          {
                              cars.map((elem,ind)=>(
                              <tr key={ind}>
                                   <td className="border p-1">{++ind}</td>
                                   <td className="border p-1">{elem.name}</td>
                                   <td className="border p-1">{elem.type}</td>
                                   <td className="border p-1">{elem.price}</td>
                              </tr>
                              ))
                         }
                       
                    </tbody>
               </table>
               
 
     )
}