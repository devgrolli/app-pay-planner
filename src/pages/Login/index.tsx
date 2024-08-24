import { Input } from "@/components/Inputs/Input";
import { useNavigate } from "react-router-dom";
import { CommonColors } from "@/core/colors";
import { StyledForm, ButtonLogin, Root, Title, BtnForgetPassword, LabelBack } from "./styles";
import Loading from "@/assets/json/loading-secondary.json";
import LottieCustom from "@/utils/lottieCustom";
import AlertToast from "@/components/Alert";
import useLogin from "./useLogin";
import AlertFooter from "@/components/AlertFooter";

const Login = () => {
  const navigate = useNavigate();
  const {
    handleChangePassword,
    handleChangeEmail,
    handleSubmit,
    onCloseAlert,
    successMessage,
    password,
    loading,
    email,
    error,
  } = useLogin();

  return (
    <Root>
      <StyledForm onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Input
          fullWidth
          value={email}
          type="email"
          color={CommonColors.primary}
          onChange={(e) => handleChangeEmail(e)}
          label="E-mail"
          bottom={20}
        />
        <Input
          fullWidth
          value={password}
          type="password"
          color={CommonColors.primary}
          onChange={(e) => handleChangePassword(e)}
          label="Senha"
        />
        <div style={{ display: "flex", width: "100%", justifyContent: "end", marginRight: 10 }}>
          <BtnForgetPassword href="/forget-password">Esqueceu sua senha?</BtnForgetPassword>
        </div>
        <ButtonLogin type="submit" disabled={loading} isLoading={loading}>
          {loading ? (
            <LottieCustom
              animationData={Loading}
              height={50}
              width={50}
              speed={1.1}
            />
          ) : (
            <strong>Entrar</strong>
          )}
        </ButtonLogin>
        <LabelBack onClick={() => navigate("/home")}>Voltar</LabelBack>
        {successMessage.visible &&  <AlertFooter
          message={successMessage.msg}
          visibleAlert={successMessage.visible}
          onClose={()=> onCloseAlert("success")}
        />}
        {error.visible && <AlertFooter
          error
          message={error.msg}
          visibleAlert={error.visible}
          onClose={()=> onCloseAlert("error")}
        />}
      </StyledForm>
    </Root>
  );
};

export default Login;
