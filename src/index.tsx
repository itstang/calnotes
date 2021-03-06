import 'normalize.css';
import ReactDOM from 'react-dom';
import React, { setGlobal } from 'reactn';
import App from './App';
import './index.scss';
import * as serviceWorker from './serviceWorker';

setGlobal({
  markdownInput: '',
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
