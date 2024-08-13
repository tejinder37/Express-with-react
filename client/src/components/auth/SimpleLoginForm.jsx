import { useEffect, useState } from "react";

const SimpleLoginForm = () => {
  const [authUser, setAuthUser] = useState(null); // Set initial state as null
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",  //setting http headers.
        },
        body: JSON.stringify({ email: data.email, password: data.password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const result = await response.json();
      localStorage.setItem("auth", JSON.stringify(result));
      setAuthUser(result); // Set authUser immediately after successful login
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    if (authData) {
      setAuthUser(authData);
    }
  }, []); // Remove data dependency, only run once on mount

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>
          {authUser?.user?.name ? `${authUser.user.name} (${authUser.user.email})` : "Please log in"}
        </h1>
      </div>
      <div>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleValueChange}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleValueChange}
          />
        </label>
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default SimpleLoginForm;
