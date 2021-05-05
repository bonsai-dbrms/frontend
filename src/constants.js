export const TYPE_OPTIONS = {
    "gt": [{ id: "string", name: "String" },{ id: "", name: "None" }],
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