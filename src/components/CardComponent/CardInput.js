import React from "react";
import { Input, DropDown, DropDownType } from "../../components/Input/Input";
import { TYPE_OPTIONS } from "../../constants"
export default function CardInput({ onChange, data ,formData}) {
  return (
    <>
      <div>
        {" "}
        <DropDown
          label={"Operator"}
          onChange={onChange}
          name={`operator${data}`}
          data={data}
        />
      </div>
      <div>
        {" "}
        <DropDownType
          label={"Type"}
          onChange={onChange}
          name={`type${data}`}
          data={data}
          options={TYPE_OPTIONS[formData[`operator${data}`]===undefined?"gt":formData[`operator${data}`]]}
        />
      </div>
      <div>
        {" "}
        <Input
          label={"value"}
          onChange={onChange}
          name={`value${data}`}
          data={data}
          type={formData[`type${data}`]==="int"?"number":"text"}
        />
      </div>
    </>
  );
}
