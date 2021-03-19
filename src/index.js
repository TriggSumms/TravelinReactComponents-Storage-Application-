import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { ComponentLibrary } from "./Components/ComponentLibrary.js"
// import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ComponentLibrary />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)