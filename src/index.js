import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './store/store';


const Root = () => {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

reportWebVitals();
