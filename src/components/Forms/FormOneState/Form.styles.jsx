import styled  from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #00b159;
  border-radius: 10%;

  display: flex;
  justify-content: center;
  padding: 50px 50px 50px 50px;
`;

export const Formulary = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.label`
  margin-bottom: 10px;
  color: #122734;
  font-weight: bold;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  position: relative;
  width: 200px;

  height: 40px;
  border-radius: 10px;
  border: none;

  text-transform: capitalize;
  color: #595959;
  background: #c6c6c6;

  text-align: left;
  padding: 0 15px;
  font-size: 16px;

  cursor: pointer;
`;

export const Select = styled.select`
  margin-bottom: 20px;
  position: relative;
  width: 200px;

  height: 40px;
  border-radius: 10px;
  border: none;

  text-transform: capitalize;
  color: #595959;
  background: #c6c6c6;

  text-align: left;
  padding: 0 15px;
  font-size: 16px;

  cursor: pointer;
`;

export const Button = styled.button`
  background: none;
  padding: 12px 30px 10px;
  color: #6c66ae;
  border: 2px solid #122734;
  border-radius: 10px;
  outline: none;
  text-transform: uppercase;
  font-weight: 600;
  transition: background 0.05s;
  cursor: pointer;
  display: block;
  max-width: 200px;

  :hover {
    background-color: #6c66ae;
    color:white;
  }
`;