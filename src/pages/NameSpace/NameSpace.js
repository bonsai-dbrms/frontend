import React, { useState, useContext, useEffect } from 'react'
import classes from "./NameSpace.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { DropDownMax } from "../../components/Input/Input";
import {NameContext } from "../../context/FormProvider";
export default function NameSpace(props) {
    const [formData,setFormData]=useState({});
    const {dispatch} = useContext(NameContext)
    const handleChange = (e) => {
        let { value, name } = e.target
        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }
    const handleClick =()=>{
        dispatch({
            type: "SET_FORM",
            payload: formData,
        });
        if(formData.namespace){
            props.history.push("/button")
        }
    }
    return (
        <div className={classes.NameSpace}>
            <Navbar />
            <div className={classes.Container}>
                <div className={classes.Heading}>
                    Select Name Space
                </div>
                <div className={classes.dropDownSection}>
                    <DropDownMax label={''} options={[{ "id": "", name: "None" },{ "id": "tax_system", name: "Tax System" }, { "id": "loyalty_system", name: "Loyalty System" }]} name={"namespace"} onChange={handleChange} />
                </div>

                <div className={classes.Button} onClick={handleClick}>
                   SUBMIT
                </div>
            </div>

        </div>
    )
}
