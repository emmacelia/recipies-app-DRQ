import React from "react";
import axios from "axios";

export class AddRecipie extends React.Component {
    render() {
        return (
            <div>
                <h3>Hello from Create Component!</h3>
                <form>
                    <div>
                        <label>Add Book Title: </label>
                        
                    </div>

                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        
                    </div>

                    <div className="form-group">
                        <label>Add Author: </label>
                        
                    </div>

                    <input type="submit" value="Add Book" />
                </form>
            </div>
        );
    }




}