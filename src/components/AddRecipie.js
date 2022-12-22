import React from "react";
import axios from "axios";

export class AddRecipie extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeRecipieTitle = this.onChangeRecipieTitle.bind(this);
        this.onChangeRecipieTime = this.onChangeRecipieTime.bind(this);
        this.onChangeRecipieDifficulty = this.onChangeRecipieDifficulty.bind(this);
        this.onChangeRecipieIngridents = this.onChangeRecipieIngridents.bind(this);
        this.onChangeRecipieTemp = this.onChangeRecipieTemp.bind(this);
        this.onChangeRecipieSteps = this.onChangeRecipieSteps.bind(this);

        this.state = {
            title: '',
            time: '',
            difficulty: '',
            ingridents: '',
            temp: '',
            steps: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(`Button clicked 
        ${this.state.title},
        ${this.state.time},
        ${this.state.difficulty}
        ${this.state.ingridents}
        ${this.state.temp}
        ${this.state.steps}
        
        `);

        const Recipie = {
            title: this.state.title,
            time: this.state.time,
            difficulty: this.state.difficulty,
            ingridents: this.state.ingridents,
            temp: this.state.temp,
            steps: this.state.steps
        }

        axios.post('http://localhost:4000/api/recipie', Recipie)
            .then()
            .catch();

        this.setState({
            title: '',
            time: '',
            difficulty: '',
            ingridents: '',
            temp: '',
            steps: ''
        })
    }

    onChangeRecipieTitle(e) {
        this.setState({
            title: e.target.value
        })
    }
    onChangeRecipieTime(e) {
        this.setState({
            time: e.target.value
        })
    }
    onChangeRecipieDifficulty(e) {
        this.setState({
            difficulty: e.target.value
        })
    }

    onChangeRecipieIngridents(e) {
        this.setState({
            ingridents: e.target.value
        })
    }

    onChangeRecipieTemp(e) {
        this.setState({
            temp: e.target.value
        })
    }

    onChangeRecipieSteps(e) {
        this.setState({
            steps: e.target.value
        })
    }
    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit} >
                    <card>

                        <div className="form-group">
                            <em>  <label  >Add Recipie Title: </label>  </em>
                            <input type="text"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeRecipieTitle}
                            />
                        </div>

                        <div className="form-group">
                            <em>  <label>Add Recipie Time: </label> </em>
                            <input type="text"
                                className="form-control"
                                value={this.state.time}
                                onChange={this.onChangeRecipieTime}
                            />
                        </div>

                        <div className="form-group">
                            <em> <label>Add Recipie Difficulty: </label> </em>
                            <input type="text"
                                className="form-control"
                                value={this.state.difficulty}
                                onChange={this.onChangeRecipieDifficulty}
                            />
                        </div>


                        <div className="form-group">
                            <em> <label>Add Recipie ingridents: </label> </em>
                            <input type="text"
                                className="form-control"
                                value={this.state.ingridents}
                                onChange={this.onChangeRecipieIngridents}
                            />
                        </div>

                        <div className="form-group">
                            <em> <label>Add Recipie Temp: </label> </em>
                            <input type="text"
                                className="form-control"
                                value={this.state.temp}
                                onChange={this.onChangeRecipieTemp}
                            />
                        </div>


                        <div className="form-group">
                            <em><label>Add Recipie steps: </label> </em>
                            <input type="text"
                                className="form-control"
                                value={this.state.steps}
                                onChange={this.onChangeRecipieSteps}
                            />
                        </div>



                        <input type="submit" value="Add Recipie" color="red" />

                    </card>






                </form>
            </div>




        );
    }
}