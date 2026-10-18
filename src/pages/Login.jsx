import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
GoogleAuthProvider,
signInWithPopup,
sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";

function Login() {
const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
const [isSignup, setIsSignup] = useState(false);

const handleSubmit = async (e) => {
e.preventDefault();
setLoading(true);

try {
  if (isSignup) {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Account created successfully!");
  } else {
    await signInWithEmailAndPassword(auth, email, password);
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
setLoading(true);

try {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
  alert("Google login successful!");
  navigate("/home");
} catch (error) {
  alert(error.message);
} finally {
  setLoading(false);
}

};

const handleForgotPassword = async () => {
if (!email.trim()) {
alert("Please enter your email first.");
return;
}

try {
  await sendPasswordResetEmail(auth, email);
  alert("Password reset link sent. Please check your email.");
} catch (error) {
  alert(error.message);
}

};

const inputStyle = {
width: "100%",
padding: "13px",
marginBottom: "15px",
border: "1px solid #ddd",
borderRadius: "8px",
boxSizing: "border-box",
fontSize: "15px",
};

const buttonStyle = {
width: "100%",
padding: "13px",
background: "#6c45c0",
color: "white",
border: "none",
borderRadius: "8px",
cursor: "pointer",
fontSize: "16px",
marginBottom: "12px",
};

return (
<div
style={{
minHeight: "100vh",
display: "flex",
justifyContent: "center",
alignItems: "center",
background: "#f4efff",
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
borderRadius: "16px",
boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
boxSizing: "border-box",
}}
>
<h1 style={{ textAlign: "center", color: "#6c45c0" }}>
Uplyft
</h1>

    <p style={{ textAlign: "center", color: "#666" }}>
      Your journey to a better future starts here!
    </p>

    <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
      {isSignup ? "Create Account" : "Welcome Back"}
    </h2>

    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
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

      {!isSignup && (
        <div style={{ textAlign: "right" }}>
          <button
            type="button"
            onClick={handleForgotPassword}
            style={{
              background: "none",
              border: "none",
              color: "#6c45c0",
              cursor: "pointer",
              marginBottom: "15px",
            }}
          >
            Forgot Password?
          </button>
        </div>
      )}

      <button type="submit" disabled={loading} style={buttonStyle}>
        {loading
          ? "Please wait..."
          : isSignup
          ? "Create Account"
          : "Login"}
      </button>
    </form>

    <p style={{ textAlign: "center", color: "#777" }}>OR</p>

    <button
      type="button"
      onClick={handleGoogleLogin}
      disabled={loading}
      style={{
        ...buttonStyle,
        background: "white",
        color: "#333",
        border: "1px solid #ddd",
      }}
    >
      Continue with Google
    </button>

    <p style={{ textAlign: "center", marginTop: "15px" }}>
      {isSignup
        ? "Already have an account? "
        : "Don't have an account? "}
      <button
        type="button"
        onClick={() => setIsSignup(!isSignup)}
        style={{
          background: "none",
          border: "none",
          color: "#6c45c0",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {isSignup ? "Login" : "Sign Up"}
      </button>
    </p>
  </div>
</div>

);
}

export default Login;