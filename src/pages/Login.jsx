import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        alert("Account created successfully!");
      } else {
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        alert("Login successful!");
      }

      navigate("/home");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();

      await signInWithPopup(auth, provider);

      alert("Google login successful!");
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #eee7ff, #f8f5ff)",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 8px 30px rgba(50, 30, 80, 0.12)",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#6c45c0",
            marginBottom: "8px",
          }}
        >
          Uplyft
        </h1>

        <p style={{ textAlign: "center", color: "#666" }}>
          Learn. Grow. Achieve.
        </p>

        <h2 style={{ textAlign: "center", color: "#292044" }}>
          {isSignup ? "Create Account" : "Welcome Back!"}
        </h2>

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={inputStyle}
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password (minimum 6 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
            style={inputStyle}
          />

          <button
            type="submit"
            disabled={loading}
            style={buttonStyle}
          >
            {loading
              ? "Please wait..."
              : isSignup
              ? "Sign Up"
              : "Login"}
          </button>
        </form>

        <p style={{ textAlign: "center", color: "#555" }}>
          {isSignup
            ? "Already have an account?"
            : "Don't have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsSignup(!isSignup)}
            style={{
              border: "none",
              background: "none",
              color: "#6c45c0",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>

        <div
          style={{
            textAlign: "center",
            margin: "15px 0",
            color: "#888",
          }}
        >
          OR
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          style={{
            ...buttonStyle,
            background: "white",
            color: "#333",
            border: "1px solid #ddd",
          }}
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  boxSizing: "border-box",
  fontSize: "14px",
};

const buttonStyle = {
  width: "100%",
  padding: "13px",
  background: "#6c45c0",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "15px",
  fontWeight: "bold",
};

export default Login;