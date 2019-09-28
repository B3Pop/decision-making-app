console.log('app.js is running');

import React from 'react';
import ReactDOM from 'react-dom';
import DeciderApp from './components/DeciderApp';
import './styles/styles.scss';

ReactDOM.render(<DeciderApp />, document.getElementById('app'));