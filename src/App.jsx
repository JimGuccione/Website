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
import Freshman from './components/pages/Freshman';
import Sophomore from './components/pages/Sophomore';
import Senior from './components/pages/Senior';
import PreHighSchool from './components/pages/PreHighSchool';


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
                <Route path="/pages/freshman" component={Freshman} />
                <Route path="/pages/sophomore" component={Sophomore} />
                <Route path="/pages/senior" component={Senior} />
                <Route path="/pages/prehighschool" component={PreHighSchool} />
            </div>
          </Router>

            <Footer />
        </div>
    );
  }
}

export default App;
