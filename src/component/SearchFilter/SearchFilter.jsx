import React, { useState, useEffect } from "react";
import "./filter.css";
const SearchFilter = ({ data, datachange }) => {
    const [pokemon, setPokemon] = useState("");
    const [filterd, setFilter] = useState([]);
    useEffect(() => {
        
        setFilter(data);
        
    }, [data]);
    useEffect(()=>{
        console.log("in effect");
        console.log(pokemon);

        let result=[];
        if (pokemon) {
            result = filterd.filter((item) => {
                const searchTerm = pokemon.toLowerCase();
                const fullName = item.name.toLowerCase();

                return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm
                )
            })
        }
        
        if (result.length!=0) {
            datachange(result);
            
        }
        else if(result.length==0) {
            console.log("not");
        }
        
    },[pokemon]);
    const change = (e) => {
        
        setPokemon(e.target.value);
        console.log("hii");
        console.log(pokemon,"in change");
        
    }
    const refresh = () => {
        datachange(data);
        setPokemon("");
    }
    

    
    return (
        <>
            <div >
                <input type="text" value={pokemon} onChange={(e) => { change(e);  }} className="input" placeholder="Search Pokemon"/>
                
                <br />
                <button onClick={refresh} className="button">Refresh</button>
            </div>
        </>
    )
}
export default SearchFilter;