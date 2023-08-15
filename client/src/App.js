/* 
import moment from 'moment'
import axios from 'axios'
import {useEffect, useState} from 'react' */
import './App.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/store'
import Home from './pages/home/Home'
import Video from './pages/video/Video'
import Unknown from './pages/unknown/Unknown'

function App() {



  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/video/:id' component={Video}/>
          <Route path="/video" component={Unknown} />
        </Switch>
      </Router>

      </Provider>
    </div>
  );
}

export default App;
