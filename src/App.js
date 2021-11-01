import './App.css';
import styled, { StyledComponent } from 'styled-components';

const Container =styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      Hellow World..!
    </Container>
  );
}
export default App;