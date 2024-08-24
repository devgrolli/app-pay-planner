import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setUserProfile } from "@/redux/actions";
import { updateUserProfile } from "@/service/profile";

const useProfile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.root.userProfile);
  const [name, setName] = useState<string>(profile.name);
  const [email, setEmail] = useState<string>(profile.email);
  const [phone, setPhone] = useState<string>(profile.phone);
  const [loading, setLoading] = useState(false);
  const [sucessSubmit, setSucessSubmit] = useState(false);

  const handleNewPageOrder = (textBody: any) => {
    window.open(textBody.order_status_url, "_blank", "noopener noreferrer");
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const token = (await localStorage.getItem("token")) || " ";

    const updatedProfile = {
      ...profile,
      email,
      name,
      phone,
    };
    try {
      await updateUserProfile(updatedProfile, token);

      dispatch(setUserProfile(updatedProfile));
      localStorage.setItem("userName", name);
      setSucessSubmit(true);
    } catch (err) {
      console.log("Erro ao atualizar perfil:", err);
      setLoading(false);
    }
  };

  return {
    name,
    email,
    phone,
    profile,
    loading,
    sucessSubmit,
    setLoading,
    handlePhoneChange,
    handleNewPageOrder,
    handleNameChange,
    handleEmailChange,
    handleSubmit,
  };
};

export default useProfile;
