console.log('App.js is running');

const appRoot = document.getElementById('app');

let visibility = false;

const toggleDetails = () => {
    visibility =!visibility;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick = {toggleDetails}>{visibility ? 'Hide Details' : 'Show Details'}</button>
            {visibility && (
                <div>
                    <p>The details matter.</p>
                </div>
            )}
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}

render();
