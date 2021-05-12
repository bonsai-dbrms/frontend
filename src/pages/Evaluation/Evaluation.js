import React, { useState, useEffect, useContext } from "react";
import classes from "./Evaluation.module.css";
import NavBar from "../../components/Navbar/Navbar";
import TableComponent from "../../components/TableWithBar/TableWithBar";
import { Input, DropDownType } from "../../components/Input/Input";
import { NameContext } from "../../context/FormProvider";
import { RuleService } from "../../services/RuleService";
import { Operator_OPTIONS } from "../../constants";
import SlidingCardWith from "../../components/SlidingCardWithTabs/SlidingCardWithTabs"
export default function Evaluation(props) {
    let [head, setHead] = useState([
        "S.No",
        "Attribute",
        "Type",
        "Operator",
        "Value",
    ]);
    let [keys, setKeys] = useState([
        "id",
        "attribute_name",
        "type",
        "operator",
        "value",
    ]);
    let [data, setData] = useState([]);
    let [result, setResult] = useState([]);
    let [open, setOpen] = useState(false);
    let [formdata, setFormData] = useState({});
    const { state: stateName } = useContext(NameContext);
    const startLoader = () => {
        props.setLoading(true);
    };
    const stopLoader = () => {
        props.setLoading(false);
    };
    const handleChange = (e, item) => {
        let { value, name } = e.target;
        setFormData((prev) => {
            return { ...prev, [name]: value };
        });
    };
    const InputColumn = (item) => (
        <Input
            name={`${item.attribute_name}v`}
            onChange={(e) => {
                handleChange(e, item);
            }}
        />
    );
    const OperatorColumn = (item) => (
        <DropDownType
            name={`${item.attribute_name}o`}
            options={Operator_OPTIONS[item.type]}
            onChange={(e) => {
                handleChange(e, item);
            }}
        />
    );



    useEffect(() => {
        let namespace = stateName.name.namespace;
        RuleService.getAllAtrribute(
            namespace,
            startLoader,
            handleGetAttributeSuccess,
            (err) => console.log(err),
            stopLoader
        );
    }, [stateName]);
    const handleGetAttributeSuccess = ({ data }) => {
        // let resData =[...data];

        let resData = data.attributes.map((item, i) => ({
            ...item,
            id: i + 1,
            operator: OperatorColumn(item),
            value: InputColumn(item),
        }));
        setData(resData);
    };

    const handleSubmit = () => {
        let namespace = stateName.name.namespace;
        let newdata = [];
        data.forEach((v, i) => {
            const val = (typeof v === 'object') ? Object.assign({}, v) : v;
            newdata.push(val);
        });
        let predicates = newdata.map((item) => {
            
            delete item.id
            return {
                ...item,
                operator: formdata[`${item.attribute_name}o`],
                value: item.type === "string" ? formdata[`${item.attribute_name}v`] : Number(formdata[`${item.attribute_name}v`]),
            }
        })
        let payload = {
            namespace: namespace,
            predicates: [
                ...predicates
            ],
        };
        RuleService.ruleEvaluation(
            namespace,
            payload,
            startLoader,
            handleEvaluationSuccess,
            (err) => console.log(err),
            stopLoader
        );
    };
    const handleEvaluationSuccess = ({ data }) => {
        console.log(data);
        setResult(data.outputs)
        setOpen(true)
    };
    return (
        <div className={classes.Evaluation}>
            <SlidingCardWith type={true} isOpen={open} setOpen={setOpen} data={result} />
            <NavBar />
            <div className={classes.Container}>
                <div className={classes.Heading}>Evaluation</div>
                <div className={classes.Table}>
                    <TableComponent head={head} keys={keys} data={data} />
                </div>
                <div
                    className={`btn-blue` + ` ${classes.Submit}`}
                    onClick={handleSubmit}
                >
                    SUBMIT
        </div>
            </div>
        </div>
    );
}
