import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
// import firebase from 'firebase';
// import { reactreduxfirebase } from 'react-redux-firebase';


  // const firebaseConfig = {
  //   apiKey: "AIzaSyCTQhdwxFV3S7SMOpzlN0DDuPtWOfzkvM4",
  //   authDomain: "myredux-9bbc7.firebaseapp.com",
  //   databaseURL: "https://myredux-9bbc7.firebaseio.com",
  //   projectId: "myredux-9bbc7",
  //   storageBucket: "",
  //   messagingSenderId: "664714108779",
  //   appId: "1:664714108779:web:ff43c491f51b3827"
  // };
  // firebase.initializeApp(firebaseConfig);

  const intialState = {};

  const middleware = [thunk];

  const store = createStore(
    rootReducer,
    intialState,
    compose(
      // reactreduxfirebase(firebase, firebaseConfig),
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );

  export default store;
