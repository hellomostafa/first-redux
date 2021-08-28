import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from './actions'


function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
 const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Mostafa {counter}</h1>
      <button onClick={()=> dispatch(increment())}>+</button>
      
      <button onClick={()=> dispatch(decrement())}>-</button>
      <br/>

      {
        isLogged ?   <h4>Valuable information</h4> : 'Nothing'
      }
     
    </div>
  );
}

export default App;
