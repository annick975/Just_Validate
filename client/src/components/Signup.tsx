import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [username, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();

    const user = { username, email, password };

    console.log("Sending user data:", user);
    
    axios
      .post("http://localhost:3001/register", user)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"></label>
        <strong>Username: </strong>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter username"
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="email"></label>
        <strong>Email: </strong>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="password"></label>
        <strong>Password: </strong>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account?</p>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </>
  );
}

export default Signup;
