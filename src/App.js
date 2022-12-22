import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { ViewAllRecipies } from './components/ViewAllRecipies';
import { EditRecipie } from './components/EditRecipie';
import {AddRecipie} from './components/AddRecipie';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href='/'>Home</Navbar.Brand>
              <Nav className='me-auto'>
                <Nav.Link href='/ViewAllRecipies'>View</Nav.Link>
                <Nav.Link href='/AddRecipie'>Add</Nav.Link>
                <Nav.Link href='/EditRecipie'>Edit</Nav.Link>
                <Nav.Link href='/DeleteRecipie'>Delete</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route path='/ViewAllRecipies' element={<ViewAllRecipies></ViewAllRecipies>}></Route>
            <Route path='/EditRecipie/:id' element={<EditRecipie></EditRecipie>}></Route>
            <Route path='/AddRecipie' element={<AddRecipie></AddRecipie>}></Route>

          </Routes>
        </div>
      </Router>
    )

  }
}

export default App;