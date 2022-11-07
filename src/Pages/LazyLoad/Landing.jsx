import React, { useState, useEffect, useRef } from "react";
import clsx from 'clsx';
import { Link } from "react-router-dom";
import useLazyLoad from "../../useLazyLoad";
import PokemonData from '../../component/pokemondata/PokemonData.jsx';
import LoadPage from "../../component/loadingComponent/loadpage";

const NUM_PER_PAGE = 6;
const TOTAL_PAGES = 16;

export default function Landing({ array }) {
    const [filteredArray, setFilteredArray] = useState([]);

    const triggerRef = useRef(null);
    useEffect(() => {
        setFilteredArray(array);
    }, [array]);

    const onGrabData = (currentPage) => {
        // This would be where you'll call your API
        console.log(currentPage);
        return new Promise((resolve) => {
            setTimeout(() => {
                const data = array.slice(
                    ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
                    NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
                );
                console.log(data);
                resolve(data);
            }, 100);
        });
    };
    const { data, loading } = useLazyLoad({ triggerRef, onGrabData });

    return (
        <>
            <div className="pokemon-data">

                {data.map((item, key) => {

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
            <div ref={triggerRef} className={clsx("trigger", { visible: loading })} > <LoadPage /></div>
            <button className="button-move"> <Link to="/"> Previous Page</Link> </button>
        </>
    )
}

// export default Landing;