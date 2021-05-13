import Home from "./pages/Home/Home";
import FlowChart from "./pages/FlowChart/FlowChart"
import "./App.css";
import { Switch, Redirect, Route } from "react-router-dom";
import { FormProvider, NameProvider } from "./context/FormProvider";
import NameSpace from "./pages/NameSpace/NameSpace";
import ButtonSpace from "./pages/ButtonSpace/ButtonSpace";
import AllTasks from "./pages/AllTasks/AllTasks";
import Evaluation from "./pages/Evaluation/Evaluation";
import LoaderComponent from "./components/LoaderComponent/LoaderComponent";
import React, { useState,useEffect } from "react"
function App() {
  const [loading, setLoading] = useState(false)
  return (
    <div className="App">
      <LoaderComponent loading={loading} />
      <NameProvider>
        <FormProvider>
         
          <Switch>
            <Route exact path="/create" render={(props) => (<Home history={props.history} setLoading={setLoading} />)} />
            <Route exact path="/result" render={(props) => (<FlowChart history={props.history} match={props.match} setLoading={setLoading} />)} />
            <Route exact path="/" component={NameSpace} />
            <Route exact path="/button" render={(props) => (<ButtonSpace history={props.history} setLoading={setLoading} />)} />
            <Route exact path="/tasks" render={(props) => (<AllTasks history={props.history} setLoading={setLoading} />)} />
            <Route exact path="/evaluation" render={(props) => (<Evaluation history={props.history} setLoading={setLoading} />)} />
          </Switch>
        </FormProvider>
      </NameProvider>
    </div>
  );
}

export default App;
