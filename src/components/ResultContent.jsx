import React from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ApartmentIcon from '@mui/icons-material/Apartment';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import FlagIcon from '@mui/icons-material/Flag';
import WifiIcon from '@mui/icons-material/Wifi';


function ResultContent() {
  const locationState = useSelector((state) => state.location);
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List>
        <ListItem >
          <ListItemIcon>
            <ApartmentIcon />
          </ListItemIcon>
          <ListItemText primary={ ` City : ${locationState.city}`} />
        </ListItem>
        <Divider />
        <ListItem >
          <ListItemIcon>
            <MapsHomeWorkIcon />
          </ListItemIcon>
          <ListItemText primary={ ` Region : ${locationState.region}`} />
        </ListItem>
        <Divider />
        <ListItem >
          <ListItemIcon>
            <FlagIcon />
          </ListItemIcon>
          <ListItemText primary={ ` Country : ${locationState.country}`} />
        </ListItem>
        <Divider />
        <ListItem >
          <ListItemIcon>
            <WifiIcon />
          </ListItemIcon>
          <ListItemText primary={ ` ISP : ${locationState.isp}`} />
        </ListItem>
      </List>

      
    </Box>
  );
}

export default ResultContent;
