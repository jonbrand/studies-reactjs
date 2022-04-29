import { useState } from 'react';
import { initialFormData, handleSubmit } from './Form.constant';
import { Container, Select, Button, Title, Formulary, Input } from './Form.styles';

export const Form = () => {
  const [inputValues, setInputValues] = useState(initialFormData);

  const handleInputChange = (e) => {
    // pega os valores do form
    const { name, value } = e.target;
    // seta os valures atualizados
    setInputValues({...inputValues, [name]: value });
  }

  return (
    <Container>
      <Formulary onSubmit={handleSubmit}>
          <Title>Nome</Title>
          <Input 
            type='text' 
            name='name' 
            placeholder='digite seu nome' 
            onChange={handleInputChange}
            value={inputValues.name}
          />

          <Title>E-mail</Title>
          <Input 
            type='email' 
            name='email' 
            placeholder='digite seu e-mail' 
            onChange={handleInputChange}
            value={inputValues.email}
          />

          <Title>Senha</Title>
          <Input 
            type='password' 
            name='password' 
            placeholder='digite sua senha' 
            onChange={handleInputChange}
            value={inputValues.password}
          />

          <Title>Escolha seu país</Title>
          <Select name="country" onChange={handleInputChange} value={inputValues.country}>
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