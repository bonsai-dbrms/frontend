export const TYPE_OPTIONS = {
    "gt": [{ id: "integer", name: "Integer" },{ id: "", name: "None" }],
    "lt": [{ id: "integer", name: "Integer" },{ id: "", name: "None" }],
    "eq": [{ id: "integer", name: "Integer" }, { id: "string", name: "String" },{ id: "", name: "None" }],
    "ct": [{ id: "string", name: "String" },{ id: "", name: "None" }],
    "default":[]
}


export const TYPE_ENUMS={
    "gt": ">",
    "lt": "<",
    "eq": "==",
    "ct": "Contains",
}


export const SET_FORM = "SET_FORM";
export const REMOVE_FORM = "REMOVE_FORM";


export const Operator_OPTIONS = {
    "string": [{ id: "eq", name: "==" },{ id: "ct", name: "Contains" }],
    "integer": [{ id: "gt", name: ">" },{ id: "lt", name: "<" },{ id: "eq", name: "==" }],
    
}