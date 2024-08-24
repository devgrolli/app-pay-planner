import styled from "styled-components";
import { CommonColors } from "@/core/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { blue, root, error, white, green, disabled, yellow } = CommonColors;

interface BtnProps {
  loading?: boolean;
  color?: string;
}

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${root};
  padding: 2rem;
`;

export const ContainerBtns = styled.div`
  margin-top: 110px;
  flex-direction: row;
  display: flex;
  align-items: center;
  width: 99%;
  @media (min-width: 1000px) {
    width: 69%;
  }
`

export const BtnAddClient = styled.button`
  border-width: 1px;
  border-style: solid;
  background-color: transparent;
  color: ${green};
  font-weight: 600;
  height: 56px;
`;

export const DivInfosMobile = styled.div`
  width: 80%;
  padding: 10px 0px 18px 20px;
  word-wrap: break-word;
  @media (max-width: 700px) {
    width: 80%;
  }
  @media (max-width: 700px) {
    width: 70%;
  }
`;

export const TableResponsive = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  min-height: 35px;
  height: auto;
  margin: 10px;

  background-color: ${white};
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  color: #232323;

  @media (max-width: 1000px) {
    width: 100%;
    margin: 10px 0;
    /* margin-left: 10px; */
  }
`;

export const ItemLine = styled.div`
  width: 100%;
  line-height: 1.2;
  padding-top: 10px;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DivButton = styled.div`
  padding-right: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  @media (max-width: 1300px) {
    flex: 0;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const BtnsList = styled.button<BtnProps>`
  color: ${({ color }) => color ? color : blue};
  width: auto;
  border-width: 1px;
  border-style: solid; /* Adiciona um estilo de borda */
  background-color: transparent;
  margin: 5px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const PaginationButton = styled.button<{ disabled: boolean }>`
  background: none;
  border: none;
  padding: 10px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:disabled {
    cursor: not-allowed;
  }
  &:active {
    outline: none;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon) <{ disabled: boolean }>`
  color: ${(props) =>
    props.disabled ? CommonColors.disabled : CommonColors.green};
  height: 30px;
`;

export const PageIndicator = styled.span`
  font-size: 16px;
  margin: 0 10px;
`;

export const CenteredContainer = styled.div`
  /* flex-direction: column; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20%;
`;

export const TextNoResults = styled.p`
  font-size: 1.5rem;
  color: ${blue};
  text-align: center;
  font-family: Arial, sans-serif;
`;

export const ChartContainer = styled.div`
background-color: aqua;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const LegendContainer = styled.div`
  margin-top: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  font-size: 14px;
`;

export const LegendColor = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ color }) => color};
  margin-right: 10px;
`;

export const BadgeClients = styled.div<BtnProps>`
  background-color: ${({ loading }) => loading ? disabled : green};
  border-radius: 10px;
  padding: 10px;
`