import {createStore,applyMiddleware,compose} from 'redux'
import reducers from './reducers';
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import logger from 'redux-logger'
let store = applyMiddleware(thunk,promise,logger)(createStore)(reducers);

window.store=store;
export default store