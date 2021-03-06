import React, { useContext, useState, useEffect, useRef } from 'react'
import classes from "./FlowChart.module.css";
import Navbar from "../../components/Navbar/Navbar";
import SlidingCardWith from "../../components/SlidingCardWithTabs/SlidingCardWithTabs";
import { FormContext, NameContext } from "../../context/FormProvider";
import Xarrow from "react-xarrows";
import { lineStyle, lineStyleWitharrow } from "./lineStyle";
import { RuleService } from "../../services/RuleService"
export default function FlowChart(props) {
    const { state, dispatch } = useContext(FormContext);
    const { state: stateName } = useContext(NameContext);
    const [colours, setColours] = useState([]);
    const [type, setType] = useState(false);
    const [boxes, setBoxes] = useState([]);
    const [lines, setLines] = useState([]);
    const [Data, setData] = useState([]);
    const startLoader = () => { props.setLoading(true) };
    const stopLoader = () => { props.setLoading(false) };
    const boxStyle = (data, i) => {
        return { id: data, x: 100 + i * 150, y: 100 }
    }
    const [show, setShow] = useState(false);
    const handleClose = () => { setShow(false) }
    useEffect(() => {
        // props.setLoading(true)
        if (stateName.name.namespace === undefined) {
            props.history.push('/')
        }
    }, [stateName]);
    
    useEffect(() => {
        let colorArray = [];
        state.form.predicates && state.form.predicates.map((item, i) => {
            let found = colorArray.find((data) => data === item.attribute_name)
            if (!found) {
                colorArray.push(item.attribute_name)
            }
        })

        setColours(colorArray)

    }, [state]);
    useEffect(() => {
        let namespace = stateName.name.namespace;
        let ruleId = (props.history.location.search).split('?')[1];
       
        if (ruleId) {

            RuleService.getRuleById(
                ruleId,
                namespace,
                startLoader,
                handleFetchRuleSuccess,
                (err) => console.log(err),
                stopLoader
            )
        }
    }, []);
    const handleFetchRuleSuccess = ({ data }) => {
        setBoxes([])
        setLines([])
        dispatch({
            type: "REMOVE_FORM",

        });
        dispatch({
            type: "SET_FORM",
            payload: data,
        });
    }


    useEffect(() => {
        let boxesArray = [...boxes];
        let lineArray = [...lines];
        colours.forEach((item, i) => {
            let box = boxStyle(item, i);
            let line = colours[i + 1] && lineStyle(item, colours[i + 1], true, 0);
            let line1 = lineStyleWitharrow(item, "result", false, 10)
            boxesArray.push(box)
            colours[i + 1] && lineArray.push(line);
            lineArray.push(line1);
        })
        setBoxes(boxesArray);
        setLines(lineArray);
    }, [colours])

    const handleOpenSlider = (id) => {
        setType(false)
        let array = state.form.predicates && state.form.predicates.filter((item, i) => item.attribute_name === id)
        setShow(true)

        setData(array)

    }
    const resultHandle = () => {
        // setType(true)
        let array = state.form.result && state.form.result
        setShow(true)

        array && setData(array)
    }
 
    return (
        <div className={classes.FlowChart}>
            <Navbar />
            <SlidingCardWith isOpen={show} handleClose={handleClose} data={Data} type={type} />
            <div className={classes.Container}>
                <div className={classes.Left}>
                    <div className={classes.Heading}>
                        FLOW CHART
                        </div>
                    <div className={classes.BoxContainer}>
                        {boxes.map((boxItem, i) => (
                            <div id={boxItem.id} key={i} className={classes.Box} onClick={() => { handleOpenSlider(boxItem.id) }}><div>{String(boxItem.id).toUpperCase()}</div></div>
                        ))}
                    </div>
                    {
                        boxes.length > 0 && (<div className={classes.resultBoxContainer}>
                            {/* <div id={'result'} className={classes.tank}>
                                <div className={classes.bottom}></div>
                                <div className={classes.middle}></div>
                                <div className={classes.top}></div>
                            </div> */}
                            <div id={'result'} className={classes.resultBox} onClick={resultHandle}><div>{String(state.form.result && state.form.result[0].attribute_name).toUpperCase()}</div></div>
                        </div>)
                    }
                    {lines.map((line, i) => (
                        <Xarrow key={i} {...line} />
                    ))}
                </div>
                <div className={classes.test}>
                    <div className={classes.Reference}>
                        <div className={classes.Heading}>
                            Legends
                        </div>
                        <div className={classes.If}>
                            <div>IF</div>
                        </div>
                        <div className={classes.resultBox}>
                            <div>OUTPUT</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

