import classes from "./SlidingCardWithTabs.module.css";
import React, { useEffect,useState } from "react";
import Buldge from "../../assets/Buldgeleft.png";
import CloseIcon from "../../assets/Close.svg";
import TableComponent from "../TableWithBar/TableWithBar";
import styled, { keyframes } from "styled-components";
import { slideInRight } from "react-animations";
import { TYPE_ENUMS } from "../../constants";
import eyeComponent from "./eyeComponent";
import { withRouter } from "react-router-dom";
const slideIn = keyframes`${slideInRight}`;
const AnimatedCard = styled.div`
  animation: 0.7s ${slideIn};
`;
const SlidingCardWith = ({ isOpen = true,  data, type, history,handleClose }) => {
  const [state, setState] = useState([]);
  const [operatorData, setoperatorData] = useState([]);
  useEffect(() => {
    if (type && data && data?.eval_order &&  data?.output?.attribute_name  ) {
      let stateData = [];
      data.eval_order.map((item) => {
        stateData.push({
          ruleId: item,
          action: eyeComponent(item, history),
        });
      });
      console.log(stateData)
        
      data?.output?.attribute_name &&
        setoperatorData([
          {
            attribute_name: data.output.attribute_name,
            operator: "=",
            value: data.output.value,
          },
        ]);
      setState(stateData);
    }
  }, [type, data]);

  return (
    isOpen && (
      <div>
        <div className={classes.Backdrop} onClick={handleClose} />
        <AnimatedCard className={classes.Container}>
          <div style={{ position: "relative" }}>
            <div className={classes.Buldge}>
              <img src={Buldge} alt="" />
            </div>
            <img
              src={CloseIcon}
              className={classes.CloseIcon}
              alt=""
              onClick={handleClose}
            />
          </div>
          {type && <div className={classes.Heading}>Rule Execution Order</div>}
          {type && data && (
            <div className={classes.Table}>
              <TableComponent
                head={["RuleId", "Action"]}
                keys={["ruleId", "action"]}
                data={state}
              />
            </div>
          )}
          {type && <div className={classes.Heading}>Output</div>}

          {type && data && (
            <div className={classes.Table}>
              <TableComponent
                head={["Attribute", "Operator", "Value"]}
                keys={["attribute_name", "operator", "value"]}
                data={operatorData}
              />
            </div>
          )}
          {!type && (
            <div className={classes.InnerCard}>
              <div className={classes.operatorHead}> Operator</div>
              <div className={classes.operatorHead}>Value</div>

              {data &&
                data.map((item) => (
                  <>
                    <div className={classes.operator}>
                      {" "}
                      {TYPE_ENUMS[item.operator]}{" "}
                    </div>
                    <div className={classes.operator}> {item.value} </div>
                  </>
                ))}
            </div>
          )}
        </AnimatedCard>
      </div>
    )
  );
};

export default withRouter(SlidingCardWith);
