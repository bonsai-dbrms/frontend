import React from 'react'
import classes from "./Navbar.module.css";
import logoIcon from "../../assets/logo.svg"
export default function Navbar() {
    return (
        <div className={classes.Navbar}>
            <div className={classes.logo}>
                <img src={logoIcon} alt="logo" />
            </div>
        </div>
    )
}
