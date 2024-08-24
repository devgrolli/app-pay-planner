import { Input } from "@/components/Inputs/Input";
import { useNavigate } from "react-router-dom";
import { CommonColors } from "@/core/colors";
import { StyledForm, ButtonLogin, Root, Title, BtnForgetPassword, LabelBack } from "./styles";
import Loading from "@/assets/json/loading-primary.json";
import LottieCustom from "@/utils/lottieCustom";
import AlertToast from "@/components/Alert";
import useLogin from "./useLogin";

const Password = () => {
  const navigate = useNavigate();
  const {
    handleChangePassword,
    handleChangeEmail,
    handleSubmit,
    password,
    loading,
    email,
    error,
  } = useLogin();

  return (
    <Root>
      <StyledForm onSubmit={handleSubmit}>
        <Title>Esqueceu a senha?</Title>
        <Input
          fullWidth
          value={email}
          type="email"
          color={CommonColors.primary}
          onChange={(e) => handleChangeEmail(e)}
          label="E-mail"
          bottom={20}
        />
        <ButtonLogin type="submit" disabled={loading} isLoading={loading}>
          {loading ? (
            <LottieCustom
              animationData={Loading}
              height={50}
              width={50}
              speed={1.1}
            />
          ) : (
            <strong>Enviar</strong>
          )}
        </ButtonLogin>
        <LabelBack onClick={() => navigate("/home")}>Voltar</LabelBack>
        {error.visible && <AlertToast msg={error.msg} typeMsg="error" />}
      </StyledForm>
    </Root>
  );
};

export default Password;
