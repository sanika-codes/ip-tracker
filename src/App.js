import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MapContainer from "./components/MapContainer";
import DataContainer from "./components/DataContainer";
import store from "./store/index";
import { Provider } from 'react-redux'

function App() {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Provider store={store}>
        <Grid item xs={12} sm={4} md={7} id="mapGrid">
          <MapContainer />
        </Grid>

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <DataContainer />
        </Grid>
        </Provider>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
