import React from "react";



class FormContact extends React.Component {
    constructor(props){
        super(props);
    }

    handleClick(event) {
        event.preventDefault();
    }

    render() {
        return  (
            <tr onClick={(event) => this.handleClick(event)}>
                <td>{this.props.fullname}</td>
                <td>{this.props.age}</td>
                <td>{this.props.gender}</td>
                <td>{this.props.gender}</td>
                <td>
                    <button onClick={(event) => this.handleClick(event)}>Excluir</button>
                </td>
            </tr>
        );
    }
}

export default FormContact;