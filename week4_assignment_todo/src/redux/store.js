import { createStore, applyMiddleware } from 'redux';

import rootReducers from './reducers';

let middleware = [];

const store = createStore(rootReducers, applyMiddleware(...middleware));

export default store;
