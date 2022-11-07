import React from "react";
import "./indexCard.css";
const PokemonData = ({ key,name, imagesrc, abilities, stats, types }) => {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    return (
        <>
            <div className="card" key={key}>
                <div className="image">
                    <img src={imagesrc} alt={name} />
                </div>
                <div className="data">
                    <h2>{capitalizeFirstLetter(name)}</h2>

                    <div className="abilities">
                        <h3>Abilities</h3>
                        {abilities.map((item, key) => {
                            return (
                                <span key={key}>{capitalizeFirstLetter(item.ability.name)}</span>
                            )
                        })}
                    </div>

                
                    <div className="type">
                        <h3>Type</h3>
                        {types.map((item, key) => {
                            return (
                                <span key={key}>{capitalizeFirstLetter(item.type.name)}</span>
                            )
                        })}
                    </div>

                </div>

                
            </div>
        </>
    )
}
export default PokemonData;