import { createContext, useState } from "react"

//1). kiat set sebagai wadah global
export const ThemeConstext = createContext(null)

export function ThemeProvider({ children }) {
  // children artinya komponen-komponen yang dibungkus oleh ThemeProvider
  // <ThemeProvider> {children}</ThemeProvider>
  // <ThemeProvider> ........</ThemeProvider>

  // 2). buat state untuk theme, useState global yg bisa diakses oleh komponen lain
  const [theme, setTheme] = useState("light")

  //3). toggle function untuk mengganti theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }
  // contoh sederhana toggle theme
  // const toggleThemeSimple = () => {
  //   // if (theme === "light") {
  //   //   setTheme("dark")
  //   // } else {
  //   //   setTheme("light")
  //   // }
  //   setTheme((prevTheme) => {
  //     if (prevTheme === "light") {
  //       return "dark"
  //     } else {
  //       return "light"
  //     }
  //   })
  // }

  // 4). provide membagi theme dan toggleTheme ke komponen anak
  // value={{ theme, toggleTheme }}
  return (
    <ThemeConstext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeConstext.Provider>
  )
}