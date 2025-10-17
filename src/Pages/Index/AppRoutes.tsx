import { Route, Routes } from "react-router";
import Login from "../Login/Login";
import Index from "./Index";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}
