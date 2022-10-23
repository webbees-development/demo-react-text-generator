import React, {useState, useEffect} from "react";
import './App.css';
import axios from "axios";
import Output from "./components/Output";
import Select from "./components/controls/Select";
import Text from "./components/controls/Text";

function App() {

  const [state, setState] = useState({paras: 4, html: true, text: ""});

  useEffect(() => {
    axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${state.paras}&start-with-lorem=1&format=${state.html ? "html" : "text"}`)
    .then((response) => {
      setState((prevValues) => {
        return {...prevValues, text: response.data};
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }, [state.paras, state.html])


  function setHtmlOption(option){
    setState((prevValues) => {
      return {...prevValues, html: option};
    });
  }

  function setParagraphOption(option){
    setState((prevValues) => {
      return {...prevValues, paras: option};
    });
  }

  return (
    <div className="App container" style={{minHeight: "100px"}}>
      <h1 className="text-center">ReactJS Sample Text Generator</h1>
      <hr />
      <form className="form-inline">
        <div className="form-group">
          <label>Include HTML:</label>
          <Select setState={setHtmlOption} />
        </div>
        <div className="form-group">
          <label>Number of Paragraphs:</label>
          <Text setState={setParagraphOption} />
        </div>
      </form>
      <br /><br />
      <Output text={state.text} />
    </div>
  );
}

export default App;
