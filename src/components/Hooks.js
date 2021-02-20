import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {increment} from '../actions/templeteAction'
import {DivSc, H1S, Paper} from './Styles'

const Hooks = () => {
  // getting globale state
  const count = useSelector(state => state.counter);

  // recive dispatch function 
  const dispatch = useDispatch();
  return (
    <>
     <H1S>Hooks</H1S>
     <h2>{count}</h2>
     <button onClick={()=> dispatch(increment(4))}>Click Me </button>
     <DivSc bgc="red">
       this is a styled component
     </DivSc>
     <br />
     
     <Paper>
       here is my Paper container
     </Paper>
    </>
  )
}

export default Hooks
