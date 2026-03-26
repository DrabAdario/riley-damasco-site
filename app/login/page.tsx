"use client";

import { Typography, Card, TextField, Button } from "@mui/material";
import { authenticateUser } from "./actions";
import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);

  // We wrap the server action in a client form handler to display our error easily
  const handleSubmit = async (formData: FormData) => {
    const result = await authenticateUser(formData);
    
    // The server action only returns something if there is an error.
    // If it succeeds, it uses `redirect()` which immediately routes to /admin
    if (result?.error) {
      setError(result.error);
    }
  };

  return (
    <div className="min-h-dvh flex items-center justify-center py-24 px-6 relative overflow-hidden">
      {/* Ambient Glow */}
      <div
        className="glow-orb w-[600px] h-[600px] bg-accent top-[10%] left-[-10%]"
        style={{ animation: "pulse-glow 10s ease-in-out infinite", position: "absolute", zIndex: 0 }}
      />
      
      <div className="max-w-md w-full flex flex-col gap-6 z-10 items-center">
        <Typography variant="h3" fontWeight={700} className="gradient-text mb-2 text-center text-4xl">
          Enter The Vault
        </Typography>

        <Card 
          className="glass-card" 
          sx={{ background: "transparent", color: "var(--text-primary)", p: 5, borderRadius: "16px", width: "100%" }}
        >
          <Typography variant="body1" color="var(--text-secondary)" mb={4}>
            If you do not have an account, entering a new username will automatically register you!
          </Typography>

          <form action={handleSubmit} className="flex flex-col gap-5 items-start">
            <TextField
              name="username"
              placeholder="Username"
              fullWidth
              size="small"
              sx={{
                input: { color: "var(--text-primary)" },
                "& .MuiInputBase-root": { color: "var(--text-primary)", backgroundColor: "rgba(255,255,255,0.02)" },
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "var(--border-glass)" },
              }}
            />
            
            <TextField
              name="password"
              type="password"
              placeholder="Password"
              fullWidth
              size="small"
              sx={{
                input: { color: "var(--text-primary)" },
                "& .MuiInputBase-root": { color: "var(--text-primary)", backgroundColor: "rgba(255,255,255,0.02)" },
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "var(--border-glass)" },
              }}
            />

            {error && (
              <Typography variant="subtitle2" color="error" mt={-1}>
                {error}
              </Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ background: "var(--gradient-main)", color: "white", borderRadius: "9999px", py: 1.5, mt: 1, textTransform: "none", fontWeight: 600, fontSize: "1rem" }}
            >
              Sign In Securely
            </Button>
          </form>
        </Card>

        {/* Back Link */}
        <div className="mt-2 text-center">
          <Button href="/" variant="text" sx={{ borderRadius: "9999px", color: "var(--text-secondary)" }}>
            &larr; Return to Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}
