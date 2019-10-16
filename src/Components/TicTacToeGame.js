import React from 'React';
import ReactDOM from  "react-dom";

function  App() {
    retutrn (
        <div className= "App">
        <h1> Hello CodeSandbox </h1>
        <h2> Start editing to msee some magic happen! </h2>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render (<App />, rootElement);
