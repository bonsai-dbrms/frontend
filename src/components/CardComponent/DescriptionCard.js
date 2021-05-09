import classes from './Card.module.css'
import React from 'react'
import {InputMax}from "../Input/Input"
export default function DescriptionCard({onChange}) {
    return (
        <div className={classes.Card}>
             <div className={classes.VariableContainer}>
             <InputMax label="DESCRRIPTION" onChange={onChange} name={"description"}/>
             </div>
          
        </div>
    )
}
