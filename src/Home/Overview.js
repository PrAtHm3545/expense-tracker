import styled from "styled-components";
import React, { useState } from 'react'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    width: 100%;
  `;
const BalanceBox = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: bold;
`;
const AddTransaction = styled.button`
  background: black;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  letter-spacing: 1px;
`;
const AddTransactionContainer = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  border: 1px solid #e6e8e9;
  gap: 10px;
  padding: 15px 20px;
  margin: 20px;
  &input{
    outline: none;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
  }
`;
const RadioBox = styled.div`
  display: flex;
  flex-direction:row;
  width: 100%;
  align-items: center;
`;
const AddTransactionView= (props)=>{
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState('EXPENSE');

  const addTransaction = ()=>{  
    console.log({amount,desc,type})
    props.toggleAddTxn();
  };
  return(
    <AddTransactionContainer>
      <input placeholder="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
      <input placeholder="Description" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
      <RadioBox>
        <input type="radio" id="expense" name="type" value="EXPENSE" onChange={(e)=>setType(e.target.value)}/>
        <label>Expense</label>
        <input type="radio" id="income" name="type" value="INCOME" checked={type==='INCOME'} onChange={(e)=>setType(e.target.value)}/>
        <label>Income</label>
      </RadioBox>
      <AddTransaction onClick={addTransaction}>Add Transaction</AddTransaction>
    </AddTransactionContainer>
  )
}
const Overview = (props) => {
  const [isAddTxnVisible, toggleAddTxn] = useState(true)
  return (
    <Container>
      <BalanceBox>
        Balance : $10000
        <AddTransaction onClick={()=> toggleAddTxn(!isAddTxnVisible)}>{isAddTxnVisible ? 'Cancle':'ADD'}</AddTransaction>
      </BalanceBox>
      { isAddTxnVisible && <AddTransactionView toggleAddTxn = {toggleAddTxn}/> }
    </Container>
  );
};
export default Overview;
