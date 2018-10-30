import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Resources from './components/Resources';
import SignUp from './components/SignUp';
import FAQ from './components/FAQ';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
        <div>
          <Router>
            <div>
              <Navbar />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/resources" component={Resources} />
                <Route path="/signup" component={SignUp} />
                <Route path="/faq" component={FAQ} />
            </div>
          </Router>

            <Footer />
        </div>
    );
  }
}

export default App;
