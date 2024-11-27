import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../components/screens/Login/Login"

import { useAppSelector } from "../hooks/redux";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const AppRouter = () => {

//TRAE EL VALOR boolean DEL USUARIO SI ESTA LOGEADO O NO
const isLogged = useAppSelector(state => state.auth.isLogged)


  return (
    <>

      <Routes>
        {isLogged ? (
//SI ESTA LOGEADO PUEDE IR A TODAS LAS RUTAS DE PROTECTED
          <Route path="/*" element={<ProtectedRoutes />} />
        ) : (
//SI NO ESTA LOGEADO LO MANDA AL LOGIN
          <Route path="/*" element={<Navigate to={"/login"}/>} />
        )}

        <Route path="/login" element={<Login />} />

      </Routes>

    </>

    );
};
