import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalProfile } from "@/components/Modal/Profile";
import { CommonColors } from "@/core/colors";
import { DrawerMenu } from "@/components/Drawer/Profile";
import { faBars, faBell, faFilter, faArrowUpZA } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "@/components/Modal/Default";
import useWindowResize from "@/utils/useWindowResize";
import MediaQuery from "@/utils/MediaQuery";
import useHeader from "./useHeader";
import logo from "@/assets/png/logo2.png";
import * as S from "./styles";
import { DrawerBottom } from "../Drawer/Sort";
import { DrawerFilter } from "../Drawer/Filter";

interface HeaderProps {
  children?: React.ReactNode;
  nameRoute?: string;
  handleSortName?: (name: string) => void;
  handleFilterNumber?: (name: string) => void;
  handleClickOpen?: () => void;
}

const Header: React.FC<HeaderProps> = ({ children, nameRoute, handleSortName, handleFilterNumber }) => {
  const isMobile = Boolean(MediaQuery());
  const windowWidth = useWindowResize(() => { });
  const {
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
  } = useHeader();

  return (
    <>
      <S.ContainerHead>
        <S.PrincipalHeader>
          <S.BtnIconDrawer onClick={toggleDrawer(true)}>
            <FontAwesomeIcon icon={faBars} style={{ color: CommonColors.blue }} />
          </S.BtnIconDrawer>
          <S.TextButtonsHead>
            <S.BtnLogo onClick={() => handleHome()}>
              <S.ImageLogo src={logo} alt="logo" style={{ marginTop: 2 }} />
            </S.BtnLogo>
            {children}
          </S.TextButtonsHead>

          <S.BtnNotify onClick={toggleDrawer(true)}>
            <FontAwesomeIcon icon={faBell} style={{ color: CommonColors.grey }} size="lg" />
          </S.BtnNotify>

        </S.PrincipalHeader>

        {nameRoute === "home" && (
          <>
            <S.SubHeder>

              <S.ContainerTotal>
                <S.LabelTotal>
                  Total a pagar
                </S.LabelTotal>
                <S.TotalToPayment>
                  R$ 0,00
                </S.TotalToPayment>
              </S.ContainerTotal>
              {/* <S.ContainerSubHeader onClick={toggleDrawerBottom(true)}>
                <S.BtnSubHeader>
                  Ordenar <FontAwesomeIcon icon={faArrowUpZA} style={{ marginLeft: 5 }} color={CommonColors.grey} />
                </S.BtnSubHeader>
              </S.ContainerSubHeader>
              <S.VerticalLine />
              <S.ContainerSubHeader onClick={toggleFilterBottom(true)}>
                <S.BtnSubHeader>
                  Filtrar <FontAwesomeIcon icon={faFilter} style={{ marginLeft: 5 }} color={CommonColors.grey} />
                </S.BtnSubHeader>
              </S.ContainerSubHeader> */}
            </S.SubHeder>

            <DrawerBottom
              drawerOpen={openBottom}
              toggleDrawer={toggleDrawerBottom}
              handleSortName={handleSortName || (() => { })}
            />
            <DrawerFilter
              drawerOpen={openBottomFilter}
              toggleDrawer={toggleFilterBottom}
              handleFilterNumber={handleFilterNumber || (() => { })}
            />
          </>
        )}

        <DrawerMenu
          userName={userName}
          isMobile={isMobile}
          drawerOpen={drawerOpen}
          toggleDrawer={toggleDrawer}
          windowWidth={windowWidth}
          handleOpenModal={handleOpenModal}
          handleOpenProfile={handleOpenProfile}
          handleNavigateOrder={handleNavigateOrder}
        />

        {openModalProfile && (
          <ModalProfile
            textHeader="Dados usuário"
            open={openModalProfile}
            handleClose={handleCloseProfile}
          />
        )}

        {openModal && (
          <Modal
            textHeader="Quer sair?"
            textBody="Confirme abaixo, caso deseja sair"
            open={openModal}
            handleSubmit={handleLogout}
            handleClose={handleClose}
          />
        )}

      </S.ContainerHead>
    </>
  );
};

export default Header;
