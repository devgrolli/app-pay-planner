import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions";
import { useAuth } from "../../provider/authenticationProvider";
import { signIn, signUp } from "@/service/profile";
import { useForm } from "react-hook-form";

const useSignUp = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm();
  const token = localStorage.getItem("token") || " ";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ visible: false, msg: "" });

  const onSubmit = async (data: any) => {
    setLoading(true);

    try {
      const response = await signUp(data, token);
      navigate("/login", { state: { success: true, message: response.message } });
    } catch (err: any) {
      setError({ visible: true, msg: err.response.data.message });
    } finally {
      setLoading(false);
    }
  };

  const onCloseAlert = () => {
    setError({ visible: false, msg: "" });
  };

  return {
    onCloseAlert,
    handleSubmit,
    navigate,
    onSubmit,
    control,
    loading,
    error,
  };
};
export default useSignUp;
