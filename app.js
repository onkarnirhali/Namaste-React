// const heading = React.createElement("h1", {}, "Hello World from React App.js File");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// console.log("The heading log is =>",heading);

const parent = React.createElement(
    "div",{id: "Parent"},[
        React.createElement('div',{id: "child"},
            React.createElement("h1",{},"I am h1 Tag"),
            React.createElement("h2",{},"I am h2 Tag")
        ]),
        React.createElement('div',{id: "child2"},[
            React.createElement("h1",{},"I am h1 Tag"),
            React.createElement("h2",{},"I am h2 Tag")
        ]),
    ]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

