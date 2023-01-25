import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { BrowserRouter, RouterProvider } from "react-router-dom"
import { LayoutComponent } from "./components/LayoutComponent"
import { Router } from "./router"

 
function App() {
 
  return (
   <BrowserRouter>
    <ThemeProvider theme={defaultTheme}> 
    <GlobalStyle theme={defaultTheme}/>
   <Router/>    
   </ThemeProvider>
   </BrowserRouter>
    
  )
}

export default App
