import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { BooksProvider } from "./context/BooksContext.tsx";
import { RefreshProvider } from "./context/RefreshContext.tsx";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#5acccc",
      light: "#ffffff",
      dark: "#335c6e",
    },
    secondary: {
      light: "#cffafa",
      main: "#4aa088",
      dark: "#28b8b8",
    },
  },
  typography: {
    fontFamily: '"Mulish","Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BooksProvider>
        <RefreshProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </RefreshProvider>
      </BooksProvider>
    </ApolloProvider>
  </React.StrictMode>
);
