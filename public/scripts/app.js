'use strict';

console.log('App.js is running');

var app = {
    title: 'Decision Making App',
    subTitle: 'Put your life in the hands of a computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderDecisionApp();
    }
};

var onClearAll = function onClearAll() {
    app.options = [];
    renderDecisionApp();
};

var appRoot = document.getElementById('app');

var renderDecisionApp = function renderDecisionApp() {
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
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'p',
            null,
            React.createElement(
                'button',
                { onClick: onClearAll },
                'Clear All'
            )
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
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderDecisionApp();
