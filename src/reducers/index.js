import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import personReducer from './personReducer';
import carReducer from './carReducer';


export default combineReducers({
  form: formReducer,
  persons: personReducer,
  carReducer: carReducer
})