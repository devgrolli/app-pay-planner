import styled, { keyframes } from "styled-components";
import { CommonColors } from "@/core/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const { blue, greenLight, root, green, white, grey } = CommonColors;

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  margin-top: 150px;
  align-items: center;
  min-height: 100vh;
  background-color: ${root};
  padding: 2rem;
  /* box-sizing: border-box; */
`;

export const BtnWaitSent = styled.button`
  color: ${greenLight};
  width: 100%;
  background-color: ${blue};
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 20px;
  /* border-color: ${greenLight}; */
  border-width: 0.1em;
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-size: 3.5;
  color: ${green};
  text-align: center;
`;

export const Input = styled.input`
  display: none;
`;

export const BtnUpload = styled.button`
  width: 100%;
  color: ${greenLight};
  background-color: ${blue};
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 20px;
  /* border-color: ${greenLight}; */
  border-width: 0.1em;
`;

export const BtnListClients = styled(BtnUpload)`
margin-bottom: 20px;
background-color: ${green};
color: ${white};
`;

export const Card = styled.div`
  padding: 2em;
  margin: 0 auto;
  @media (max-width: 500px) {
    padding-top: 0px;
  }
`;

export const BorderDragging = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const DivIconDragging = styled.div`
  border-width: 5px;
  border-style: dashed;
  height: 50%;
  width: 70%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const IconDragging = styled(FontAwesomeIcon)`
  color: ${greenLight};
  height: 150px;
  width: 150;
`;

export const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  height: 300px;
`;

export const ContainerCircle = styled.div`
gap: 40px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  height: 100%;
  width: 100%;
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

// Estilize o botão para incluir a animação no estado ativo
export const Circle = styled.button`
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 50%;
  height: 70px;
  width: 70px;
  background-color: ${white};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  border: none;
  outline: none;
  cursor: pointer;

  &:active {
    animation: ${pulse} 0.5s;
  }
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${grey};

`;

export const IndividualCircle = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;