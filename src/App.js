import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthPage from "./pages/AuthPage";
import NewOrderPage from "./pages/NewOrderPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import NavBar from "./components/NavBar";
import { getUser } from './utilities/users-service';

function App() {
  const [user, setUser] = useState(getUser());

  useEffect(() => {
    
  }, []);

  return (
    <main className="App">
      {user ? (
        <>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/orders/new" element={<NewOrderPage/>}/>
          <Route path="/orders" element={<OrderHistoryPage/>}/>
        </Routes>
        </>
      ) : (
        <AuthPage user={user} setUser={setUser}/>
      )}
    </main>
  );
}

export default App;
