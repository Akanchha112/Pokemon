import React from 'react';
import "./load.css";

const loadpage = () => {
    const pagenum = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {pagenum.map(() => {
                return (
                    <div className="card" >
                        <div className="image"></div>
                        <div className="data"></div>
                    </div>
                )
            })}  </>

    )
}

export default loadpage;