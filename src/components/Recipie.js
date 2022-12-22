import React from "react";
import { Recipieitem } from "./Recipieitem";

export class Recipie extends React.Component {
    render() {
        return this.props.Recipie.map(
            (Recipie) => {
                return <Recipieitem Recipie={Recipie} key={Recipie._id}
                    Reload={this.props.Reload}></Recipieitem>
            }
        );
    }
}