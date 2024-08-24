import React, { FC, useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import { ButtonLoggout } from "@/components/Buttons/Logout";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { CommonColors } from "@/core/colors";
import { ContainerHeader } from "../styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

interface DrawerBottomProps {
  drawerOpen: boolean;
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  handleSortName: (name: string) => void;
}

export const DrawerBottom: FC<DrawerBottomProps> = ({
  drawerOpen,
  toggleDrawer,
  handleSortName,
}) => {
  const [sortOrder, setSortOrder] = useState('a-z');

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortOrder((event.target as HTMLInputElement).value);
    handleSortName(event.target.name)
  };

  return (
    <Drawer anchor="bottom" open={drawerOpen} onClose={toggleDrawer(false)}>
      <div style={{  display: "flex", flexDirection: "column" }}>
        <IconButton
          onClick={toggleDrawer(false)}
          sx={{ alignSelf: "flex-end" }}
          >
          <CloseIcon />
        </IconButton>
          <div style={{ padding: 16 }}>
            <FormLabel component="legend">Ordenar os clientes:</FormLabel>
            <RadioGroup
              aria-label="sort-order"
              name="sort-order"
              value={sortOrder}
              onChange={handleSortChange}
            >
              <FormControlLabel value="a-z" control={<Radio />} label="A-Z" name="az" />
              <FormControlLabel value="z-a" control={<Radio />} label="Z-A" name="za" />
              <FormControlLabel value="lastRegistered" control={<Radio />} label="Últimos cadastrados" name="lastRegistered" />
            </RadioGroup>
          </div>
      </div>
    </Drawer>
  );
};