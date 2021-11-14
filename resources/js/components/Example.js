import React  from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import App from './App';

function Example() {
    return (
    <Provider store={store}>
        <App />
    </Provider>
    );
}

export default Example;


if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
};
