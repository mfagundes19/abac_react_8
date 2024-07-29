import React from "react";

class FormNumber extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return  (
            <div>
                <input type="number" name={this.props.name} id={this.props.name} max="100"/>
            </div>
        );
    }
}

export default FormNumber;