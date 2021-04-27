import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'

import Navbar from './components/UI/Navbar/NavbarComponent'
import Main from './components/Main/Main'
import About from './components/About/About'
import DoctorsList from './components/DoctorsList/DoctorsList'
import ServicesAndPrices from './components/ServicesAndPrices/ServicesAndPrices'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/UI/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          <Row>
            <Col>
              <Navbar/>
            </Col>
          </Row>
        </Container>
          <Row className='mt-4'>
            <Col>
              <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/about" component={About}/>
                <Route path="/doctors" component={DoctorsList}/>
                <Route path="/prices" component={ServicesAndPrices}/>
                <Route path="/contacts" component={Contacts}/>
                <Redirect to={'/'}/>
              </Switch>
            </Col>
          </Row>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
