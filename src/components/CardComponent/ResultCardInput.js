import React from "react";
import { Input, DropDown, DropDownType } from "../../components/Input/Input";
import { TYPE_OPTIONS } from "../../constants"
export default function ResultCardInput({ onChange, data ,formData}) {
  return (
    <>
      
      <div>
        {" "}
        <DropDownType
          label={"Type"}
          onChange={onChange}
          name={`resultType${data}`}
          data={data}
          options={TYPE_OPTIONS['eq']}
        />
      </div>
      <div>
        {" "}
        <Input
          label={"value"}
          onChange={onChange}
          name={`resultValue${data}`}
          data={data}
        />
      </div>
    </>
  );
}
