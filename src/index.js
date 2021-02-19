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

// initilizing redux store
// requires a reducer. second argument is for redux dec-tools extension.
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

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

