import { useCallback, useContext, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { setUserProfile } from "@/redux/actions";
import { getUserProfile } from "@/service/profile";
import { useAuth } from "@/provider/authenticationProvider";

const useHeader = () => {
  const { userName } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openBottom, setOpenBottom] = useState(false);
  const [openBottomFilter, setOpenBottomFilter] = useState(false);
  const [openModalProfile, setOpenModalProfile] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setDrawerOpen(false);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const fetchUser = async () => {
    const userId = (await localStorage.getItem("userId")) || " ";
    const token = (await localStorage.getItem("token")) || " ";

    try {
      const userProfileResponse = await getUserProfile(userId, token);
      dispatch(setUserProfile(userProfileResponse));
    } catch (error) {
      console.error("Erro ao buscar dados do usuario", error);
    }
  };

  const handleOpenProfile = async () => {
    setDrawerOpen(false);
    await fetchUser();
    setOpenModalProfile(true);
  };

  const handleCloseProfile = () => {
    setOpenModalProfile(false);
  };

  const handleLogout = useCallback(() => {
    localStorage.clear();
    navigate("/login");
  }, []);

  const handleNavigateOrder = useCallback(() => {
    navigate("/orders");
  }, []);

  const handleHome = useCallback(() => {
    navigate("/");
  }, []);

  const handleToggle = (setter: (open: boolean) => void) => 
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
         (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setter(open);
    };
  
  const toggleDrawer = handleToggle(setDrawerOpen);
  const toggleDrawerBottom = handleToggle(setOpenBottom);
  const toggleFilterBottom = handleToggle(setOpenBottomFilter);

  return {
    userName,
    openModal,
    drawerOpen,
    openBottom,
    openModalProfile,
    openBottomFilter,
    handleHome,
    handleClose,
    handleLogout,
    toggleDrawer,
    handleOpenModal,
    handleOpenProfile,
    toggleFilterBottom,
    toggleDrawerBottom,
    handleCloseProfile,
    handleNavigateOrder,
  };
};

export default useHeader;
