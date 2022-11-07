import React, { useState } from "react";
import { Link } from "react-router-dom";
import PokemonData from "../../component/pokemondata/PokemonData";
import "./home.css";
import SearchFilter from "../../component/SearchFilter/SearchFilter";
import { useEffect } from "react";
const Home = ({ array }) => {
    
    const [filteredArray, setFilteredArray] = useState([]);
    useEffect(()=>{
        setFilteredArray(array);
    },[array]);
    
    
    return (
        <>
            
            <div className="filter">
                <SearchFilter data={array} datachange={setFilteredArray}/>
            </div>
            
            <div className="pokemon-data">
                {filteredArray.map((item, key) => {
                    
                    return (
                        <PokemonData
                            key={key}
                            name={item.name}
                            imagesrc={item.sprites.front_default}
                            abilities={item.abilities}
                            
                            types={item.types}
                        />
                    )
                })}
            </div>

            <button className="button-move"> <Link to="/lazy">Next Page</Link> </button>
        </>
    )
}

export default Home;