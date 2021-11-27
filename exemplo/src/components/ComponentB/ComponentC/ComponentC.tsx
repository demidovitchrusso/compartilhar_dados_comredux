import React from "react";
import { useSelector } from "react-redux";

import "./ComponentC.css"

const ComponentC = () => {

    const data = useSelector((state: any) => state.dataStore.data)
    
    return(        
        <div className="ComponentC">
            <h1>Component C</h1>
            { 
                data &&  
                    <p>
                        <span>Biblioteca: { data.biblioteca }</span><br />
                        <span>Autor: { data.autor }</span>
                    </p>
            }
            
        </div>
    )
}

export default ComponentC
