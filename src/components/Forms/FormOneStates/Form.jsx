import { useState } from 'react';
import './Form.styles.css';
import { initialFormData } from './Form.constant';

export const Form = () => {

  const [inputValues, setInputValues] = useState(initialFormData);

  console.log(inputValues)

  const handleInputChange = (e) => {
    // pega os valores do form
    const { name, value } = e.target;

    // seta os valures atualizados
    setInputValues({...inputValues, [name]: value });
  }

  const handleSubmit = (e) => {
    // previne comportamento padrao do formulario
    e.preventDefault();
    // pega os dados no form
    const formData = new FormData(e.target);
    // cria um objeto com os dados
    const data = Object.fromEntries(formData)

    const message = `Seu nome é: ${data.name} \nSeu e-mail é: ${data.email} \nSua senha é: ${data.password} \nSeu país é: ${data.country}`;

    alert(message)
  }

  return (
    <div className="Container">
      <form onSubmit={handleSubmit}>
          <label>Nome</label>
          <input 
            type='text' 
            name='name' 
            placeholder='digite seu nome' 
            onChange={handleInputChange}
            value={inputValues.name}
          />

          <label>E-mail</label>
          <input 
            type='email' 
            name='email' 
            placeholder='digite seu e-mail' 
            onChange={handleInputChange}
            value={inputValues.email}
          />

          <label>Senha</label>
          <input 
            type='password' 
            name='password' 
            placeholder='digite sua senha' 
            onChange={handleInputChange}
            value={inputValues.password}
          />

          <label>Escolha seu país</label>
          <select name="country" onChange={handleInputChange} value={inputValues.country}>
            <option value='Nenhum'>Nenhum</option>
            <option value='Irlanda do Norte'>Irlanda do Norte</option>
            <option value='Brasil'>Brasil</option>
            <option value='Austrália'>Austrália</option>
            <option value='Inglaterra'>Inglaterra</option>
          </select>

          <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}