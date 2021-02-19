import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increment} from '../actions/templeteAction'

class Classes extends Component {
  render() {
    return (
      <>
        <h1>Classes</h1>
        <h2>{this.props.count}</h2>
        <button onClick={()=>this.props.increment(5)}>Click Me</button>
      </>
    )
  }
}

// count is our props: this.props.count
const mapStateToProps= (state) => {
  return {
    count: state.counter
  }
}
// increment is a props: this.props.increment
const mapDispatchToProps = (dispatch) =>{
  //update function for state
  return{
  increment: (n)=>dispatch(increment(n))
}
}

export default connect(mapStateToProps, mapDispatchToProps) (Classes)
