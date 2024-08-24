import * as React from "react";
import { forwardRef, useEffect, useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import { Slide, Dialog, DialogActions, DialogContent, DialogContentText, Divider } from "@mui/material";
import { Image, ContainerImage, BtnExclude } from "./styles";
import { BtnClose } from "@/components/Buttons/Close";
import HeaderModal from "../HeaderModal";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface AlertDialogSlideProps {
  textHeader: string;
  textBody?: any;
  open: boolean;
  handleExclude?: () => void;
  handleClose: () => void;
}

export function ModalInfoProduct({ open, textHeader, textBody, handleClose, handleExclude }: AlertDialogSlideProps) {
  const dialogStyle = { 
    fontSize: 18,
    marginBottom: 5
  }

  return (
    <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} fullWidth={true}>
      <HeaderModal handleClose={handleClose} textHeader={textHeader} />

      <DialogContent>
        {textBody && (
          <>
            <DialogContentText style={dialogStyle}>Código: {textBody.idProduct}</DialogContentText>
            <DialogContentText style={dialogStyle}>Produto: {textBody.nameProduct}</DialogContentText>
            <DialogContentText style={dialogStyle}>Marca: {textBody.brand}</DialogContentText>
            <DialogContentText style={dialogStyle}>Categoria: {textBody.category}</DialogContentText>
            <DialogContentText style={dialogStyle}>Preço Un: {textBody.priceUn}</DialogContentText>
            {textBody.hasBox && (
              <DialogContentText style={dialogStyle}>Quantidade por Caixa: {textBody.unPerBox}</DialogContentText>
            )}
            <Divider style={{ marginTop: 20, marginBottom: 20 }} />
            <ContainerImage>
              <Image src={textBody.imageUrl} alt="Preview" />
            </ContainerImage>
          </>
        )}
      </DialogContent>
      <div
        style={{
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "column",
          display: "flex",
          margin: 20,

        }}
      >
        <BtnExclude onClick={handleExclude}>Excluir </BtnExclude>
        <BtnClose handleClose={handleClose}  />
      </div>
    </Dialog>
  );
}