
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addAmmount,withdrawAmmount } from '.';


function App() {

  let store = useSelector(store=>store);
  let dispatch = useDispatch();
  let addFund = ()=>{
   // alert("oojojo")
   let a = 
   // alert(a);
    dispatch(addAmmount(a));
  }
  let withdrawFund = ()=>{
   // alert("withdrawFund")
   let b = 
    // alert(b);
   dispatch(withdrawAmmount(b));
  }
  

  return (
    <div className="App">
     <h1>Redux Toolkit Assingment</h1>
     <h1>Amaount {  store.rootReducer.value}</h1>
     <input type="number"/>
     <button onClick={(e)=>{addFund()}}> Add Ammount</button> 
     <br/>
     <input type="number"/>
     <button onClick={(e)=>{withdrawFund()}}>Withdraw Ammount</button>

    </div>
  );
}

export default App;
