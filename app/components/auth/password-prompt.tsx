// components/PasswordPromptDialog.tsx
"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const PasswordPromptDialog = () => {
  const [password, setPassword] = useState("");
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const request = await fetch(`/api/password`, {
      body: JSON.stringify({ password }),
      headers: { "Content-Type": "application/json" },
      method: "post",
    });

    console.log(request.status);

    if (request.status !== 200) {
      return setPasswordIncorrect(true), setLoading(false);
    } else {
      router.refresh();
    }
  };

  return (
    <div className="password-prompt-dialog">
      {passwordIncorrect && <p>Password incorrect</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PasswordPromptDialog;
