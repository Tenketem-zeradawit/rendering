


import React, { useState } from "react";
import LoginForm from "./LoginForm";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import ErrorMessage from "./ErrorMessage";
import "./App.css"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLogin = (username, password) => {
    if (username === "titi" && password === "1234") {
      setIsAdmin(true);
      setIsLoggedIn(true);
      setShowError(false);
    } else if (username === "user" && password === "user") {
      setIsLoggedIn(true);
      setIsAdmin(false);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setShowError(false);
  };

  return (
    <div className="bord"  >
      {!isLoggedIn && <LoginForm onLogin={handleLogin} />}
      {showError && <ErrorMessage />}
      {isLoggedIn && isAdmin && (
        <>
          <AdminDashboard />
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
      {isLoggedIn && !isAdmin && (
        <>
          <UserDashboard />
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default App;

