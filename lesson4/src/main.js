'use strict'
import React from "react";
import ReactDOM from "react-dom";
import Activity from "./activity.jsx";

window.addEventListener('load',()=>{
    ReactDOM.render(<Activity />,document.getElementById('app'));   
})