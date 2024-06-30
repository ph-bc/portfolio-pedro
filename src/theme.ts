import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#111111",
    },
    secondary: {
      main: "#1e90ff",
    },
  },
  typography: {
    fontFamily: ["Work Sans", "sans-serif"].join(","),
  },
});

theme = responsiveFontSizes(theme);

export default theme;
