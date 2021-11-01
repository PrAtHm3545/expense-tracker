import './App.css';
import styled from 'styled-components';
import HomeComonent  from './Home'


const Container =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header =styled.span`
  color:black;
  font-size: 25px;
  font-weight: bold;
`;

function App() {
  return (
    <Container>
      <Header>Expense Tracker</Header>
      <HomeComonent></HomeComonent>
    </Container>
  );
}
export default App;