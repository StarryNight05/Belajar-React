import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Products from "./pages/Products";
import AddNewUser from "./pages/AddNewUser";
import UpdateUser from "./pages/UpdateUser";
import NewProduct from "./pages/NewProduct";
import UpdateProduct from "./pages/UpdateProduct";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddNewUser />} />
          <Route path="/users/edit/:id" element={<UpdateUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<NewProduct />} />
          <Route path="/products/edit/:id" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
