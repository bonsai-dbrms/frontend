import React, { useEffect, useState } from "react";
import classes from "./Card.module.css";
import { Input, DropDown, DropDownType } from "../../components/Input/Input";
import bulgeRight from "../../assets/bulgeRight.svg";
import bulgeDown from "../../assets/bulgeDown.svg";
import ResultCardInput from "./ResultCardInput";
import * as _ from "lodash";
import { TYPE_OPTIONS } from "../../constants"
export default function ResultCard({
    onChange,
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
              let keyArray = [,`resultValue0${container[container.length - 1]}`,`resultType0${container[container.length - 1]}`];
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
                            name={`resultVariable00`}

                        />
                    </div>
                </div>

                <div className={classes.ValueContainer}>
                    <div className={classes.InputContainerResult}>

                        <div>

                            <DropDownType
                                label={"Type"}
                                onChange={onChange}
                                name={`resultType00`}
                                options={TYPE_OPTIONS['eq']}
                            />
                        </div>
                        <div>

                            <Input
                                label={"value"}
                                onChange={onChange}
                                name={`resultValue00`}

                            />
                        </div>
                       

                        {container.map((item, i) => (
                            <>
                                <ResultCardInput
                                    onChange={onChange}
                                    key={i}
                                    data={`0${i + 1}`}
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

        </>
    );
}
