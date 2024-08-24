import styled, { keyframes, css } from "styled-components";
import { CommonColors } from "@/core/colors";
const { blue, greenLight, green, white, grey } = CommonColors;

interface LogoProps {
  spin?: boolean;
}

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const animloader = keyframes`
  0%, 100% {
    transform: scale(0);
    opacity: 1;
  }
  50% {
    transform: scale(1);
    opacity: 0;
  }
`;

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  background-color: ${CommonColors.root};
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;

  @media (max-width: 1000px) {
    padding: 1rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const Logo = styled.img<LogoProps>`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  /* &:hover {
    filter: drop-shadow(0 0 2em ${green});
  } */

  &.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }

  ${(props) =>
    props?.spin &&
    css`
      animation: ${logoSpin} infinite 20s linear;
    `}
`;

export const Card = styled.div`
  padding: 2em;
  margin: 0 auto;
`;

export const ContainerHead = styled.div`
  width: 100%;
  max-width: 960px;
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: ${blue};
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    display: inline;
  }
`;

export const TableResponsive = styled.div`
  border-radius: 20px;
  background-color: ${white};
  display: flex;
  color: #232323;
  align-items: center;
  padding: 0 1rem;
  width: auto;
  min-height: 35px;
  flex-wrap: wrap;
  height: auto;
  margin: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 900px) {
    width: 100%;
    /* text-align: left; */
  }
`;

export const Objects = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  @media (max-width: 1000px) {
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.5em;
  }
`;

export const Objects2 = styled.div`
  width: 10rem;
  line-height: 1.2;
`;

export const RemoveObject = styled.button`
  color: ${blue};
  width: auto;
  background-color: ${green};
  margin: 5px;
`;

export const Confirm = styled.button`
  color: ${blue};
  background-color: ${greenLight};
  align-items: center;
  display: flex;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 18px;
`;

export const BtnWaitSent = styled.button`
  color: ${greenLight};
  width: 100%;
  /* cursor: pointer; */
  background-color: ${blue};
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 30px;
  border-width: 0.1em;
  margin-top: 20px;
`;

export const BtnOrder = styled.button`
  color: ${blue};
  background-color: ${green};
  align-items: center;
  display: flex;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 18px;
  margin-left: 10px;
`;

export const ItemH = styled.p`
  font-size: 1em;
  font-weight: bold;
  color: ${white};
  text-align: center;
  padding: 10px;
`;

export const DivInfos = styled.div`
  width: 80%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const DivButton = styled.div`
  @media (max-width: 1300px) {
    flex: 0;
  }
`;

export const Loader = styled.div`
  width: 300px;
  height: 300px;
  display: inline-block;
  position: relative;

  &::after,
  &::before {
    content: "";
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: ${white};
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    animation: ${animloader} 2s ease-in-out infinite;
  }

  &::after {
    animation-delay: 1s;
  }
`;

export const Title = styled.h1`
  font-size: 3.5;
  color: ${blue};
  text-align: center;
`;

export const Input = styled.input`
  display: none;
`;

export const BtnUpload = styled.button`
  width: 100%;
  color: ${greenLight};
  /* cursor: pointer; */
  background-color: ${blue};
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 30px;
  border-width: 0.1em;
`;

export const BtnReset = styled.button`
  color: ${blue};
  background-color: ${green};
  margin-right: 10px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 18px;
`;

export const TextUpload = styled.p`
  color: ${grey};
  font-size: 1.5em;
  line-height: 1.75em;
  text-align: center;
`;
