import React from 'react';
import classes from "./Input.module.css";

export const Input = ({ label, name, data, onChange,type="text" }) => {
    return (
        <div className={classes.Input}>
            <label htmlFor="text">{label}</label>
            <input type={type} id="text" name={`${name}`} onChange={onChange} />
        </div>
    )
}

export const DropDown = ({ data, label, name, onChange }) => {
    return (
        <>

            <div className={classes.Input}>
                <label htmlFor="cars">{label}</label>
                <select id="cars" name={`${name}`} onChange={onChange}>
                    <option value="">{"None"}</option>
                    <option value="gt">{">"}</option>
                    <option value="lt">{"<"}</option>
                    <option value="eq">{"="}</option>
                    <option value="ct">{"contains"}</option>
                </select>
            </div>
        </>
    )
}

export const DropDownType = ({ data, label, name, onChange, options }) => {
    return (
        <>

            <div className={classes.Input}>
                <label htmlFor="cars">{label}</label>
                <select id="cars" name={`${name}`} onChange={onChange}>
                    {options.map((item) => (
                        <option value={`${item.id}`}>{`${item.name}`}</option>
                    ))}

                </select>
            </div>
        </>
    )
}


export const DropDownMax = ({ label, name, onChange, options }) => {
    return (
        <>

            <div className={classes.InputMax}>
                <label htmlFor="cars">{label}</label>
                <select id="cars" name={`${name}`} onChange={onChange}>
                    {options.map((item) => (
                        <option value={`${item.id}`}>{`${item.name}`}</option>
                    ))}

                </select>
            </div>
        </>
    )
}

export const InputMax = ({ label, name, data, onChange }) => {
    return (
        <div className={classes.InputMaxAuto}>
            <label htmlFor="text">{label}</label>
            <input type="text" id="text" name={`${name}`} onChange={onChange} />
        </div>
    )
}

