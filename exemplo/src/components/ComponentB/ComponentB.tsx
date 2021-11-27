import React from "react";

import ComponentC from "../ComponentB/ComponentC/ComponentC"

import "./ComponentB.css"

const ComponentB = () => {

    return (
        <div className="ComponentB">
            <h1>Component B</h1>
            <ComponentC />
        </div>
    )
}

export default ComponentB
