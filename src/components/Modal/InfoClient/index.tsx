import * as React from "react";
import { forwardRef, useEffect, useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import {
  Slide,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
} from "@mui/material";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { getLocationGoogleMaps } from "@/service/client";
import { Close } from "./styles";
import { BtnClose } from "@/components/Buttons/Close";
import HeaderModal from "../HeaderModal";
import { formatDate } from "@/utils/formatDate";

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
  handleClose: () => void;
}

const geocodeAddress = async (address: string, apiKey: string) => {
  const data = await getLocationGoogleMaps(address, apiKey);
  if (data.results && data.results.length > 0) {
    const { lat, lng } = data.results[0].geometry.location;
    return { lat, lng };
  } else {
    return null;
  }
};

export function ModalInfoClient({
  open,
  textHeader,
  textBody,
  handleClose,
}: AlertDialogSlideProps) {
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const address = `${textBody.address}, ${textBody.number} - ${textBody.neighborhood} - ${textBody.zipCode}`;
  const apiKeyGoogle = process.env.API_KEY_GOOGLE || "";

  useEffect(() => {
    const fetchCoordinates = async () => {
      const coords = await geocodeAddress(address, apiKeyGoogle);
      if (coords) {
        setPosition(coords);
      }
    };

    fetchCoordinates();
  }, [address]);

  const Style = {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 400,
    fontSize: 20,
    color: "#252525",
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      fullScreen
    >
      <HeaderModal handleClose={handleClose} textHeader={textHeader} />
      <DialogContent>
        <DialogContentText>Nome: {textBody.name}</DialogContentText>
        <DialogContentText>
          Nome Comercial: {textBody.tradeName}
        </DialogContentText>
        <DialogContentText>IE: {textBody.ie}</DialogContentText>
        <DialogContentText>CNPJ: {textBody.cnpj}</DialogContentText>
        <DialogContentText>Telefone: {textBody.phone}</DialogContentText>
        <DialogContentText>Data de Cadastro: {formatDate(textBody.createdAt)}</DialogContentText>

        <Divider style={{ marginTop: 10 }} />

        <DialogContentText style={Style}>Endereço</DialogContentText>

        <DialogContentText>CEP: {textBody.zipCode}</DialogContentText>
        <DialogContentText>Rua: {textBody.address}</DialogContentText>
        <DialogContentText>Bairro: {textBody.neighborhood}</DialogContentText>
        <DialogContentText>
          Ponto de Referência: {textBody.referencePoint}
        </DialogContentText>

        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
        <DialogContentText style={Style}>
          Informações Adicionais
        </DialogContentText>

        <DialogContentText>
          Nome do Comprador 1: {textBody.buyerNumberOne}
        </DialogContentText>
        <DialogContentText>
          Nome do Comprador 2: {textBody.buyerNumberTwo}
        </DialogContentText>
        <DialogContentText>
          Tipo do Comprador: {textBody.typeTrade}
        </DialogContentText>
        <DialogContentText>
          Frequência de Compra: {textBody.purchaseFrequency}
        </DialogContentText>
        <DialogContentText>
          Observações: {textBody.observations}
        </DialogContentText>

        <Divider style={{ marginTop: 10, marginBottom: 20 }} />

        {position && (
          <LoadScript googleMapsApiKey={apiKeyGoogle}>
            <GoogleMap
              mapContainerStyle={{
                width: "100%",
                height: "400px",
              }}
              center={position}
              zoom={20}
            >
              <Marker position={position} />
            </GoogleMap>
          </LoadScript>
        )}
      </DialogContent>
      <DialogActions
        style={{ alignContent: "center", justifyContent: "center" }}
      >
        <BtnClose handleClose={handleClose} fullWidth />
      </DialogActions>
    </Dialog>
  );
}
