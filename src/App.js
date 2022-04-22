
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addAmmount,withdrawAmmount } from '.';


function App() {

  let store = useSelector(store=>store);
  let dispatch = useDispatch();
  let addFund = ()=>{
   // alert("addFund")
   let a =  parseInt(prompt('Enter the ammount'));
   // alert(a);
    dispatch(addAmmount(a));
  }
  let withdrawFund = ()=>{
   // alert("withdrawFund")
   let b = parseInt(prompt('Enter the ammount'));
    // alert(b);
   dispatch(withdrawAmmount(b));
  }
  

  return (
    <div className="App">
     <h1>Redux Toolkit Assingment</h1>
     <h1>Ammount {  store.rootReducer.value}</h1>
     <button onClick={(e)=>{addFund()}}> Add Ammount</button> 
     <button onClick={(e)=>{withdrawFund()}}>Withdraw Ammount</button>

    </div>
  );
}

export default App;
