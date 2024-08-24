import React, { useState, ComponentProps } from 'react';
import { action } from '@storybook/addon-actions';
import { PieChart, PieChartProps } from "@mui/x-charts/PieChart";
import { legendClasses } from "@mui/x-charts/ChartsLegend";
import Header from "@/components/Header";
import * as S from "./styles";
import { isEmpty } from "lodash";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleInfo,
  faPencil,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalInfoClient } from "@/components/Modal/InfoClient";
import { CommonColors } from "@/core/colors";
import { Modal } from "@/components/Modal/Default";
import { Input } from "@/components/Inputs/Input";
import loadingSpinner from "@/assets/json/loading-spinner.json";
import useListClient from "./useListClient";
import LottieCustom from "@/utils/lottieCustom";
import AlertFooter from "@/components/AlertFooter";
import { DrawerBottom } from '@/components/Drawer/Sort';

const otherProps: Partial<PieChartProps> = {
  width: 500,
  height: 200,
};

const colorScheme = [
  CommonColors.error,
  CommonColors.green,
  CommonColors.blue,
  "#ffe14f",
];

const purchaseFrequencyOptions: { label: string; value: string }[] = [
  { label: "Boa", value: "boa" },
  { label: "Muito boa", value: "muito_boa" },
  { label: "Compra às vezes", value: "compra_as_vezes" },
  { label: "Nunca compra", value: "nunca_compra" },
];


const ListClients = () => {
  const {
    error,
    loading,
    openModal,
    finalPage,
    totalPages,
    filterName,
    initialPage,
    listClients,
    currentPage,
    loadingExclude,
    openModalClient,
    paginatedClients,
    selectInfoClient,
    handleOpenModalClient,
    handleOptionExclude,
    handlePreviousPage,
    handleFilterNumber,
    handleCloseModal,
    handleEditClient,
    handleNextPage,
    handleSortName,
    setFilterName,
    handleDelete,
    onCloseAlert,
    navigate,
  } = useListClient();

  const frequencyCounts = purchaseFrequencyOptions.map((option) => ({
    label: option.label,
    value: paginatedClients.filter(
      (client) => client.purchaseFrequency === option.value
    ).length,
  }));

  return (
    <S.Root>
      <Header nameRoute="clients" handleSortName={handleSortName} handleFilterNumber={handleFilterNumber}>
        <S.BadgeClients loading={loading}>
          {loading ? (
            <LottieCustom animationData={loadingSpinner} height={30} width={30} />
          ) : (
            <>
              {listClients.length ?? 0} Clientes
            </>
          )}
        </S.BadgeClients>
      </Header>
      <S.ContainerBtns>
        <S.BtnAddClient onClick={() => navigate("/create-client")}>
          Cadastrar
        </S.BtnAddClient>
        <Input
          fullWidth={false}
          value={filterName}
          color={CommonColors.green}
          onChange={(e) => setFilterName(e.target.value)}
          label="Filtre por Nome"
          top={10}
          styles={{ marginLeft: 10 }}
        />
      </S.ContainerBtns>

      {loading && isEmpty(paginatedClients) ? (
        <LottieCustom animationData={loadingSpinner} height={250} width={250} />
      ) : (
        <>
          {!isEmpty(paginatedClients) ? (
            <>
              {paginatedClients.map((e: any) => (
                <S.TableResponsive key={e.id}>
                  <S.DivInfosMobile>
                    <S.ItemLine>Nome: {e.name}</S.ItemLine>
                    <S.ItemLine>Comprador: {e.buyerNumberOne}</S.ItemLine>
                    <S.ItemLine>Endereço: {e.address}</S.ItemLine>
                    <S.ItemLine>Bairro: {e.neighborhood}</S.ItemLine>
                    <S.ItemLine>Telefone: {e.phone}</S.ItemLine>
                  </S.DivInfosMobile>
                  <S.DivButton>
                    <S.BtnsList color={CommonColors.yellow} onClick={() => handleOpenModalClient(e.id)}>
                    <FontAwesomeIcon
                        icon={faCircleInfo}
                        style={{ color: CommonColors.yellow }}
                      />
                    </S.BtnsList>
                  
                    <S.BtnsList color={CommonColors.error} onClick={() => handleEditClient(e.id)}>
                      <FontAwesomeIcon
                        icon={faPencil}
                        style={{ color: CommonColors.error }}
                      />
                    </S.BtnsList>
                    <S.BtnsList color={CommonColors.green} onClick={() => handleOptionExclude(e.id)}>
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        style={{ color: CommonColors.green }}
                      />
                    </S.BtnsList>
                  </S.DivButton>
                </S.TableResponsive>
              ))}
            </>
          ) : (
            <S.CenteredContainer>
              <S.TextNoResults>Nenhum cliente encontrado</S.TextNoResults>
            </S.CenteredContainer>
          )}
        </>
      )}

      {openModalClient && (
        <ModalInfoClient
          textHeader="Informações do Cliente"
          textBody={selectInfoClient}
          open={openModalClient}
          handleClose={handleCloseModal}
        />
      )}

      {openModal && (
        <Modal
          textHeader="Excluir Cliente"
          textBody="Tem certeza que deseja excluir esse cliente? Confirme abaixo se sim, caso contrário, cliente em Fechar"
          loading={loadingExclude}
          open={openModal}
          handleSubmit={handleDelete}
          handleClose={handleCloseModal}
        />
      )}

      {!loading && !isEmpty(paginatedClients) && (
        <S.PaginationContainer>
          <S.PaginationButton
            onClick={handlePreviousPage}
            disabled={initialPage}
          >
            <S.StyledIcon icon={faCircleChevronLeft} disabled={initialPage} />
          </S.PaginationButton>
          <S.PageIndicator>
            Página {currentPage} de {totalPages}
          </S.PageIndicator>
          <S.PaginationButton onClick={handleNextPage} disabled={finalPage}>
            <S.StyledIcon icon={faCircleChevronRight} disabled={finalPage} />
          </S.PaginationButton>
        </S.PaginationContainer>
      )}

      <AlertFooter
        message={error.msg}
        visibleAlert={error.visible}
        onClose={onCloseAlert}
      />
    </S.Root>
  );
};

export default ListClients;