console.log('App.js is running');

const app = {
    title: 'My AppDecision Making App',
    subTitle: 'Put your life in the hands of a computer',
    options: ['Uno', 'Dos']
};

//JSX - JavaScript XML
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subTitle && <p>{app.subTitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options:' : 'No options available.'}</p>
        <ol>
            <li>Item uno</li>
            <li>Item dos</li>
        </ol>
    </div>
);

let theCount = 0;
const addOne = () => {
    theCount++;
    renderCounterApp();
}
const minusOne = () => {
    theCount--;
    renderCounterApp();
}
const reset = () => {
    theCount = 0;
    renderCounterApp();
}

const appRoot = document.getElementById('app')

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {theCount}</h1>
            <button onClick = {addOne}>+1</button>
            <button onClick = {minusOne}>-1</button>
            <button onClick = {reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();