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

interface FilterBottomProps {
  drawerOpen: boolean;
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  handleFilterNumber: (name: string) => void;
}

export const DrawerFilter: FC<FilterBottomProps> = ({
  drawerOpen,
  toggleDrawer,
  handleFilterNumber,
}) => {
  const [numberPage, setNumberPage] = useState('15');

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberPage((event.target as HTMLInputElement).value);
    handleFilterNumber(event.target.name)
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
            <FormLabel component="legend">Resultados por página:</FormLabel>
            <RadioGroup
              aria-label="sort-order"
              name="sort-order"
              value={numberPage}
              onChange={handleFilterChange}
            >
              <FormControlLabel value="5" control={<Radio />} label="5" name="5" />
              <FormControlLabel value="10" control={<Radio />} label="10" name="10" />
              <FormControlLabel value="20" control={<Radio />} label="20" name="20" />
              <FormControlLabel value="25" control={<Radio />} label="25" name="25" />
            </RadioGroup>
          </div>
      </div>
    </Drawer>
  );
};