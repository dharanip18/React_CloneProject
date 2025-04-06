# React_CloneProject
# EP 1
    Set up all the tools in your laptop
    VS Code
    Chrome
    Extensions of Chrome
    Create a new Git repo
    Build your first Hello World program using,
    Using just HTML
    Using JS to manipulate the DOM
    Using React
    use CDN Links
    Create an Element
    Create nested React Elements
    Use root.render to convert object into HTML
    Push code to Github 

# Ep 2
    NPM -
    npm init
    npm install -D parcel
    ^2.8.3 => ^

    package.json - is a configuration for npm - keep track of what versions of the packages installed in system
    package-lock.json - keeps track of exact versions of all dependencies

    node modules-

    npx- execute a package

    # parcel
    - Dev Build
    - Local Server
    - HMR - HOT module replacement
    - File watchin algorithm - c++
    - Caching - Faster Builds
    - Image optimization
    - Minification
    - Bundles
    - Compressing
    - Content Hashing
    - Code Spliting
    - Differential Bundling - support older browser
    - Diagnostic
    - Error Handling
    - Https
    - Tree Shaking - remove unused code
    - Different dev and prod bundles

    parcel
    browserslist

# Ep 3
    //react
    const heading= React.createElement(
    "h1",
    {},
    "HI from FoodAPP!");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);

    JSX -  makes devlopers life easy - this is not html inside javasript - its html like syntaxt - this also an object like react - js engine doesnot understand JSX - it will understand Ecma script ES6 pure javascript - jsx transpiled (converted into browsers understand) before it reaches js engine - parcel transpiles with help of babel
    JSX => React.createElement => ReactElement - JS object => HTML
    const jsxHeading =<h1>HI from JSX</h1>

    React Component - Everything is a component in react
        Class Based Components - old way
        Functional Components - new way
            is just a normal javascript function that returns some piece/bunch of jsx/react element

            const Header = () =>{
            return <h1>Heading</h1>
            }

            const Header = () =>(
            <h1>Heading</h1>
            )

            const Header = () => <h1>Heading</h1>

             const Header = function() {
            return (<h1>Heading</h1>);
            }

            root.render(heading) //Render React Element
            root.render(<header />) //React React Component

   jsx - incase of XSS, jsx takes care of injection attacks, jsx will escape that - it will sanitizes the data

# Ep 5
    Folder
        src
            App.js
            components
                Header.js
                Body.js
                RestaurantCard.js
                Footer.js
            utils
                constants.js
                mockData.js

    we can have only one export default in one file.
    to export multiple in single file use named export - export const  IMG_URL ="....";
    to import named imports use {} - import {IMG_URL} from "";

    useState - never create a useState outside a component
                   - never create inside a condtion if else, function
                   - It should be created inside a functional component at the higher level

    useEffect - It has a callback function and an dependency array
                    - If no dependency array useEffect is called on every component render
                    - If dependency array is empty useEffect is called on initial render and just once

