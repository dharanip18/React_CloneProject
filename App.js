import React from "react";
import ReactDOM from "react-dom/client";


const heading= React.createElement(
    "h1",
    {},
    "HI from FoodAPP!");

    const title = (
        <h1>This react Element</h1>
    )
const Header =() =>{
  return <h1>Heading</h1>
}

const Footer =() =>{
    return <h1>Footer</h1>
  }
  
  const AppLayout = () =>(
  <div id="container">
    <Header/>
    <Header></Header>
    {Header()}
    {console.log("body")} 
    {/* we can write any js code within {} */}
    {title}
    <Footer />
    </div>
  )
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //React Element
root.render(<Header />) // React Component
root.render(<AppLayout />)












/*
//creating element in javascript
let root= document.getElementById("root");
let para= document.createElement('p');
para.innerHTML="You're Awesome!";
root.appendChild(para);

//react
const heading2= React.createElement("h2",{},"Welcome to React!");

/*
    <div id="parent">
        <div id="child">
            <h1>Im react</h1>
        </div>
    </div

    <div id="parent">
        <div id="child"> // 2 element as sibilings put it into a array [..,..,..]
            <h1>Im from react</h1>
            <p>Im a para from react parent</p>
        </div>
    </div

    <div id="parent">
        <div id="child"> // 2 element as sibilings put it into a array [..,..,..]
            <h1>Im from react</h1>
            <p>Im a para from react parent</p>
        </div>
           <div id="child2"> // 2 element as sibilings put it into a array [..,..,..]
            <h1>Im from react</h1>
            <p>Im a para from react parent</p>
        </div>
    </div >
*/
/*
const parent = React.createElement("div",{"id":"parent"},
[React.createElement("div",{"id":"child"},
[React.createElement("h1",{},"Im from react!"),
React.createElement("p",{},"Im a para from react!")]),React.createElement("div",{"id":"child2"},
[React.createElement("h1",{},"Im from react!"),
React.createElement("p",{},"Im a para from react!")])]
) //parent is going complex then next comes *jsx*

console.log(parent) //object
const rootEle=ReactDOM.createRoot(document.getElementById("root"));
// rootEle.render(heading2)
rootEle.render(parent) // when we render this object to DOM it becomes HTML(browser understandable);
--------------------------------------
const heading= React.createElement(
    "h1",
    {},
    "HI from FoodAPP!");

const Header =() =>{
  return <h1>Heading</h1>
}

const Footer =() =>{
    return <h1>Footer</h1>
  }
  
const AppLayout = () =>(
    <div id="container">
    <Header/>
    {console.log("body")} // we can write any js code within {}
    <Footer />
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //React Element
root.render(<Header />) // React Component
root.render(<AppLayout />)

*/