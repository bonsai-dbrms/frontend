import React, { useState, useContext } from 'react'
import classes from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import CardComponent from "../../components/CardComponent/CardComponent"
import * as _ from "lodash";
import { responseHelper } from "../../utils/responseHelper";
import ResultCard from "../../components/CardComponent/ResultCardComponent";
import { FormContext } from "../../context/FormProvider";
const Home = (props) => {
    const { state, dispatch } = useContext(FormContext)
    const [container, setContainer] = useState([1]);
    const [length, setLength] = useState(1);
    const [formData, setFormData] = useState({});
    const [FormDataResult, setFormDataResult] = useState({});
    // console.log(formData)
    const handleSubmit = (e) => {
        e.preventDefault()
        const responseData = responseHelper(formData, FormDataResult)
        dispatch({
            type: "SET_FORM",
            payload: responseData,
        });
        props.history.push('/result')
        console.log(responseData)
    }

    const handleAddContainer = () => {
        const array = Array.from({ length: length + 1 }, (_, i) => i + 1)
        // console.log(array)
        setLength(length + 1);
        setContainer(array)
    }
    const handleRemoveContainer = (data, cardlength) => {

        if (length > 1) {
            let keyArray = [`operator${data}${0}`, `value${data}${0}`, `variable${data}${0}`, `type${data}${0}`];
            cardlength.forEach((item) => {
                keyArray.push(`operator${data}${item}`)
                keyArray.push(`value${data}${item}`)
                keyArray.push(`type${data}${item}`)
            })

            console.log(keyArray)
            let object = { ...formData };
            let result = _.omit(object, keyArray);
            setFormData(result)
            const array = Array.from({ length: length - 1 }, (_, i) => i + 1)
            setLength(length - 1)
            setContainer(array)
        }

    }
    const onChange = (e) => {
        let { value, name } = e.target
        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }
    const onChangeResult = (e) => {
        let { value, name } = e.target
        setFormDataResult((prev) => {
            return { ...prev, [name]: value }
        })
    }
    return (
        <div className={classes.Home}>

            <Navbar />

            <div className={classes.Container}>
                <div className={classes.Left}>
                    {
                        container.map((item, i) => (
                            <>
                                {i >= 1 ? (<div className="btn-blue" ><div>AND</div></div>) : null}

                                <CardComponent key={i} onChange={onChange} data={i} handleAddContainer={handleAddContainer} handleRemoveContainer={handleRemoveContainer} setFormData={setFormData} formData={formData} />


                            </>
                        ))
                    }
                    <div className="btn-blue" ><div>Equals</div></div>
                    <ResultCard onChange={onChangeResult} setFormData={setFormDataResult} formData={FormDataResult} />
                    <div className="btn-blue" onClick={handleSubmit}><div>SUBMIT</div></div>
                </div>

                <div className={classes.test}>
                    <div className={classes.Reference}>
                        <div className={classes.Heading}>
                            References
                    </div>
                        <div className={classes.SubHeading}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    </div>
                        <div className={classes.SubHeading}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;