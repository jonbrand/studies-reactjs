export const initialFormDataName = { 
  name: '', 
};

export const initialFormDataEmail = { 
  email: '',
};

export const initialFormDataPassword = { 
  password: '',
};

export const initialFormDataCountry = { 
  country: 'Escolha seu país'
};


   
   
export const handleSubmit = (e) => {
  // previne comportamento padrao do formulario
  e.preventDefault();
  // pega os dados no form
  const formData = new FormData(e.target);
  // cria um objeto com os dados
  const data = Object.fromEntries(formData)

  const message = `Seu nome é: ${data.name} \nSeu e-mail é: ${data.email} \nSua senha é: ${data.password} \nSeu país é: ${data.country}`;

  alert(message)
  
}