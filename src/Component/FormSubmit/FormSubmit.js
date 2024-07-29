import React from "react";

import FormContact from '../../Component/FormContact/FormContact';

class FormSubmit extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            contacts: [],
        };
    }

    validateForm() {
        if(document.getElementById("fullname").value == "") {
            document.getElementById("fullname").style.borderColor = "red";
            alert('Você precisa informar um nome válido');
            return false;
        }
        // if(document.getElementById("age").value == "") {
        //     document.getElementById("age").style.borderColor = "red";
        //     alert('Você precisa informar uma idade válida');
        //     return false;
        // }
        // if(document.getElementById("gender_m").checked == false && document.getElementById("gender_f").checked == false) {
        //     alert('Você precisa informar um gênero válido');
        //     return false;
        // }
        return true;
    }

    handleClick(event) {
        event.preventDefault();
        if(this.validateForm()) {
            let fullname = document.getElementById("fullname").value;
            let age = document.getElementById("age").value;
            let gender = "";
            if(document.getElementById("gender_m").checked == true) {
                gender = document.getElementById("gender_m").value;
            }
            if(document.getElementById("gender_f").checked == true) {
                gender = document.getElementById("gender_f").value;
            }
            let nextId = 1;
            for(var i=0; i < this.state.contacts.lengh; i++) {
                nextId++;
            } 
            let element = {
                id:  nextId,
                fullname: fullname,
                age: age,
                gender: gender                
            };
            this.setState({ 
                contacts: [ 
                    ...this.state.contacts,
                    element
                ] 
            });
        }
    }   
    handleClickItem(event, index) {
        event.preventDefault();
        // console.log(this.state.contacts[index]);
        // console.log(this.state.contacts[index].fullname);
        if(index != undefined) {
            document.getElementById('modal_fullname').innerHTML = this.state.contacts[index].fullname;
            document.getElementById('modal_age').innerHTML = this.state.contacts[index].age;
            document.getElementById('modal').style.display = 'block';
        }
    }
    handleClickDelete(event, index) {
        event.preventDefault();
        let arrList = [];
        arrList = this.state.contacts;
        arrList.splice(index, 1);
        this.setState({
            contacts: arrList
        });
        document.getElementById('modal_fullname').innerHTML = '';
        document.getElementById('modal_age').innerHTML = '';
        document.getElementById('modal_gender').innerHTML = '';
        document.getElementById('modal_civil_status').innerHTML = '';
    }
    handleClickModal(event) {
        document.getElementById('modal_fullname').innerHTML = '';
        document.getElementById('modal_age').innerHTML = '';
        document.getElementById('modal_gender').innerHTML = '';
        document.getElementById('modal_civil_status').innerHTML = '';
        document.getElementById('modal').style.display = 'none';
    }
    render() {
        return  (
            <div>
                <div>
                    <button type="submit" className="btn-submit" onClick={(event) => this.handleClick(event)}>Enviar</button>
                </div>
                <table width='100%' cellPadding='3' cellspaccing='2' style={{marginTop: '20px',border: 'solid 1px #cdcdcd'}}>
                    <thead>
                        <tr style={{backgroundColor: '#CDCDCD',fontSize: '11px',height: '30px'}}>
                            <td width='10%'>ID</td>
                            <td width='40%'>Nome Completo</td>
                            <td width='20%'>Idade</td>
                            <td width='30%'>Ação</td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.contacts && this.state.contacts.map((contact, index) => (
                        <tr key={contact.id} onClick={(event) => this.handleClickItem(event)}>
                            <td>{contact.id}</td>
                            <td>{contact.fullname}</td>
                            <td>{contact.age}</td>
                            <td>
                                <button type="button" className="btn-view" onClick={(event) => this.handleClickItem(event, index)}>Ver</button>
                                <button type="button" className="btn-delete" onClick={(event) => this.handleClickDelete(event, index)}>Excluir</button>
                            </td>
                        </tr>
                    ))}                    
                    </tbody>
                </table>
                <div id="modal" className="modal">
                    <div>
                        <h2>FORMULÁRIO</h2><br></br>
                    </div>
                    <div className="form-group">
                        <label>Nome Completo:</label>
                        <span className="form-text" id="modal_fullname"></span>
                    </div>
                    <div className="form-group">
                        <label>Idade:</label>
                        <span className="form-text" id="modal_age"></span>
                    </div>
                    <div className="form-group">
                        <label>Gênero:</label>
                        <span className="form-text" id="modal_gender"></span>
                    </div>
                    <div className="form-group">
                        <label>Estado Civil:</label>
                        <span className="form-text" id="modal_civil_status"></span>
                    </div>          
                    <br/>
                    <div className="form-group">
                        <button type="button" className="btn-delete" onClick={(event) => this.handleClickModal(event)}>Fechar</button>
                    </div>         
                </div>
            </div>
        );
    }
}

export default FormSubmit;