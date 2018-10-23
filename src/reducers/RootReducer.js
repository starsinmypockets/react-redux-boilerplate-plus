import {combineReducers} from 'redux';
import simpleReducer from './SimpleReducer';
import UIReducer from './UIReducer';
import ContentReducer from './ContentReducer';

export default combineReducers({
  simpleReducer,
  UI: UIReducer,
  Content: ContentReducer
});
