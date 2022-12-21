import React, { Component } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { DeleteRecipie } from './components/DeleteRecipie';
import { AddRecipie } from './components/AddRecipie';
import { EditRecipie } from './components/EditRecipie';
import { ViewAllRecipies } from './components/ViewAllRecipies';

export class Header extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header></header>
                    <Routes>
                        <Route path='/ViewAllRecipies' element={<ViewAllRecipies />} exact />
                        <Route path='/AddRecipie' element={<AddRecipie />} />
                        <Route path='/EditRecipie' element={<EditRecipie />} />
                        <Route path='/DeleteRecipie' element={<DeleteRecipie />} />
                    </Routes>

                </div>
            </Router>
        );
    }
}