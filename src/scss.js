import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #191A21;
`

export const Clock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 96vh;

  @media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
  }
`

export const Square = styled.div`
  width: 100px;
  height: 100px;
  margin: 5px;
  border-radius: 4px;
  background-color: ${(props) => (props.param.i ? 
    props.param.theme === 1 ? props.param.cor : "#dbdbdb"
    : props.param.theme === 1 ? "#dbdbdb" : ""
    )};
`
export const WrapH1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 110px;
  @media (max-width: 1000px) {
    width: 330px;
  }
`

export const WrapH2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 330px;
`

export const WrapM1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 222px;
  @media (max-width: 1000px) {
    width: 330px;
  }
`

export const WrapM2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 330px;
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items:center;
  justify-content:center;
`
export const Button = styled.button`
border-radius: 4px;
border: none;
background: #dbdbdb;
cursor: pointer;
`

