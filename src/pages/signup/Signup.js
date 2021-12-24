import styles from "./Signup.module.css";
import { useSignup } from "../../hooks/useSignup";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(displayName, email, password);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>Signup</h2>

      <label>
        <span>Display Name:</span>
        <input type="text" onChange={(e) => setDisplayName(e.target.value)} value={displayName} />
      </label>

      <label>
        <span>Email:</span>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
      </label>

      <label>
        <span>Password:</span>
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
      </label>
      {isPending ? (
        <button className="btn" disabled>
          Loading
        </button>
      ) : (
        <button className="btn">Submit</button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
