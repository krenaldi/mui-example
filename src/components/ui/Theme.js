import { createTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

const theme = createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem"
    },
    estimate: {
      fontFamily: "Oswald",
      fontSize: "1rem",
      textTransform: "none",
      color: "#FFFFFF"
    }
  }
});

export default theme;