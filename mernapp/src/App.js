import "./App.css";
import Home from "./screens/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import { CartProvider } from "./components/ContextReducer";
import OrderHistory from "./screens/OrderHistory";
function App() {
  return (
    <CartProvider>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/loginuser" element={<Login />} />
          <Route exact path="/createuser" element={<Signup />} />
          <Route exact path="/orderhistory" element={<OrderHistory />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
