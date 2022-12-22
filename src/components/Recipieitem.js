import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import '../App.css';



export class Recipieitem extends React.Component {
    constructor() {
        super();
        this.DeleteRecipie = this.DeleteRecipie.bind(this);
    }

    DeleteRecipie(e) {
        e.preventDefault();

        axios.delete('http://localhost:4000/api/Recipie/' + this.props.Recipie._id)
            .then((res) => { this.props.Reload(); })
            .catch();
    }


    render() {
        return (
            <div>

                <Card>
                    <em> <Card.Header>Recipie Name: {this.props.Recipie.title}</Card.Header>
                    </em>
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
                        <Link to={'/EditRecipie/' + this.props.Recipie._id} className="btn btn-primary"  >Update </Link>
                        <Button variant="danger" onClick={this.DeleteRecipie}>Delete</Button>

                    </Card.Footer>

                </Card>



            </div>
        )
    }
}