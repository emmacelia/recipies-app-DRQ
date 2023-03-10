import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function EditRecipie() {

    let { id } = useParams();

    //setters for each value
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [ingredients, setIngridents] = useState('');
    const [temp, setTemp] = useState('');
    const [steps, setSteps] = useState('');

    //change the url to the id 
    useEffect(() => {
        axios.get('http://localhost:4000/api/Recipie/' + id)
            .then((response) => {
                setTitle(response.data.title);
                setTime(response.data.time);
                setDifficulty(response.data.difficulty);
                setIngridents(response.data.ingredients);
                setTemp(response.data.temp);
                setSteps(response.data.steps);

            })
            .catch()
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();

        //sets an edit 
        const EditRecipie = {
            title: title,
            time: time,
            difficulty: difficulty,
            ingredients: ingredients,
            temp: temp,
            steps: steps
        }

        axios.put('http://localhost:4000/api/Recipie/' + id, EditRecipie)
            .then()
            .catch();
    }

    //form that is populated and allows us to edit the form
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Recipie Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Time: </label>
                    <input type="text"
                        className="form-control"
                        value={time}
                        onChange={(e) => { setTime(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Difficulty: </label>
                    <input type="text"
                        className="form-control"
                        value={difficulty}
                        onChange={(e) => { setDifficulty(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Edit Ingridents: </label>
                    <input type="text"
                        className="form-control"
                        value={ingredients}
                        onChange={(e) => { setIngridents(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Edit Temp: </label>
                    <input type="text"
                        className="form-control"
                        value={temp}
                        onChange={(e) => { setTemp(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Edit Steps: </label>
                    <input type="text"
                        className="form-control"
                        value={steps}
                        onChange={(e) => { setSteps(e.target.value) }}
                    />
                </div>

                //button used to edit 
                <input type="submit" value="Edit Recipie"></input>
            </form>
        </div>
    );
}