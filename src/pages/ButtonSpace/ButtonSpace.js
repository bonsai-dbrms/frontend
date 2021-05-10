import React, { useState, useContext, useEffect } from 'react'
import classes from "./ButtonSpace.module.css";
import { NameContext } from "../../context/FormProvider";
import Navbar from "../../components/Navbar/Navbar";

export default function ButtonSpace(props) {
    const { state } = useContext(NameContext)
    return (
        <div className={classes.ButtonSpace}>
            <Navbar />
            <div className={classes.container}>
                <div className={classes.Heading}>
                    Namespace: {state.name && String(state.name.namespace).toLowerCase().split('_')[0]} {state.name && String(state.name.namespace).toLowerCase().split('_')[1]}
                </div>
                <div className={classes.ButtonContainer}>
                    <div className={'btn-blue'} onClick={() => { props.history.push("/create") }}>
                        CREATE
                </div>
                    <div className={'btn-blue'} onClick={() => { props.history.push("/evaluation") }}>
                        EVALUATION
                </div>
                    <div className={'btn-blue'} onClick={() => { props.history.push("/tasks") }}>
                        ALL RULES
                </div>
                </div>

            </div>
        </div>
    )
}
