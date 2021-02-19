import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {increment} from '../actions/templeteAction'

const Hooks = () => {
  // getting globale state
  const count = useSelector(state => state.counter);

  // recive dispatch function 
  const dispatch = useDispatch();
  return (
    <>
     <h1>Hooks</h1>
     <h2>{count}</h2>
     <button onClick={()=> dispatch(increment(4))}>Click Me </button>
    </>
  )
}

export default Hooks
