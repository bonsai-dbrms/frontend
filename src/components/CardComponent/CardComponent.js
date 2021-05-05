import React, { useEffect, useState } from "react";
import classes from "./Card.module.css";
import { Input, DropDown, DropDownType } from "../../components/Input/Input";
import bulgeRight from "../../assets/bulgeRight.svg";
import bulgeDown from "../../assets/bulgeDown.svg";
import CardInput from "./CardInput";
import * as _ from "lodash";
import { TYPE_OPTIONS } from "../../constants"
export default function CardComponent({
  handleAddContainer,
  onChange,
  data,
  handleRemoveContainer,
  setFormData,
  formData,
}) {
  const [container, setContainer] = useState([]);
  const [length, setLength] = useState(0);

  const handleAddContainerInput = () => {
    const array = Array.from({ length: length + 1 }, (_, i) => i + 1);
    setLength(length + 1);
    setContainer(array);
  };

  const handleRemoveContainerInput = () => {
    if (length >= 0) {
      let keyArray = [`operator${data}${container[container.length - 1]}`,`value${data}${container[container.length - 1]}`,`type${data}${container[container.length - 1]}`];
      let object = { ...formData };
      let result = _.omit(object, keyArray);
      setFormData(result);
      const array = Array.from({ length: length - 1 }, (_, i) => i + 1);
      setLength(length - 1);
      setContainer(array);
    }
  };
  console.log(formData);

  return (
    <>
      <div className={classes.Card}>
        <div className={classes.VariableContainer}>
          <div>
            <Input
              label={"Variable"}
              onChange={onChange}
              name={`variable${data}0`}
              data={data}
            />
          </div>
        </div>

        <div className={classes.ValueContainer}>
          <div className={classes.InputContainer}>
            <div>

              <DropDown
                label={"Operator"}
                onChange={onChange}
                name={`operator${data}0`}
                data={data}
              />
            </div>
            <div>

              <DropDownType
                label={"Type"}
                onChange={onChange}
                name={`type${data}0`}
                data={data}
                options={TYPE_OPTIONS[formData[`operator${data}0`] === undefined ? "gt" : formData[`operator${data}0`]]}
              />
            </div>
            <div>

              <Input
                label={"value"}
                onChange={onChange}
                name={`value${data}0`}
                data={data}
              />
            </div>

            {container.map((item, i) => (
              <>
                <CardInput
                  onChange={onChange}
                  key={i}
                  data={`${data}${i + 1}`}
                  formData={formData}
                />
              </>
            ))}
          </div>
        </div>

        <div style={{ position: "relative", marginBottom: "3vw" }}>
          <div className={classes.BulgeDown}>
            <img src={bulgeDown} alt="" />
          </div>
          <div
            className={classes.operatorplus + " hover"}
            onClick={handleAddContainerInput}
          >
            +
          </div>
          <div
            className={classes.operatorminus + " hover"}
            onClick={handleRemoveContainerInput}
          >
            -
          </div>
        </div>
        {/* <div className={classes.InnerOperator}>
         
        </div> */}
      </div>
      <div style={{ position: "relative" }}>
        <div className={classes.operatorCard}>
          <img src={bulgeRight} alt="" />
        </div>
        <div
          className={classes.operatorPLus + " hover"}
          onClick={handleAddContainer}
        >
          +
        </div>
        <div
          className={classes.operatorMinus + " hover"}
          onClick={() => {
            handleRemoveContainer(data, container);
          }}
        >
          -
        </div>
      </div>
    </>
  );
}
