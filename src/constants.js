export const TYPE_OPTIONS = {
    "gt": [{ id: "", name: "None" },{ id: "integer", name: "Integer" }],
    "lt": [{ id: "", name: "None" },{ id: "integer", name: "Integer" }],
    "eq": [{ id: "", name: "None" },{ id: "integer", name: "Integer" }, { id: "string", name: "String" }],
    "ct": [{ id: "", name: "None" },{ id: "string", name: "String" }],
    "default":[]
}


export const TYPE_ENUMS={
    "gt": ">",
    "lt": "<",
    "eq": "=",
    "ct": "Contains",
}


export const SET_FORM = "SET_FORM";
export const REMOVE_FORM = "REMOVE_FORM";


export const Operator_OPTIONS = {
    "string": [{ id: "", name: "None" },{ id: "eq", name: "=" },{ id: "ct", name: "Contains" }],
    "integer": [{ id: "", name: "None" },{ id: "gt", name: ">" },{ id: "lt", name: "<" },{ id: "eq", name: "=" }],
    
}