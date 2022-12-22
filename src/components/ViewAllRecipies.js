import React from "react";
import axios from "axios"
import { Recipie } from "./Recipie";

export class ViewAllRecipies extends React.Component {

constructor(){
    super();
    this.componentDidMount= this.componentDidMount.bind(this);
}

    //changes the stte of the recipie
    componentDidMount() {
        axios.get('http://localhost:4000/api/Recipie')
            .then(response => {
                //  console.log(response.data)
                this.setState({ Recipie: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    state = { Recipie: [] };

    render() {
        return (
            <div>
                <h3></h3>
                //displays the recipie info
                <Recipie Recipie={this.state.Recipie} Reload={this.componentDidMount}></Recipie>

                
            </div>

        );
    }



}