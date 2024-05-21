// components/PasswordPromptDialog.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    <div className="min-h-screen grid place-items-center">
      {passwordIncorrect && <p>Password incorrect</p>}
      <form onSubmit={handleSubmit} className="w-screen max-w-md grid gap-4 px-4">
        {/* <label htmlFor="password">Password:</label> */}
        <h1 className="text-center font-extrabold text-3xl lg:text-4xl mb-8">
          Halt, traveller 🔒
        </h1>
        <Input
          type="password"
          id="password"
          className="text-center"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="What's the password?"
          autoFocus
        />
        <Button type="submit">{loading ? "Loading..." : "Enter"}</Button>
      </form>
    </div>
  );
};

export default PasswordPromptDialog;
