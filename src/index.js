import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

let reducerSlice = createSlice({
  name:'slice',
  initialState:{
    value:1000
  },
  
  reducers:{
    addAmmount:function(state,action){
     // console.log(state);
      //console.log(action);
      //console.log(action.payload);
      state.value = state.value + parseInt(action.payload) 

    },
    withdrawAmmount:function(state,action){
      //console.log(state);
      //console.log(action);
      //console.log(action.payload);
      state.value = state.value - parseInt(action.payload) 
      

    }
  }

});

 export const {addAmmount,withdrawAmmount} = reducerSlice.actions

 let rootReducerFunction = reducerSlice.reducer  

 let store = configureStore({
  reducer: {
    rootReducer:rootReducerFunction
  },


});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App2 />
    </Provider>
   
);

