'use strict';

console.log('App.js is running');

var app = {
    title: 'My AppDecision Making App',
    subTitle: 'Put your life in the hands of a computer',
    options: ['Uno', 'Dos']
};

//JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subTitle && React.createElement(
        'p',
        null,
        app.subTitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options:' : 'No options available.'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item uno'
        ),
        React.createElement(
            'li',
            null,
            'Item dos'
        )
    )
);

var theCount = 0;
var addOne = function addOne() {
    theCount++;
    renderCounterApp();
};
var minusOne = function minusOne() {
    theCount--;
    renderCounterApp();
};
var reset = function reset() {
    theCount = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            theCount
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
