import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import loadingSpinner from "@/assets/json/loading-spinner.json";
import LottieCustom from "@/utils/lottieCustom";
import HeaderModal from "../HeaderModal";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { BtnClose } from "@/components/Buttons/Close";
import { Confirm } from "./styles";

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
  loading?: boolean;
  textBody?: string;
  textHeader: string;
  handleClose: () => void;
  handleSubmit: () => void | Promise<void>;
}

export function Modal({
  open,
  loading = false,
  textBody,
  textHeader,
  handleClose,
  handleSubmit,
}: AlertDialogSlideProps) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <HeaderModal handleClose={handleClose} textHeader={textHeader} />
      <DialogContent>
        <DialogContentText>{textBody}</DialogContentText>
      </DialogContent>
      <div
        style={{
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "row",
          display: "flex",
          marginBottom: 10,
        }}
      >
        <BtnClose handleClose={handleClose} />
        <Confirm
          onClick={!loading ? handleSubmit : undefined}
          disabled={loading}
          isLoading={loading}
        >
          Confirmar
          {loading && (
            <LottieCustom
              animationData={loadingSpinner}
              height={20}
              width={20}
              style={{ marginLeft: 10 }}
            />
          )}
        </Confirm>
      </div>
    </Dialog>
  );
}
