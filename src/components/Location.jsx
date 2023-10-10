import { IconSearch } from "@tabler/icons-react";
import axios from "axios";

const Location = ({location, setLocation }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const idLocation = e.target.idLocation.value

        axios
        .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
        .then(({data}) => setLocation(data))
        .catch((err)=> console.log(err))
    }
    
  
    return (
    <section>
      
      <div className="overflow-hidden">

<img src="./logo.png" alt=""className="position-absolute top-0 left-0 right-0 mx-auto" />



</div>
        <form onSubmit={handleSubmit}className=" flex gap-2 justify-center mt-8 mb-8">
            <input 
            required
            placeholder="type a new location..."
            name="idLocation"
            className="text-black" 
            type="number" />
            <button type="submit"className="bg-green-500 text-white flex gap-2 items-center">
                search  <IconSearch size={18}/> 
            </button>
        </form>

        {/*Location info*/}
        <section className=" border-green-500 border-dashed border-2 p-2 py-10">
        <h3 className="text-green-400 text-center font-bold mb-4">  ¡¡¡Welcome to {location?.name}!!! </h3>
        <ul className="text-lg flex gap-3 justify-center flex-wrap space-x-8">
            <li>Type: {location?.type} </li>
            <li>Dimension: {location?.dimension} </li>
            <li>Population: {location?.residents.length} </li>
        </ul>
        </section>
    </section>
  );
}

export default Location;
