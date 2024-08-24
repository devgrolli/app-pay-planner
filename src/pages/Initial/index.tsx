import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

import { StyledForm, ButtonLogin, Root, Title, Image, BtnRegister, LabelWelcome } from "./styles";
import Logo from "@/assets/png/logo2.png";

const Initial = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Root>
        <StyledForm>
          <Image src={Logo} alt="Preview" />
          <Title>Pay Planner</Title>
          <LabelWelcome>Bem vindo ao seu gerenciador de pagamentos</LabelWelcome>
          <ButtonLogin onClick={()=> navigate("/login")}>Entrar</ButtonLogin>
          <BtnRegister onClick={()=> navigate("/signup")}>Cadastrar-se</BtnRegister>
        </StyledForm>
      </Root>
    </motion.div>
  );
};

export default Initial;