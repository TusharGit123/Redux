import { combineReducers } from 'redux';
import authReducer from './authReducer' ;
import recipeReducer from "./recipeReducer";
// import { firebaseReducer } from 'react-redux-firebase';

export default combineReducers({
    auth: authReducer,
    recipe: recipeReducer,
    // firebase: firebaseReducer
});