import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import '../App.css';



export class Recipieitem extends React.Component {
    constructor() {
        super();
        //sets the delete
        this.DeleteRecipie = this.DeleteRecipie.bind(this);
    }

    //Creates the method that allows us to delete and reload
    DeleteRecipie(e) {
        e.preventDefault();

        axios.delete('http://localhost:4000/api/Recipie/' + this.props.Recipie._id)
            .then((res) => { this.props.Reload(); })
            .catch();
    }


    render() {
        return (
            <div>
                //creates the card around the recipie
                <Card>
                    <em> <Card.Header>Recipie Name: {this.props.Recipie.title}</Card.Header>
                    </em>
                    //information about the recipie
                    <Card.Body >
                        <em> <p> Title : {this.props.Recipie.title}</p>
                            <p> Time Taken: {this.props.Recipie.time}</p>
                            <p> Level of difficulty: {this.props.Recipie.difficulty}</p>
                            <p> Ingridents: {this.props.Recipie.ingredients}</p>
                            <p>Temperature: {this.props.Recipie.temp}</p>
                            <p>Steps taken: {this.props.Recipie.steps}</p>
                        </em>
                    </Card.Body>
                    <Card.Footer>
                        //edit and delete buttons
                        <Link to={'/EditRecipie/' + this.props.Recipie._id} className="btn btn-primary"  >Update </Link>
                        <Button variant="danger" onClick={this.DeleteRecipie}>Delete</Button>

                    </Card.Footer>

                </Card>



            </div>
        )
    }
}