import React  from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Post from './Private/Post';

function Private() {
    return (
    <Provider store={store}>
      <Post />
    </Provider>
    );
}

export default Private;


if (document.getElementById('private')) {
    ReactDOM.render(<Private />, document.getElementById('private'));
};
