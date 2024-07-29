import React from "react";

class FormRadio extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return  (
            <div className="input-group">
                <input type="radio" name={this.props.name} id={this.props.target} value={this.props.item}/>
                <label>{this.props.label}</label>
            </div>
        );
    }
}

export default FormRadio;