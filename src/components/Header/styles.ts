import styled from "styled-components";

import { CommonColors } from "@/core/colors";
const { blue, greenLight, green, white, grey, primary } = CommonColors;

interface ButtonProps {
  isMobile?: boolean;
}

export const BtnLogo = styled.button`
  background-color: transparent;
  /* border-radius: 50px; */
  padding: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  /* @media (max-width: 1000px) {
    margin-left: 10px;
  } */
`;

export const BtnIconDrawer = styled.button`
  background-color: transparent;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const PrincipalHeader = styled.div`
display: flex;
`

export const VerticalLine = styled.div`
  width: 2px; /* Largura fina para parecer um traço */
  height: 20px; /* Altura do traço */
  background-color: #808080; /* Cor do traço, substitua conforme necessário */
  margin: 0 5px; /* Espaçamento opcional ao redor do traço */
`;

export const ContainerHead = styled.div`
background-color: ${white};
display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  margin-top: 20px;
  z-index: 10;
  padding: 0 1rem;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 28px,
    rgba(0, 0, 0, 0.22) 0px 1px 10px;

  @media (min-width: 1000px) {
    width: 75%;
  }

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 20px;
    margin: 0 20px;
    display: flex;
  }
`;

export const SubHeder = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

export const ContainerSubHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 5px;
`;

export const ContainerTotal = styled.div`
  font-size: 40px;
  flex-direction: column;
  font-weight: bold;
  color: ${primary};
  align-items: start;
  display: flex;
  width: 100%;
  margin-bottom: 5px;
  margin-left: 30px;
`;

export const TotalToPayment = styled.div`
  font-size: 40px;
`;

export const LabelTotal = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${grey};
  margin-bottom: -8px;
`;

export const BtnSubHeader = styled.button`
letter-spacing: 0.06rem;
  font-size: 16px;

  color: ${grey};
  background-color: transparent;
  border: none;
`;

export const BtnReset = styled.button<ButtonProps>`
  color: ${({ isMobile }) => (isMobile ? white : blue)};

  background-color: ${({ isMobile }) => (isMobile ? blue : green)};
  margin-right: 10px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 18px;
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

export const ImageLogo = styled.img`
  height: 50px;
  width: 50px;
  /* @media (max-width: 500px) {
    padding-top: 60px;
  } */
`;

export const TextButtonsHead = styled.div`
  height: auto;
  font-size: 1em;
  font-weight: bold;
  color: ${white};
  text-align: center;
  justify-content: center;
  padding: 10px;
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;

  @media (max-width: 1000px) {
    width: 100%;

    /* justify-content: space-between; */
    flex-wrap: wrap;
  }
`;

export const BtnNotify = styled.button`
  background-color: transparent;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const Loggout = styled.button<ButtonProps>`
  color: ${blue};
  background-color: ${greenLight};
  margin-right: 0px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  width: ${({ isMobile }) => (isMobile ? "100%" : undefined)};
  margin-top: 10px;

  /* &:hover {
    border-color: ${blue};
  } */
`;

export const ListButtons = styled.a`
  font-size: 1.0rem;
  color: ${white};
  text-decoration: none;
  font-size: 20px;
  &:hover {
    color: ${greenLight};
  }
`;

export const ButtonUser = styled.button`
/* margin-top: px; */
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const LaberlUser = styled.div`
  color: ${white};
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: -5px;
    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const ContainerUser = styled.div`
margin-top: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* margin: 0 auto; */
  width: 140px;
  overflow: hidden;
  word-wrap: break-word;
`;
