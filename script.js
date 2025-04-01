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
rootEle.render(parent) // object becomes HTML