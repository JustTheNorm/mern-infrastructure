import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthPage from "./pages/AuthPage";
import NewOrderPage from "./pages/NewOrderPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import NavBar from "./components/NavBar";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    
  }, []);

  return (
    <main className="App">
      {user ? (
        <>
        <NavBar/>
        <Routes>
          <Route path="/orders/new" element={<NewOrderPage/>}/>
          <Route path="/orders" element={<OrderHistoryPage/>}/>
        </Routes>
        </>
      ) : (
        <AuthPage />
      )}
    </main>
  );
}

export default App;
