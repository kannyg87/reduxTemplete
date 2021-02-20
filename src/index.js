import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hooks from './components/Hooks';
import Classes from './components/Classes'
import BaseLayout from './components/layout/BaseLayout'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducersTemplete';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'


// save our local redax state to local storge
const saveToLocalStorge = (reduxDlobalstate) => {
  //serializeState = converting js obj to string
  try{
    const serializeState = JSON.stringify(reduxDlobalstate);
    localStorage.setItem('state',serializeState)
  }
  catch(e){
    console.log(e)
}
}
const loadFromLocalstorge = (params) => {
  const serializeState= localStorage.getItem('state');
  if (serializeState== null){
    return undefined;
  }
  else{
    return JSON.parse(serializeState);
  }
  
}
const persistedState = loadFromLocalstorge();// returns js obj

// initilizing redux store
// requires a reducer. second argument is for redux dec-tools extension.
let store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


store.subscribe(()=>{
  saveToLocalStorge(store.getState())
})

// provider hooks react to redux
ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
        <Router>
          <BaseLayout>
            <Switch>
              <Route exact path='/' component={App}/>
              <Route path='/hooks' component={Hooks}/>
              <Route path='/class' component={Classes}/>
            </Switch>
          </BaseLayout>
        </Router>
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);

