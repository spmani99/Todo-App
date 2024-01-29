import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducer';
import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension';

const store = createStore(reducer, composeWithDevToolsDevelopmentOnly(applyMiddleware(thunk)));
export default store;
