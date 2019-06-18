import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StripeProvider } from 'react-stripe-elements';


const store = createStore(cartReducer);

ReactDOM.render(
  <>
  <StripeProvider apiKey="pk_test_yjzvKDhWRanQ63eTaS29zwdv00xXSOKnEB">
      <Provider store={store}>
        <App />
      </Provider>
      </StripeProvider>
  </>
  , document.getElementById('root'));
