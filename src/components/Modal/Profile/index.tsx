import * as React from "react";
import { BtnSave } from "./styles";
import { TransitionProps } from "@mui/material/transitions";
import { Slide, Dialog, Divider, DialogActions } from "@mui/material";
import { CommonColors } from "@/core/colors";
import { BtnClose } from "@/components/Buttons/Close";
import { Input } from "@/components/Inputs/Input";
import loadingSpinner from "@/assets/json/loading-spinner.json";
import LottieCustom from "@/utils/lottieCustom";
import HeaderModal from "../HeaderModal";
import AnimateLabel from "@/components/Animation/Label";
import useProfile from "./useProfile";
import sucess from "@/assets/json/success.json";
import Lottie from "react-lottie";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface AlertDialogSlideProps {
  open: boolean;
  textHeader: string;
  handleClose: () => void;
}

export function ModalProfile({
  open,
  textHeader,
  handleClose,
}: AlertDialogSlideProps) {
  const {
    name,
    email,
    phone,
    loading,
    sucessSubmit,
    setLoading,
    handlePhoneChange,
    handleNameChange,
    handleEmailChange,
    handleSubmit,
  } = useProfile();

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      fullWidth
    >
      <HeaderModal handleClose={handleClose} textHeader={textHeader} />

      {loading ? (
        <>
          {sucessSubmit ? (
            <>
              <Lottie
                options={{
                  loop: false,
                  autoplay: true,
                  animationData: sucess,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                eventListeners={[
                  {
                    eventName: "complete",
                    callback: () => {
                      handleClose();
                      setLoading(false);
                    },
                  },
                ]}
                height={200}
                width={200}
              />
              <AnimateLabel phrases={["Informações atualizadas"]} />
            </>
          ) : (
            <LottieCustom
              animationData={loadingSpinner}
              height={200}
              width={200}
            />
          )}
        </>
      ) : (
        <div style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}>
          <Input
            fullWidth
            value={name}
            color={CommonColors.green}
            onChange={handleNameChange}
            label="Nome"
            bottom={20}
          />

          <Input
            onChange={handleEmailChange}
            fullWidth
            value={email}
            color={CommonColors.green}
            label="E-mail"
            bottom={20}
          />

          <Input
            onChange={handlePhoneChange}
            fullWidth
            value={phone}
            color={CommonColors.green}
            label="Telefone"
            bottom={20}
            mask="(99) 9 9999-9999"
          />
        </div>
      )}

      <Divider />
      <DialogActions
        style={{ alignContent: "center", justifyContent: "center" }}
      >
        <BtnClose handleClose={handleClose} disabled={loading} />

        {!loading && (
          <BtnSave onClick={handleSubmit} disabled={loading}>
            Salvar
          </BtnSave>
        )}
      </DialogActions>
    </Dialog>
  );
}
