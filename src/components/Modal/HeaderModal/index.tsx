import CloseIcon from "@mui/icons-material/Close";
import { DialogTitle, IconButton, Typography } from "@mui/material";

interface HeaderModalProps {
  textHeader: string;
  handleClose: () => void;
}

const HeaderModal = ({ textHeader, handleClose }: HeaderModalProps) => {
  return (
    <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        variant="h6"
        sx={{ flexGrow: 1, wordBreak: "break-word", marginRight: 5 }}
      >
        {textHeader}
      </Typography>
      <IconButton
        onClick={handleClose}
        sx={{ position: "absolute", right: 8, top: 8 }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
  );
};

export default HeaderModal;
