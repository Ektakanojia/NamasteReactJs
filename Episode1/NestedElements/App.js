
/**
* we will see how create the nested structure 
*<div id="parent">
*<div id="child">
*<h1></h1>
*</div>
*</div>
**/
const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"I am a heading")))

//const heading = React.createElement("h1",{id:"heading"},"Hello world program in React js")
//const root =ReactDOM.createRoot(document.getElementById("root"))
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)