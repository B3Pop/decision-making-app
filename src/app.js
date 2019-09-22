console.log('App.js is running');

const app = {
    title: 'Decision Making App',
    subTitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderDecisionApp();
    }
};

const onClearAll = () => {
    app.options = [];
    renderDecisionApp();
}

const appRoot = document.getElementById('app')

const renderDecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options available.'}</p>
            <p>{app.options.length}</p>
            <p><button onClick={onClearAll}>Clear All</button></p>
            <ol>
                <li>Item uno</li>
                <li>Item dos</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderDecisionApp();