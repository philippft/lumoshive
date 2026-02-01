import { useContext, useState } from "react";
import { ThemeConstext, ThemeProvider } from "./ThemeContext";
import User from "./User";

function Page() {
  // 6). useContext: ambil theme dan toggleTheme dari ThemeContext
  const { theme, toggleTheme } = useContext(ThemeConstext);

  // mode fecth (fetch/axios)
  const [mode, setMode] = useState("fetch");

  // set query search
  const [query, setQuery] = useState("");

  const isDark = theme === "dark";
  const pageStyle = {
    fontFamily: "Arial, sans-serif",
    padding: 16,
    minHeight: "100vh",
    background: isDark ? "#111" : "#fff",
    color: isDark ? "#fff" : "#111",
  };

  // 7). gunakan theme dan toggleTheme(di button) di komponen Page
  return (
    <div style={pageStyle}>
      <h2>Mencoba Fetch data dengan Fetch Js dan axios</h2>
      {/*   Mengubah themes */}
      <button onClick={toggleTheme} style={{ padding: 8, marginRight: 8 }}>
        Ganti ke tema {isDark ? "Terang" : "Gelap"}
      </button>

      {/* mengubah mode fetch */}
      <button
        onClick={() => setMode(mode === "fetch" ? "axios" : "fetch")}
        style={{ padding: 8 }}
      >
        Switch mode : {mode.toUpperCase()}
      </button>

      <hr style={{ margin: "12px 0" }} />

      <input
        placeholder="Cari User contoh (Leanne)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: 8, width: "300px" }}
      />
      <p>Mode Fetch yang dipilih: {mode}</p>
      <User mode={mode} query={query} />
    </div>
  );
}
// 5). bungkus komponen Page dengan ThemeProvider
// page itu child dari ThemeProvider
function App() {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  );
}

export default App;
