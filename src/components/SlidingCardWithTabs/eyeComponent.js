import React from 'react'
import eyeIcon from "../../assets/eye.svg";
import classes from './SlidingCardWithTabs.module.css';
export default function eyeComponent(item,history) {
    return (
        <div className={classes.Eye}>
            <img src={eyeIcon} alt="" onClick={() => {
              history.push(`/result?${item}`)
            }} />
          </div>
    )
}
