"use client";

import { Box, Card, Typography, TextField, Button, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { addNote, deleteNote, Note } from "./actions";

export default function AdminContent({ notes }: { notes: Note[] }) {
  return (
    <div className="min-h-dvh flex flex-col items-center py-24 px-6 relative overflow-hidden">
      {/* Glow orb to match styles */}
      <div
        className="glow-orb w-[600px] h-[600px] bg-accent top-[-20%] left-[-10%]"
        style={{ animation: "pulse-glow 10s ease-in-out infinite", position: "absolute", zIndex: 0 }}
      />
      
      <div className="max-w-2xl w-full flex flex-col gap-10 z-10">
        <div>
          <Typography variant="h3" fontWeight={700} className="gradient-text mb-2">
            Admin Dashboard
          </Typography>
          <Typography variant="subtitle1" color="var(--text-secondary)">
            This is your simple built-in database backend!
          </Typography>
        </div>

        {/* Form to submit a new note using Server Action */}
        <Card className="glass-card" sx={{ background: "transparent", color: "var(--text-primary)", p: 4, borderRadius: "16px" }}>
          <Typography variant="h6" fontWeight={600} mb={3}>
            Keep track of a new idea:
          </Typography>
          
          <form
            action={async (formData: FormData) => {
              const content = formData.get("content") as string;
              if (content) {
                await addNote(content);
              }
            }}
            className="flex flex-col gap-4 items-start"
          >
            <TextField
              name="content"
              placeholder="e.g. Follow up with M&T Tech recruiter"
              multiline
              rows={3}
              fullWidth
              sx={{
                input: { color: "var(--text-primary)" },
                "& .MuiInputBase-root": { color: "var(--text-primary)", backgroundColor: "rgba(255,255,255,0.02)" },
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "var(--border-glass)" },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ background: "var(--gradient-main)", color: "white", borderRadius: "9999px", px: 4 }}
            >
              Save Note
            </Button>
          </form>
        </Card>

        {/* Display existing notes */}
        <div className="flex flex-col gap-4">
          <Typography variant="h6" fontWeight={600}>
            Your Notes ({notes.length})
          </Typography>
          
          {notes.length === 0 ? (
            <Typography color="var(--text-secondary)">You don't have any notes saved yet.</Typography>
          ) : (
            notes.map((note) => (
              <Card
                key={note.id}
                className="glass-card flex items-start justify-between p-4"
                sx={{ background: "transparent", color: "white", borderRadius: "12px" }}
              >
                <Box>
                  <Typography variant="body1">{note.content}</Typography>
                  <Typography variant="caption" color="var(--text-secondary)" sx={{ mt: 1, display: "block" }}>
                    {new Date(note.createdAt).toLocaleDateString()} @ {new Date(note.createdAt).toLocaleTimeString()}
                  </Typography>
                </Box>
                <form
                  action={async () => {
                    await deleteNote(note.id);
                  }}
                >
                  <IconButton type="submit" color="error" size="small">
                    <DeleteOutlineIcon />
                  </IconButton>
                </form>
              </Card>
            ))
          )}
        </div>
        
        <div className="mt-8 text-center pt-8 border-t border-[var(--border-glass)] flex justify-center gap-4">
          <Button href="/" variant="outlined" sx={{ borderRadius: "9999px", color: "var(--text-secondary)", borderColor: "var(--border-glass)" }}>
            Return to Portfolio
          </Button>
          
          <Button 
            onClick={async () => {
              const { logoutUser } = await import("../login/actions");
              await logoutUser();
            }}
            variant="text" 
            color="error"
            sx={{ borderRadius: "9999px", fontWeight: 600, textTransform: "none" }}
          >
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}
