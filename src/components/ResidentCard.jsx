import axios from "axios";
import { useEffect, useState } from "react";
import { characterStatus } from "../constants/residents";

const ResidentCard = ({residentEndpoint}) => {

    const [resident,setResident] = useState(null)

//TODO ('Alive', 'Dead' or 'unknown').


 
    useEffect(() => {
      axios.get(residentEndpoint)
        .then(({data})=> setResident(data))
        .catch((err)=> console.log(err)); 

    }, []);
    
    
    return (
    <article>
        <header className="relative border-green-500 border-dashed border-2 rounded-md">
            <img src={resident?.image} alt="" className="rounded-md" />

            {/*Status*/}
            <div className="absolute bottom-4 left-1/2  -translate-x-1/2 bg-black/80
             text-white px-4 py-1 rounded-md flex items-center gap-2">
                <div className={` h-3 w-3 ${characterStatus[resident?.status]} rounded-full`}  >
                    </div> 
                <span>{resident?.status}</span>
            </div>
        </header>
        <div className="border-green-500 border-2 p-2">
            <h4 className="text-xl font-bold text-center"> {resident?.name} </h4>
            <ul className="mb-3 justify-content-center flex-column align-items: flex-end" >
                <li className="mb-3"> <span className="text-gray-400 mr-20" >Species</span> {resident?.species} </li>
                <li className="mb-3"> <span className="text-gray-400 mr-20" >Origin</span> {resident?.origin.name} </li>
                <li className="mb-3"> <span className="text-gray-400 mr-10" >Times appear</span> {resident?.episode.length} time</li>
            </ul>
        </div>
    </article>
  );
}

export default ResidentCard;
