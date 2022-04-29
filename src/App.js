import { AppContainer } from './App.styles';
import { Form } from './components/Forms/FormOneState/Form'
import { GlobalStyles } from './styles/Global.styles';
export function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Form />
      </AppContainer>
    </>
  );
}

export default App;
