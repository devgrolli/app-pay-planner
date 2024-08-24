import { ClientInterface } from "@/interfaces/client.interface";
import { deleteClient, getListClients } from "@/service/client";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const useListClient = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token") ?? " ";
  const [loading, setLoading] = useState(false);
  const [loadingExclude, setLoadingExclude] = useState(false);
  const [error, setError] = useState({ visible: false, msg: "" });
  const [openModal, setOpenModal] = useState(false);
  const [listClients, setListClients] = useState<ClientInterface[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterName, setFilterName] = useState("");
  const [openModalClient, setOpenModalClient] = useState(false);
  const [selectInfoClient, setSelectInfoClient] = useState<any | null>(null);
  const [itemsPerPage, setItensPerPge] = useState(15);

  const totalPages = Math.ceil(listClients.length / itemsPerPage);
  const finalPage = currentPage === totalPages;
  const initialPage = currentPage === 1;

  useEffect(() => {
    getListClientService();
  }, []);

  const getListClientService = async () => {
    setLoading(true);
    try {
      const response = await getListClients(token);
      setListClients(response.sort((a: any, b: any) => a.name.localeCompare(b.name)));
    } catch (err: any) {
      setError({ visible: true, msg: err.response.data.message });
    } finally {
      setLoading(false);
    }
  };

  const filteredClients = useMemo(() => {
    return listClients.filter((client) =>
      client.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }, [listClients, filterName]);

  const paginatedClients = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredClients.slice(startIndex, endIndex);
  }, [filteredClients, currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleCloseModal = () => {
    setOpenModalClient(false);
    setOpenModal(false);
  };

  const filterClientById = async (id: string) => {
    const selected = listClients.find((client) => client.id === id);
    setSelectInfoClient(selected);
    return selected;
  };

  const handleOpenModalClient = (idClient: string) => {
    filterClientById(idClient);
    setOpenModalClient(true);
  };

  const onCloseAlert = () => {
    setError({ visible: false, msg: "" });
  };

  const handleOptionExclude = (idClient: string) => {
    filterClientById(idClient);
    setOpenModal(true);
  };

  const handleDelete = async () => {
    try {
      setLoadingExclude(true);
      await deleteClient(selectInfoClient?.id || "", token);
      setListClients((prevClients) =>
        prevClients.filter((client) => client.id !== selectInfoClient?.id)
      );
    } catch (err: any) {
      console.log("Erro ao deletar cliente", err);
      setError({ visible: true, msg: err.response.data.message });
    } finally {
      setOpenModal(false);
      setLoadingExclude(false);
    }
  };

  const handleEditClient = async (idClient: string) => {
    const clientEdit = await filterClientById(idClient);
    navigate(`/edit-client/${idClient}`, { state: { clientEdit } });
  };

  const handleSortName = (direction: string) => {
    setListClients((currentClients) => {
      let sortedClients;
      if (direction === 'lastRegistered') {
        sortedClients = [...currentClients].sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      } else {
        sortedClients = [...currentClients].sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if (direction === 'az') {
            return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
          } else {
            return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
          }
        });
      }
      return sortedClients;
    });
  };

  const handleFilterNumber = (value: string) => {
    setItensPerPge(Number(value));
  }

  return {
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
  };
};

export default useListClient;
