import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAmmount, withdrawAmmount } from '.';
import './App.css';

function App2() {
  const [addfund, setaddfund] = useState("")
  const [withdrawfund, setwithDrowfund] = useState("")

  let store = useSelector(state=>state);
  let dispatch = useDispatch();
  console.log(store)


  let addFund = ()=>{
    dispatch(addAmmount(addfund));
  }
  let withdrawFund = ()=>{
    dispatch(withdrawAmmount(withdrawfund))
  }
  return (
    <div className="App2">
      <h1>Redux Toolkit Assignment</h1>
      <h1>Ammount {  store.rootReducer.value}</h1>
      <div>
        <input onChange={(e)=>{setaddfund(e.target.value)}} type="number" placeholder='Enter the ammount'/>
        <button onClick={()=>{addFund()}}>Add Ammount</button>
      </div>
      <br />
      
      <div>
        <input onChange={(e)=>{setwithDrowfund(e.target.value)}} type="number" placeholder='Enter the ammount'/>
        <button onClick={()=>{withdrawFund()}}>Withdraw Ammount</button>
      </div>
      
    </div>
  );
}

export default App2;