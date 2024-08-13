import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";
import { setCredentials } from "./features/auth/authSlice";
import SimpleLoginForm from "./components/auth/SimpleLoginForm";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadAuthFromStorage = () => {
      const storedAuth = localStorage.getItem("auth");
      if (storedAuth) {
        dispatch(setCredentials(JSON.parse(storedAuth)));
      }
    };

    loadAuthFromStorage();
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/simple-login" element={<SimpleLoginForm />} />
      </Routes>
    </Router>
  );
};

export default App;
