import React from 'react';
import Navbar from './components/Navbar';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post'
import { Jumbotron } from 'reactstrap'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Jumbotron style={{height: "100vh"}}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path="/:post_id" component={Post} />
          </Switch>
          </Jumbotron>
      </BrowserRouter>
    </div>
  );
}

export default App;
