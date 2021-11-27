import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { obterData } from '../../redux/data/Data.actions'

import "./ComponentA.css"

const ComponentA = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(obterData({ biblioteca: 'React JS', autor: 'Facebook' }))
    }, [])

    return (
        <div className="ComponentA">
            <h1>Component A</h1>
        </div>
    )
}
export default ComponentA
