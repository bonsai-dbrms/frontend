import React from 'react'
import classes from "./Navbar.module.css";
import logoIcon from "../../assets/logo.svg";
import { withRouter, Link } from "react-router-dom"
const Navbar = (props) => {
    const params = props.match.path;
    
    return (
        <>
            {
                params === "/" || params === "/button"  ? (<div className={classes.Navbar}>
                    <div className={classes.logo}>
                        <Link to="/"> <img src={logoIcon} alt="logo" /></Link>
                    </div>
                </div>) : (<div className={classes.NavbarWithLinks}>
                    <div className={classes.logo}>
                        <Link to="/"> <img src={logoIcon} alt="logo" /></Link>
                    </div>
                    <div className={classes.LinkContainer}>
                    <div className={classes.link}>
                        <Link to="/create"> <div className="btn-blue-link">Create</div></Link>
                    </div>
                    <div className={classes.link}>
                        <Link to="/evaluation"> <div className="btn-blue-link">Evaluation</div></Link>
                    </div>
                    <div className={classes.link}>
                        <Link to="/tasks"> <div className="btn-blue-link">All Rules</div></Link>
                    </div>
                    </div>

                </div>)
            }
        </>
    )
}

export default withRouter(Navbar);
