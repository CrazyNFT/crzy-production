import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  // CrzyNFT Theme
  palette: {
    primary: {
      light: "#eff4f7",
      main: "#1c817c",
      dark: "#006260",
    },
  },
  typography: {
    fontFamily: [
      "Comfortaa",
      "Arial",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme;
