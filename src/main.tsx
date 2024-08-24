import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AuthProvider from "./provider/authenticationProvider";
import Routes from "./routes";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <AuthProvider>
    <Provider store={store}>
      <Routes />
    </Provider>
  </AuthProvider>
);
