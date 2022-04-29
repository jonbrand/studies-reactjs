import { useState } from 'react';
import { initialFormDataName, initialFormDataEmail, initialFormDataPassword, initialFormDataCountry, handleSubmit } from './Form.constant';
import { 
  Container,
  Select,
  Button,
  Title,
  Formulary,
  Input 
} from './Form.styles';

export const FormMultipleStates = () => {
  const [inputName, setInputName] = useState(initialFormDataName);
  const [inputEmail, setInputEmail] = useState(initialFormDataEmail);
  const [inputPassword, setInputPassword] = useState(initialFormDataPassword);
  const [inputCountry, setInputCountry] = useState(initialFormDataCountry);

  console.log(inputName)
  console.log(inputEmail)
  console.log(inputPassword)
  console.log(inputCountry)
  const handleInputName = (e) => {
    // pega os valores do form
    const { name, value } = e.target;
    // seta os valures atualizados
    setInputName({...inputName, [name]: value });
  }

  const handleInputEmail = (e) => {
    // pega os valores do form
    const { name, value } = e.target;
    // seta os valures atualizados
    setInputEmail({...inputEmail, [name]: value });
  }

  const handleInputPassword = (e) => {
    // pega os valores do form
    const { name, value } = e.target;
    // seta os valures atualizados
    setInputPassword({...inputPassword, [name]: value });
  }

  const handleInputCountry = (e) => {
    // pega os valores do form
    const { name, value } = e.target;
    // seta os valures atualizados
    setInputCountry({...inputCountry, [name]: value });
  }

  return (
    <Container>
      <Formulary onSubmit={handleSubmit}>
          <Title>Nome</Title>
          <Input 
            type='text' 
            name='name' 
            placeholder='digite seu nome' 
            onChange={handleInputName}
            value={inputName.name}
          />

          <Title>E-mail</Title>
          <Input 
            type='email' 
            name='email' 
            placeholder='digite seu e-mail' 
            onChange={handleInputEmail}
            value={inputEmail.email}
          />

          <Title>Senha</Title>
          <Input 
            type='password' 
            name='password' 
            placeholder='digite sua senha' 
            onChange={handleInputPassword}
            value={inputPassword.password}
          />

          <Title>Escolha seu país</Title>
          <Select name="country" onChange={handleInputCountry} value={inputCountry.country}>
            <option value='Nenhum'>Nenhum</option>
            <option value='Irlanda do Norte'>Irlanda do Norte</option>
            <option value='Brasil'>Brasil</option>
            <option value='Austrália'>Austrália</option>
            <option value='Inglaterra'>Inglaterra</option>
          </Select>

          <Button type='submit'>Enviar</Button>
      </Formulary>
    </Container>
  )
}