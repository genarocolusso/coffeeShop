import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { Router } from "./router";
import { CartProvider } from "./context";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle theme={defaultTheme} />

          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
