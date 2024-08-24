import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { FC } from "react";
import { ButtonLoggout } from "@/components/Buttons/Logout";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { CommonColors } from "@/core/colors";
import { ContainerHeader } from "../styles";
interface DrawerMenuProps {
  userName: string | null;
  isMobile: boolean;
  drawerOpen: boolean;
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  windowWidth: number;
  handleOpenModal: () => void;
  handleOpenProfile: () => void;
  handleNavigateOrder: () => void;
}

export const DrawerMenu: FC<DrawerMenuProps> = ({
  userName,
  isMobile,
  drawerOpen,
  windowWidth,
  toggleDrawer,
  handleOpenModal,
  handleOpenProfile,
  handleNavigateOrder,
}) => {
  const navigate = useNavigate();

  return (
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
      <div style={{ height: 400, display: "flex", flexDirection: "column" }}>
        <IconButton
          onClick={toggleDrawer(false)}
          sx={{ alignSelf: "flex-start" }}
        >
          <CloseIcon />
        </IconButton>
        <div style={{ width: isMobile ? windowWidth : 400 }}>
          <ContainerHeader>
            <FontAwesomeIcon
              icon={faUserCircle}
              style={{
                color: CommonColors.greyLight,
                height: 170,
                width: 170,
              }}
            />
            <p>Olá, {userName}</p>
          </ContainerHeader>
          <List style={{ padding: 16 }}>
            <ListItem onClick={handleOpenProfile} style={{ borderRadius: 10 }}>
              <ListItemText primary="Meu Perfil" />
            </ListItem>
            <Divider />
            <ListItem onClick={() => navigate("/list-clients")}>
              <ListItemText primary="Clientes" />
            </ListItem>
            <Divider />
            <ListItem onClick={() => navigate("/list-products")}>
              <ListItemText primary="Produtos" />
            </ListItem>
            <Divider style={{ marginBottom: 20 }} />
            <ButtonLoggout handleOpenModal={handleOpenModal} />
          </List>
        </div>
      </div>
    </Drawer>
  );
};
