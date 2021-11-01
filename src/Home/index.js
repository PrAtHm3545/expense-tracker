import styled from "styled-components";
import Overview from './Overview'
import Transaction from './Transaction'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0 10px;
    width: 360px;
  `;
const HomeComonent = (props) => {
  return (
      <Container>
          <Overview/>
          <Transaction/>
      </Container>
  );
};
export default HomeComonent;
