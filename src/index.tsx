import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Hello from './components/Hello';
import reducer from './reducer';

const store = createStore(reducer);

const App: React.StatelessComponent<any> = () => (
    <Provider store={store}><Hello /></Provider>
);

ReactDOM.render(
    <App />,
    document.getElementById('main')
);