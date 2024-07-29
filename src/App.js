import logo from './logo.svg';
import './App.css';
import FormLabel from './Component/FormLabel/FormLabel';
import FormText from './Component/FormText/FormText';
import FormNumber from './Component/FormNumber/FormNumber';
import FormRadio from './Component/FormRadio/FormRadio';
import FormSubmit from './Component/FormSubmit/FormSubmit';

function App() {
  return (
    <div className="App">
      <form name='contato' id='contato'>
        <div className="control-form">
          <h2>Formuário de Contato</h2>
          <div className="control-row">
            <div className="control-label">
              <FormLabel name="fullname" text="Nome Completo"/>
            </div>
            <div className="control-input">
              <FormText name="fullname" placeholder="Nome Completo"/>
            </div>
          </div>
          <div className="control-row">
            <div className="control-label">
              <FormLabel name="age" text="Idade"/>
            </div>
            <div className="control-input">
              <FormNumber name="age"/>
            </div>
          </div>
          <div className="control-row">
            <div className="control-label">
              <FormLabel name="gender" text="Gênero"/>
            </div>
            <div className="control-input">
              <FormRadio name="gender" label="Masculino" item="Masculino" target="gender_m"/>
              <FormRadio name="gender" label="Feminino" item="Feminino" target="gender_f"/>
            </div>
          </div>
          <div className="control-row">
            <div className="control-label">
              <FormLabel name="civil_state" text="Estado Civil"/>
            </div>
            <div className="control-input">
              <FormRadio name="civil_state" label="Solteiro" item="Solteiro" target="civil_state_s"/>
              <FormRadio name="civil_state" label="Casado" item="Feminino" target="civil_state_f"/>
              <FormRadio name="civil_state" label="Divorciado" item="Viuvo" target="civil_state_v"/>
            </div>
          </div>
          <div className="control-row">
            <FormSubmit/>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
