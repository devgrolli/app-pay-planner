import { Input } from "@/components/Inputs/Input";
import { useNavigate } from "react-router-dom";
import { CommonColors } from "@/core/colors";
import { StyledForm, ButtonLogin, Root, Title, LabelBack } from "./styles";
import Loading from "@/assets/json/loading-secondary.json";
import LottieCustom from "@/utils/lottieCustom";
import useSignUp from "./useSignUp";
import { fieldsConfig } from "./types";
import { Controller } from "react-hook-form";
import AlertFooter from "@/components/AlertFooter";

const SignUp = () => {
  const {
    onCloseAlert,
    handleSubmit,
    navigate,
    onSubmit,
    control,
    loading,
    error,
  } = useSignUp();

  return (
    <Root>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Title>Cadastre-se</Title>
        {fieldsConfig.map((field) => (
          <Controller
            name={field.name}
            control={control}
            defaultValue=""
            rules={field.rules}
            render={({
              field: { onChange, value },
              fieldState: { error },
            }) =>
              <Input
                withBorderColor={true}
                fullWidth
                type={field.type}
                mask={field.mask}
                value={value}
                onChange={(e) => {
                  onChange(e.target.value);
                }}
                color={error ? CommonColors.secondary : CommonColors.green}
                label={field.label}
                bottom={error ? 10 : 30}
                error={!!error}
                helperText={error ? error.message : ""}
              />
            }
          />
        ))}

        <ButtonLogin type="submit" disabled={loading} isLoading={loading}>
          {loading ? (
            <LottieCustom
              animationData={Loading}
              height={50}
              width={50}
              speed={1.1}
            />
          ) : (
            <strong>Cadastrar</strong>
          )}
        </ButtonLogin>

        <LabelBack onClick={() => navigate("/home")}>Voltar</LabelBack>
        <AlertFooter
          error
          message={error.msg}
          visibleAlert={error.visible}
          onClose={onCloseAlert}
        />
      </StyledForm>
    </Root>
  );
};

export default SignUp;