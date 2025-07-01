
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './redux/features/counter/counterSlice';
import type { RootState } from './redux/store';
import { useAppSelector } from './redux/hook';

function App() {

   const dispatch = useDispatch();
   const {count}= useAppSelector((state:RootState) => state.counter)
   console.log( count);

   const handleIncrement = () => { 
    dispatch(increment())
   }

    const handleDecrement = () => { 
    dispatch(decrement())
   }

  return (
    <>
    
 <h1>Counter with Redux </h1>
 <button onClick={handleIncrement}>Increment</button>
 <div>{count}</div>
 <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default App
