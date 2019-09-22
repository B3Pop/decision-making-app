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