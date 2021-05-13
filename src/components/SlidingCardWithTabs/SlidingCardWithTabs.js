import classes from './SlidingCardWithTabs.module.css';
import React, { useEffect } from 'react';
import Buldge from '../../assets/Buldgeleft.png';
import CloseIcon from '../../assets/Close.svg';
import TableComponent from "../TableWithBar/TableWithBar";
import styled, { keyframes } from 'styled-components';
import { slideInRight } from 'react-animations';
import { TYPE_ENUMS } from "../../constants"
import { useState } from 'react/cjs/react.development';
import eyeIcon from "../../assets/eye.svg";
import { withRouter } from "react-router-dom"
const slideIn = keyframes`${slideInRight}`;

const SlidingCardWith = ({ isOpen = true, setOpen, data, type, history }) => {
  const AnimatedCard = styled.div`
    animation: 0.7s ${slideIn};
  `;
  const eye = (item) => (
    <div className={classes.Eye}>
      <img src={eyeIcon} alt="" onClick={() => {
        history.push(`/result?${item}`)
      }} />
    </div>
  );
  const [state, setState] = useState([]);
  const [operatorData, setoperatorData] = useState([]);
  useEffect(() => {
    if (type && data && data.output) {
      let stateData = data.eval_order && data.eval_order.map((item) => {
        return {
          ruleId: item,
          action: eye(item)
        }
      })
      setoperatorData([{ attribute_name: data.output.attribute_name, operator: "=", value: data.output.value }])
      setState(stateData)
    }
  }, [type, data])
  return (
    isOpen && (
      <div>
        <div className={classes.Backdrop} onClick={() => setOpen(false)} />
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
          {type && data && (<div className={classes.Table}>
            <TableComponent head={["RuleId", "Action"]} keys={["ruleId", "action"]} data={state} />
          </div>)}


          {type && data && (<div className={classes.Table}>
            <TableComponent head={["Attribute", "Operator", "Value"]} keys={["attribute_name", "operator", "value"]} data={operatorData} />
          </div>)}
          {!type && <div className={classes.InnerCard}>
            <div className={classes.operatorHead}> Operator</div>
            <div className={classes.operatorHead}>Value</div>

            {data && data.map((item) => (
              <>
                <div className={classes.operator}> {TYPE_ENUMS[item.operator]} </div>
                <div className={classes.operator}> {item.value} </div>
              </>
            ))}



          </div>}


        </AnimatedCard>
      </div>
    )
  );
};

export default withRouter(SlidingCardWith);
