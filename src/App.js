import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { ViewAllRecipies } from './components/ViewAllRecipies';
import { EditRecipie } from './components/EditRecipie';
import { AddRecipie } from './components/AddRecipie';
import { MainPage } from './components/MainPage'
import { Inspiration } from './components/Inspiration';

document.body.style = 'background: #3C8046;';
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="black" variant="dark">
            <Container>
              <Navbar.Brand href='/'>Home</Navbar.Brand>
              <Nav className='me-auto'>

                <em>   <Nav.Link href='/ViewAllRecipies'>View</Nav.Link>  </em>
                <em> <Nav.Link href='/AddRecipie'>Add</Nav.Link> </em>
                <em> <Nav.Link href='/Inspiration'>Inspiration</Nav.Link> </em>

              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route path='/' element={<MainPage></MainPage>}></Route>

            <Route path='/ViewAllRecipies' element={<ViewAllRecipies></ViewAllRecipies>}></Route>
            <Route path='/EditRecipie/:id' element={<EditRecipie></EditRecipie>}></Route>
            <Route path='/AddRecipie' element={<AddRecipie></AddRecipie>}></Route>
            <Route path='/Inspiration' element={<Inspiration></Inspiration>}></Route>


          </Routes>
        </div>
      </Router>
    )

  }
}

export default App;