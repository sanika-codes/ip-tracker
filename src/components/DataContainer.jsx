import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { locationActions } from "../store";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import Ipbase from "@everapi/ipbase-js";
import Alert from '@mui/material/Alert';
import ResultContent from './ResultContent';


function DataContainer() {
  const dispatch = useDispatch();
  

  const [isAPICallSuccesful, setIsAPICallSuccesful] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState("");
  const [input, setInput] = useState("");

  const ipBase = new Ipbase(
    "ipb_live_D0VPVbWS4tlIIPUhcDo69hlpuCzbY9D44FS87vzW"
  );

  const handleTrack = (event) => {
    event.preventDefault();
    ipBase
      .info({
        ip: input,
      })
      .then((response) => {
        console.log(response);
        if (response.errors) {
          setIsAPICallSuccesful(false);
          setErrorMessage(response.message);
        } else {
          setIsAPICallSuccesful(true);
          dispatch(
            locationActions.locationSet({
              lat: response.data.location.latitude,
              lng: response.data.location.longitude,
              city : response.data.location.city.name,
              country : response.data.location.country.name,
              region : response.data.location.region.name,
              isp : response.data.connection.isp

            })
          );
        }
      });
  };

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ShareLocationIcon fontSize={"large"} />
      <Typography component="h1" variant="h5">
        IP Address Tracker
      </Typography>
      <Box component="form" noValidate onSubmit={handleTrack} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="ip"
          label="Enter IP Address"
          name="ip"
          autoFocus
          value={input}
          onChange={(evt) => {
            setInput(evt.target.value);
          }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Track
        </Button>
        { isAPICallSuccesful === undefined && ''}
        {isAPICallSuccesful && (
          <Typography component="h1" variant="h5">
            <ResultContent/>
          </Typography>
        )}

        {isAPICallSuccesful === false && <Alert severity="error">{errorMessage}</Alert>}
      </Box>
    </Box>
  );
}

export default DataContainer;
