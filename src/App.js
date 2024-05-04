import { Routes, Route } from "react-router";
import "./App.css";
import LoginFinally from "./components/Signin/LoginFinally";
import MainRoutes from "./components/Home/MainRoutes";
import { useSelector } from "react-redux";
const App = () => {
  const isLogged = useSelector((state) => state.auth.login.isLogged);
  return (
    <Routes>
      {!isLogged && <Route path="*" element={<LoginFinally />} />}
      {isLogged && (
        <>
          <Route path="/main" element={<MainRoutes />} />
        </>
      )}
    </Routes>
  );
};

export default App;
