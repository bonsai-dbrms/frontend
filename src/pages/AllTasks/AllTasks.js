import classes from './AllTasks.module.css';
import React, { useState, useContext, useEffect } from 'react';
import NavBar from "../../components/Navbar/Navbar"
import TableComponent from "../../components/TableWithBar/TableWithBar";
import eyeIcon from "../../assets/eye.svg";
import { FormContext, NameContext } from "../../context/FormProvider";
import { RuleService } from "../../services/RuleService"
export default function AllTasks(props) {
    let [head, setHead] = useState(["Rule Id", "Description", "Action"]);
    let [keys, setKeys] = useState(["id", "rule_description", "action"]);
    let [data, setData] = useState([]);
    const { state, dispatch } = useContext(FormContext);
    const { state: stateName } = useContext(NameContext);
    const startLoader = () => { props.setLoading(true) };
    const stopLoader = () => { props.setLoading(false) };


    useEffect(() => {
        let namespace = stateName.name.namespace
        RuleService.getAllRules(namespace, startLoader, handleGetRuleSuccess, (err) => console.log(err), stopLoader)
    }, [stateName]);
    const handleGetRuleSuccess = ({ data }) => {
        // let resData =[...data];
        console.log(data)
        let resData = data.map((item) => ({
            ...item,
            action: eye(item)
        }))
        setData(resData)
    }
    const eye = (item) => (
        <div className={classes.Eye}>
            <img src={eyeIcon} alt="" onClick={() => {

                dispatch({
                    type: "SET_FORM",
                    payload: item,
                });
                props.history.push('/result')
            }} />
        </div>
    );

    return (
        <div className={classes.AllTasks}>
            <NavBar />
            <div className={classes.Container}>
                <div className={classes.Heading}>
                    All Rules
                </div>
                <div className={classes.Table}> <TableComponent head={head} keys={keys} data={data} totalCount={data.length} /></div>
            </div>
        </div>
    )
}
