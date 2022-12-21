import React from "react";


export class Recipieitem extends React.Component {

    render() {
        return (
            <div>

                <p>{this.props.Recipie.title}</p>
                <p>{this.props.Recipie.time}</p>
                <p>{this.props.Recipie.difficulty}</p>
                <p>{this.props.Recipie.ingridients}</p>
                <p>{this.props.Recipie.temp}</p>
                <p>{this.props.Recipie.steps}</p>

            </div>
        )
    }
}