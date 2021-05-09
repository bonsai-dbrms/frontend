import classes from './SlidingCardWithTabs.module.css';
import React from 'react';
import Buldge from '../../assets/Buldgeleft.png';
import CloseIcon from '../../assets/Close.svg';

import styled, { keyframes } from 'styled-components';
import { slideInRight } from 'react-animations';
import { TYPE_ENUMS } from "../../constants"
const slideIn = keyframes`${slideInRight}`;

const SlidingCardWith = ({ isOpen = true, setOpen, data, type }) => {
  const AnimatedCard = styled.div`
    animation: 0.7s ${slideIn};
  `;
  
  return (
    isOpen && (
      <div>
        <div className={classes.Backdrop} />
        <AnimatedCard className={classes.Container}>
          <div style={{ position: 'relative' }}>
            <div className={classes.Buldge}>
              <img src={Buldge} alt='' />
            </div>
            <img src={CloseIcon} className={classes.CloseIcon} alt='' onClick={() => setOpen(false)} />
          </div>
          <div className={classes.Heading}>
            Heading
          </div>
          <div className={type?classes.InnerCardResult:classes.InnerCard}>
            {type ? (<>
              <div className={classes.operatorHead}>Value</div> </>) : (<> <div className={classes.operatorHead}> Operator</div>
                <div className={classes.operatorHead}>Value</div> </>)}

            {data && data.map((item, i) => type ? (
              <>

                <div className={classes.operator}> {item.value} </div>
              </>
            ) : (
              <>
                <div className={classes.operator}> {TYPE_ENUMS[item.operator]} </div>
                <div className={classes.operator}> {item.value} </div>
              </>
            ))}

          </div>
        </AnimatedCard>
      </div>
    )
  );
};

export default SlidingCardWith;
