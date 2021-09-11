import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/Index';

// creating store which contains all 
// the reducers and also thunk as middleware
// to support the API calls
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;