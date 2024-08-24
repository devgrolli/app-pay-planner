import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../../redux/actions";
import { useAuth } from "../../provider/authenticationProvider";
import { signIn } from "@/service/profile";

const useLogin = () => {
  const { updateAuthState } = useAuth();
  const location = useLocation();
  const { state } = location;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ visible: false, msg: "" });
  const [successMessage, setSuccess] = useState({ visible: false, msg: "" });

  useEffect(() => {
    const success = state?.success ? state.success : null;
    if (success) {
      setSuccess({ visible: true, msg: state.message });
      navigate("/login", { replace: true, state: {} });
    }
  }, [state, navigate]);

  const handleMsgError = (error: any) => {
    if (error?.response === undefined) {
      setError({
        visible: true,
        msg: "Servidor não responde!",
      });
    } else {
      setError({ visible: true, msg: error.response.data.message });
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await signIn(email, password);
      const { userId, token, userName, sessionId } = response;
      const userObject = {
        email,
        token,
        userId,
        userName,
        sessionId,
      };
      localStorage.clear();
      localStorage.setItem("profile", JSON.stringify(userObject));
      localStorage.setItem("user", email);
      localStorage.setItem("token", response.token);
      localStorage.setItem("userId", response.userId);
      localStorage.setItem("userName", response.userName);
      localStorage.setItem("sessionId", response.sessionId);

      updateAuthState();
      dispatch(login());
      navigate("/");
    } catch (err) {
      handleMsgError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onCloseAlert = (typeAlert: string) => {
    if (typeAlert === "success") {
      setSuccess({ visible: false, msg: "" });
    } else {
      setError({ visible: false, msg: "" });
    }
  };

  return {
    handleChangePassword,
    handleChangeEmail,
    handleSubmit,
    onCloseAlert,
    successMessage,
    email,
    password,
    error,
    loading,
  };
};

export default useLogin;