import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUsers, faBarcode, faCalendarDays, faWallet } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

import * as S from "./styles";
import { CommonColors } from "@/core/colors";

const Home = () => {
  const navigate = useNavigate();

  return (
    <S.Root>
      <Header nameRoute="home"/>

      <S.Container>
        <S.ContainerCircle>
          <S.IndividualCircle>
            <S.Circle onClick={()=> navigate("/create-debit")}>
              <FontAwesomeIcon icon={faPlus} style={{ height: 25, color: CommonColors.grey }} />
            </S.Circle>
            <S.Label>Cadastrar</S.Label>
          </S.IndividualCircle>

          <S.IndividualCircle>
            <S.Circle onClick={()=> null}>
              <FontAwesomeIcon icon={faCalendarDays} style={{ height: 25, color: CommonColors.grey }} />
            </S.Circle>
            <S.Label>Histórico</S.Label>
          </S.IndividualCircle>

          <S.IndividualCircle>
            <S.Circle onClick={()=> null}>
              <FontAwesomeIcon icon={faWallet} style={{ height: 25, color: CommonColors.grey }} />
            </S.Circle>
            <S.Label>Pagos</S.Label>
          </S.IndividualCircle>
        </S.ContainerCircle>
      </S.Container>
    </S.Root>
  );
};

export default Home;
