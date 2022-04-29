import { AppContainer, FormContainer } from './App.styles';
import { FormOneState } from './components/Forms/FormOneState/Form';
import { FormMultipleStates } from './components/Forms/FormMultipleStates/Form';
import { GlobalStyles } from './styles/Global.styles';
export function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <FormContainer>
          <FormOneState />
        </FormContainer>
        <FormContainer>
          <FormMultipleStates />
        </FormContainer>
      </AppContainer>
    </>
  );
}

export default App;
