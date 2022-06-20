import { createTheme } from "@material-ui/core/styles";

export default createTheme({
  overrides: {
    MuiDropzoneSnackbar: {
      infoAlert: {
        backgroundColor: "#f44336",
      },
    },
    MuiAccordion: {
      root: {
        "&:before": {
          opacity: 0,
        },
      },
    },

    MuiAccordionSummary: {
      content: {
        margin: "0.3rem 0 0.3rem 0",
      },
    },

    MuiRating: {
      root: {
        color: "#CC0000",
      },
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    primary: {
      main: "#CC0000",
      light: "#FF4F30",
      dark: "#930000",
    },
    secondary: {
      main: "#FFFFFF",
      light: "#FFFFFF",
      dark: "#CCCCCC",
    },
    error: {
      main: "#BDBDBD",
      light: "#FF4F30",
      dark: "#930000",
    },
    background: {
      default: "#FFFFFF",
    },
  },
  breakpoints: {
    values: {
      xs: 280.05 /* phone */,
      sm: 600 /* I Pad */,
      md: 960 /* I Pad pro */,
      lg: 1280 /* monitor */,
      xl: 1920 /* 2K monitor */,
      /* xxl: 2048  4K monitor */
    },
  },
});
