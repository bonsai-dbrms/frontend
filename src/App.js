import Home from "./pages/Home/Home";
import FlowChart from "./pages/FlowChart/FlowChart"
import "./App.css";
import {Switch,Redirect,Route}from "react-router-dom";
import {FormProvider}from "./context/FormProvider"
function App() {
  return (
    <div className="App">
      <FormProvider>
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route exact path="/result"  component={FlowChart} />
      </Switch>
      </FormProvider>
    </div>
  );
}

export default App;
