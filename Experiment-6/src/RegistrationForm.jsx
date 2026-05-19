import React, { useState, useEffect } from "react";

function RegistrationForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const [users, setUsers] = useState([]);

  // Fetch API data using useEffect
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  // Form Validation
  const validateForm = () => {

    let formErrors = {};

    if (name.trim() === "") {
      formErrors.name = "Name is required";
    }

    if (email.trim() === "") {
      formErrors.email = "Email is required";
    }

    if (password.trim() === "") {
      formErrors.password = "Password is required";
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  // Form Submit
  const handleSubmit = (e) => {

    e.preventDefault();

    if (validateForm()) {

      setSuccess("Registration Successful!");

      const newUser = {
        name,
        email,
      };

      setUsers([...users, newUser]);

      setName("");
      setEmail("");
      setPassword("");

      setErrors({});
    }
  };

  return (
    <div style={styles.container}>

      <div style={styles.formBox}>

        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          {errors.name && (
            <p style={styles.error}>{errors.name}</p>
          )}

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          {errors.email && (
            <p style={styles.error}>{errors.email}</p>
          )}

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          {errors.password && (
            <p style={styles.error}>{errors.password}</p>
          )}

          <button type="submit" style={styles.button}>
            Register
          </button>

        </form>

        {success && (
          <h2 style={styles.success}>
            {success}
          </h2>
        )}

        <div style={styles.userBox}>

          <h2>Registered Users</h2>

          <ul>

            {users.slice(0, 5).map((user, index) => (
              <li key={index}>
                {user.name} - {user.email}
              </li>
            ))}

          </ul>

        </div>

      </div>

    </div>
  );
}

const styles = {

  container: {
    backgroundColor: "#1f1f1f",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
  },

  formBox: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "10px",
    width: "450px",
    textAlign: "center",
    boxShadow: "0px 0px 10px gray",
  },

  input: {
    width: "90%",
    padding: "10px",
    margin: "10px 0",
    fontSize: "16px",
  },

  button: {
    padding: "10px 20px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  },

  error: {
    color: "red",
    margin: "0",
  },

  success: {
    color: "green",
  },

  userBox: {
    backgroundColor: "#eef5ee",
    marginTop: "20px",
    padding: "15px",
  },
};

export default RegistrationForm;